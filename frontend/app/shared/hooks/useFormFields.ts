import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, type TypeOf } from "zod";

export type UseFormFieldsResult = ReturnType<typeof useFormFields>;

export function useFormFields<T extends ZodType<any, any, any>>(
  schema: T,
  defaultValues: TypeOf<T>
) {
  const form = useForm<TypeOf<T>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  function field<K extends Path<TypeOf<T>>>(fieldName: K) {
    return {
      ...form.register(fieldName, {
        onBlur: () => form.trigger(fieldName),
      }),
      error: form.formState.errors[fieldName]?.message,
    };
  }

  return {
    form, // ✅ přidat sem
    field,
  };
}
