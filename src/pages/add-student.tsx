import { FormProvider, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@material-ui/core";

import { FormField, MaskFormField, Page } from "../components";
import { useCreateStudentMutation, StudentValuesFragmentDoc } from "../graphql";
import * as Masks from "../helpers/mask";
import { studentSchema, StudentValues } from "../helpers/validation/student";

export default function AddStudent() {
  const history = useHistory();

  const [addStudent] = useCreateStudentMutation({
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          findAllStudents(students = []) {
            const student = cache.writeFragment({
              data: data?.createStudent,
              fragment: StudentValuesFragmentDoc,
            });

            return [...students, student];
          },
        },
      });
    },
  });

  const form = useForm<StudentValues>({
    resolver: yupResolver(studentSchema),
    defaultValues: { name: "", email: "", cpf: "" },
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    await addStudent({ variables: { input: values } });
    history.push("/");
  });

  return (
    <Page title="Novo Aluno" subTitle="Adicionar">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormField id="name" name="name" label="Nome" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormField id="email" name="email" label="E-mail" />
            </Grid>
            <Grid item xs={12} md={4}>
              <MaskFormField rifm={Masks.cpf} id="cpf" name="cpf" label="CPF" />
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button component={Link} variant="text" to="/">
                    Cancelar
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit">Adicionar Aluno</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Page>
  );
}
