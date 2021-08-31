import { ComponentPropsWithoutRef } from "react";
import { useFormContext, get } from "react-hook-form";

import { TextField as MuiTextField } from "@material-ui/core";

interface FormFieldProps extends ComponentPropsWithoutRef<typeof MuiTextField> {
  id: string;
  name: string;
}

export function FormField({ name, helperText, ...rest }: FormFieldProps) {
  const { register, formState } = useFormContext();
  const error = get(formState.errors, name);

  const { ref, ...form } = register(name);

  return <MuiTextField inputRef={ref} error={!!error} helperText={error?.message ?? helperText} {...rest} {...form} />;
}
