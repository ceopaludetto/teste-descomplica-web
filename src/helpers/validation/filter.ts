import { Yup } from "./yup";

export const filterSchema = Yup.object({
  name: Yup.string(),
  email: Yup.string().email(),
  cpf: Yup.string(),
});

export type FilterValues = Yup.InferType<typeof filterSchema>;
