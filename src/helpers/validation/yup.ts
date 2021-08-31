import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Campo obrigatório",
  },
  string: {
    email: "E-mail inválido",
  },
});

export { Yup };
