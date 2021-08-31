import { UseFormReturn, FormProvider } from "react-hook-form";

import { Grid } from "@material-ui/core";

import * as Masks from "../helpers/mask";
import { FilterValues } from "../helpers/validation/filter";
import { FormField } from "./form-field";
import { MaskFormField } from "./mask-form-field";

interface FilterProps {
  form: UseFormReturn<FilterValues>;
}

export function Filter({ form }: FilterProps) {
  return (
    <FormProvider {...form}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FormField name="name" id="name" label="Nome" />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormField name="email" id="email" label="E-mail" />
        </Grid>
        <Grid item xs={12} md={4}>
          <MaskFormField rifm={Masks.cpf} name="cpf" id="cpf" label="CPF" />
        </Grid>
      </Grid>
    </FormProvider>
  );
}
