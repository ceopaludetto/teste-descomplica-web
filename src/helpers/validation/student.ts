import { Yup } from "./yup";

export const studentSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  cpf: Yup.string().required(),
});

export type StudentValues = Yup.InferType<typeof studentSchema>;
