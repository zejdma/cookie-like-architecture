// components/form/form-field-wrapper.tsx
import React from "react";
import {
  useFormContext,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "~/components/ui/form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  description: string;
  children: React.ReactNode | ((field: any) => React.ReactNode);
  labelClassName?: string;
};

export function FormFieldWrapper<T extends FieldValues>({
  name,
  label,
  description,
  children,
}: Props<T>) {

  const { control, formState } = useFormContext();
  
  const hasError = !!formState.errors[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {typeof children === "function"
              ? (children as (field: any) => React.ReactNode)(field)
              : React.isValidElement(children)
              ? React.cloneElement(children, field)
              : null}
          </FormControl>
          {!hasError && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
