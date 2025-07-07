import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router";
import { FormFieldWrapper } from "~/components/custom/Form/formFieldWrapper";
import FormSection from "~/components/custom/Form/formSection";
import { ControlledSelect } from "~/components/custom/Inputs/singleSelect";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
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
  data: IHobbyForm | IHobby;
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

  const submit = useSubmit();

  const onSubmit = (formData: IHobbyForm) => {
    // const fd = new FormData();

    // for (const [key, value] of Object.entries(formData)) {
    //   if (value instanceof File) {
    //     fd.append(key, value, value.name); // filename = správné jméno
    //   } else if (typeof value === "string") {
    //     fd.append(key, value);
    //   }
    // }

    // console.log(fd.get("img2"));

    // console.log(fd.get("name"));
    // console.log(fd.get("description"));
    // console.log(fd.get("locations"));
    // console.log(fd.get("img"));
    // console.log(fd.get("img2"));
    submit(formData, { method: "post" });
  };

  const locationsDummy = [
    {
      id: "1",
      name: "Brno, Czech Republic",
    },
    {
      id: "2",
      name: "Praha, Czech Republic",
    },
    {
      id: "3",
      name: "Mníšek, Czech Republic",
    },
    {
      id: "4",
      name: "Pattaya, Thailand",
    },
    {
      id: "5",
      name: "Amsterdam, Netherlands",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            description="Vyber lokace poboček, kde se hobby provádí..."
          >
            <ControlledSelect
              options={locationsDummy}
              valueKey="id"
              labelKey="name"
              placeholder="Výběr lokace"
              // disabled
            />
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

          {/* <FormFieldWrapper
            name="img2"
            label="Image URL"
            description="Tady je popisek URL pro obrazek..."
          >
            <ImageDropzone />
          </FormFieldWrapper> */}
        </FormSection>

        <Button type="submit">Submit</Button>
        <Button
          variant="softDestructive"
          type="button"
          onClick={() =>
            form.reset(getEmptyHobbyForm(), {
              keepErrors: false,
              keepTouched: false,
              keepDirty: false,
              keepIsSubmitted: false,
              keepSubmitCount: false,
            })
          }
        >
          Reset
        </Button>
        {errors ? <p>{errors}</p> : null}
      </form>

      {"id" in data && <p>✅ Hobby "{data.id}" successfully created!</p>}
    </Form>
  );
}
