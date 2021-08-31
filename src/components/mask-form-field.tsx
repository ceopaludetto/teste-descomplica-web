import type { ComponentPropsWithoutRef } from "react";
import { useController, get } from "react-hook-form";

import { TextField as MuiTextField } from "@material-ui/core";
import { Rifm, useRifm } from "rifm";

interface MaskTextFieldProps
  extends Omit<ComponentPropsWithoutRef<typeof MuiTextField>, "value" | "onChange" | "variant"> {
  id: string;
  name: string;
  rifm: Omit<ComponentPropsWithoutRef<typeof Rifm>, "value" | "onChange" | "children">;
}

export function MaskFormField({ name, rifm, helperText, ...rest }: MaskTextFieldProps) {
  const {
    field,
    formState: { errors },
  } = useController({ name });
  const { onChange, value } = useRifm({
    onChange: field.onChange,
    value: field.value,
    ...rifm,
  });
  const error = get(errors, name);

  const { ref, ...form } = field;

  return (
    <MuiTextField
      inputRef={ref}
      {...form}
      onChange={onChange}
      value={value}
      error={!!error}
      helperText={error?.message ?? helperText}
      {...rest}
    />
  );
}
