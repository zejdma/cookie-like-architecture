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
import { cn } from "~/lib/utils";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  description?: string;
  children: React.ReactElement;
  labelClassName?: string;
  disabled?: boolean;
};

export function FormFieldWrapper<T extends FieldValues>({
  name,
  label,
  description,
  children,
  disabled,
}: Props<T>) {
  const { control, formState, trigger } = useFormContext<T>();
  const hasError = !!formState.errors[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn(disabled && "text-muted-foreground opacity-50")}>
            {label}
          </FormLabel>
          <FormControl>
            {React.isValidElement(children)
              ? React.cloneElement(children as React.ReactElement<any>, {
                  ...field,
                  fieldName: name,
                  trigger,
                  // disabled,
                })
              : null}
          </FormControl>
          {!hasError && (
            <FormDescription
              className={cn(disabled && "text-muted-foreground opacity-50")}
            >
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
