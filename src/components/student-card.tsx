import { useCallback, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  makeStyles,
  Theme,
} from "@material-ui/core";

import { FindAllStudentsDocument, Student, useDeleteStudentMutation } from "../graphql";

interface StudentCardProps {
  student: Student;
}

const useStyles = makeStyles((theme: Theme) => ({
  actions: {
    padding: theme.spacing(3),
  },
}));

export function StudentCard({ student }: StudentCardProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [deleteStudent] = useDeleteStudentMutation({
    refetchQueries: [FindAllStudentsDocument],
  });

  const handleDeleteStudent = useCallback(async () => {
    await deleteStudent({ variables: { id: student.id } });
    setOpen(false);
  }, [deleteStudent, student]);

  return (
    <Paper variant="outlined">
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Deseja excluir o aluno &quot;{student.name}&quot;?</DialogTitle>
        <DialogActions className={classes.actions}>
          <Button variant="text" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleDeleteStudent}>Excluir</Button>
        </DialogActions>
      </Dialog>
      <Box p={2}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography component="p" variant="h6">
              {student.name}
            </Typography>
            <Typography color="primary">{student.email}</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="Excluir" onClick={() => setOpen(true)}>
              <FiTrash2 />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
