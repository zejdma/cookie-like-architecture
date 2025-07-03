import React from "react";
import {
  useFormContext,
  type FieldValues,
  type Path,
  type UseFormTrigger,
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
  children: React.ReactElement;
  labelClassName?: string;
};

export function FormFieldWrapper<T extends FieldValues>({
  name,
  label,
  description,
  children,
}: Props<T>) {
  const { control, formState, trigger} = useFormContext<T>();
  const hasError = !!formState.errors[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {React.isValidElement(children)
              ? React.cloneElement(children as React.ReactElement<any>, {
                  ...field,
                  fieldName: name,
                  trigger,
                })
              : null}
          </FormControl>
          {!hasError && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
