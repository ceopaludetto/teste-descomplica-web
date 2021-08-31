import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDebounce } from "react-use";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, Grid, Button, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";

import { Page, Filter, StudentCard } from "../components";
import { useFindAllStudentsQuery } from "../graphql";
import { removeFalsy } from "../helpers/object";
import { filterSchema, FilterValues } from "../helpers/validation/filter";

const useStyles = makeStyles((theme: Theme) => ({
  skeleton: {
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function StudentList() {
  const classes = useStyles();

  const form = useForm<FilterValues>({
    resolver: yupResolver(filterSchema),
    defaultValues: { name: "", email: "", cpf: "" },
    mode: "all",
  });

  const { name, email, cpf } = form.watch();
  const [variables, setVariables] = useState({ name, email, cpf });
  const handleSubmit = form.handleSubmit((values) => setVariables(values));

  useDebounce(() => handleSubmit(), 500, [name, email, cpf]);

  const { data, loading } = useFindAllStudentsQuery({
    variables: removeFalsy(variables),
  });

  return (
    <Page
      title="Alunos"
      subTitle="Lista"
      actions={
        <Button component={Link} to="/add" startIcon={<FiPlus />}>
          Adicionar Aluno
        </Button>
      }
    >
      <Filter form={form} />
      <Box my={3}>
        <Divider />
      </Box>
      <Grid container spacing={3}>
        {loading && (
          <Grid item xs={12} md={4}>
            <Skeleton className={classes.skeleton} variant="rect" height={88} />
          </Grid>
        )}
        {!loading &&
          data?.findAllStudents.map((student) => (
            <Grid key={student.id} item xs={12} md={4}>
              <StudentCard student={student} />
            </Grid>
          ))}
      </Grid>
    </Page>
  );
}
