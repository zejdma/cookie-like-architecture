import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "react-router";
import { FormFieldWrapper } from "~/components/custom/Form/formFieldWrapper";
import FormSection from "~/components/custom/Form/formSection";
import { ImageDropzone } from "~/components/custom/Inputs/imageInput";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  getEmptyHobbyForm,
  HobbyFormSchema,
  type IHobby,
  type IHobbyForm,
} from "~/shared/models/hobbyModel";

export default function HobbyForm({
  data,
  errors,
}: {
  data: IHobbyForm;
  errors: string;
}) {
  const form = useForm<IHobbyForm>({
    resolver: zodResolver(HobbyFormSchema),
    defaultValues: data ?? getEmptyHobbyForm(),
    mode: "onBlur",
  });

  const section1Title = "Hobby base info";
  const section1Description =
    "Vyplň základní informace o koníčku, který provozují zaměstnanci ve svém volném čase na konkrétních pobočkách.";

  const section2Title = "Hobby media";
  const section2Description =
    "Nahraj media pro koníček, který provozují zaměstnanci ve svém volném čase na konkrétních pobočkách.";

  return (
    <Form method="post">
      <FormProvider {...form}>
        <FormSection title={section1Title} description={section1Description}>
          <FormFieldWrapper //BIFormField UIFormField
            name="name"
            label="Název"
            description="Tady je popisek fieldu pro nazev..."
          >
            <Input placeholder="Název hobby" />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="description"
            label="Description"
            description="Tady je popis hobby..."
          >
            <Input placeholder="Description of hobby" />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="locations"
            label="Locations"
            description="Tady je seznam poboček, kde se hobby provádí..."
          >
            <Input placeholder="Název hobby" />
          </FormFieldWrapper>
        </FormSection>

        <FormSection title={section2Title} description={section2Description}>
          <FormFieldWrapper
            name="img"
            label="Image URL"
            description="Tady je popisek URL pro obrazek..."
          >
            <Input placeholder="URL of img hobby" />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="img"
            label="Image URL"
            description="Tady je popisek URL pro obrazek..."
          >
            {(field) => <ImageDropzone field={field} />}
          </FormFieldWrapper>
        </FormSection>

        <Button type="submit">Submit</Button>

        {errors ? <p>{errors}</p> : null}
      </FormProvider>
    </Form>
  );
}
