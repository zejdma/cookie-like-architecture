import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useSubmit } from "react-router";
import { FormFieldWrapper } from "~/components/custom/Form/formFieldWrapper";
import FormSection from "~/components/custom/Form/formSection";
import { ImageDropzone } from "~/components/custom/Inputs/imageInput";
import { ControlledMultiSelect } from "~/components/custom/Inputs/multiSelect";
import { RichTextInput } from "~/components/custom/Inputs/Richtext/richTextInput";
import { ControlledSelect } from "~/components/custom/Inputs/singleSelect";
import { ControlledSwitch } from "~/components/custom/Inputs/switchInput";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import {
  getEmptyHobbyForm,
  HobbyFormSchema,
  type IHobbyForm,
} from "~/shared/models/hobbyModel";

export default function HobbyForm3({
  data,
  errors,
  isLoading,
  submitted,
}: {
  data: IHobbyForm;
  errors: string;
  isLoading?: boolean;
  submitted?: boolean;
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
    const fd = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof File) {
        fd.append(key, value, value.name); // filename = správné jméno
      } else if (typeof value === "string") {
        fd.append(key, value);
      }
    }

    console.log(fd.get("img2"));

    console.log(fd.get("name"));
    console.log(fd.get("description"));
    console.log(fd.get("locations"));
    console.log(fd.get("img"));
    console.log(fd.get("img2"));
    console.log(fd.get("people"));
    // submit(formData, { method: "post" });
  };

  const peopleDummy = [
    { id: "1", name: "Tomáš" },
    { id: "2", name: "Anna" },
    { id: "3", name: "Lukáš" },
    { id: "4", name: "Tomáš Tomáš" },
    { id: "5", name: "Anna Anna" },
    { id: "6", name: "Lukáš Lukáš" },
    { id: "7", name: "Tomáš Tomáš Tomáš" },
    { id: "8", name: "Anna Anna Anna" },
    { id: "9", name: "Lukáš Lukáš Lukáš" },
    { id: "10", name: "Tomáš Tomáš Tomáš Tomáš" },
    { id: "11", name: "Anna Anna Anna Anna" },
    { id: "12", name: "Lukáš Lukáš Lukáš Lukáš" },
    {
      id: "13",
      name: "Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin Martin",
    },
  ];

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

  const environmentOptions = [
    { id: "indoor", name: "Indoor" },
    { id: "outdoor", name: "Outdoor" },
  ];

  const tagOptions = [
    { id: "fun", name: "Fun" },
    { id: "creative", name: "Creative" },
    { id: "group", name: "Group" },
    { id: "solo", name: "Solo" },
    { id: "educational", name: "Educational" },
  ];

  const seasonOptions = [
    { id: "spring", name: "Jaro" },
    { id: "summer", name: "Léto" },
    { id: "autumn", name: "Podzim" },
    { id: "winter", name: "Zima" },
  ];

  const isPublic = useWatch({ control: form.control, name: "isPublic" });

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
              // searchable
              // disabled
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="environment"
            label="Prostředí"
            description="Vyber, kde se hobby provozuje..."
          >
            <ControlledSelect
              options={environmentOptions}
              placeholder="Vyber prostředí"
              valueKey="id"
              labelKey="name"
              searchable
              // disabled
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="people"
            label="People"
            description="Vyber lidi zapojené do hobby..."
          >
            <ControlledMultiSelect
              options={peopleDummy}
              valueKey="id"
              labelKey="name"
              placeholder="Vyber osoby"
              // disabled
              // searchable
              badges
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="tags"
            label="Tagy"
            description="Vyber tagy popisující hobby..."
          >
            <ControlledMultiSelect
              options={tagOptions}
              placeholder="Vyber tagy"
              valueKey="id"
              labelKey="name"
              // badges
              // disabled
              searchable
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="seasons"
            label="Roční období"
            description="Vyber období, kdy se hobby provádí..."
          >
            <ControlledMultiSelect
              options={seasonOptions}
              placeholder="Vyber období"
              valueKey="id"
              labelKey="name"
              badges
              searchable
              disabled
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

          <FormFieldWrapper
            name="img2"
            label="Image URL"
            description="Tady je popisek URL pro obrazek..."
          >
            <ImageDropzone />
          </FormFieldWrapper>

        </FormSection>
        
        <FormSection title={section2Title} description={section2Description}>
          <FormFieldWrapper name="isPublic" label="Veřejné hobby">
            <ControlledSwitch description="Zapni, pokud má být tento koníček veřejně viditelný" />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="publicDescription"
            label="Veřejný popis"
            description="Tento popis se zobrazí veřejně"
            disabled={!isPublic}
          >
            <Input placeholder="Popis viditelný veřejně" disabled={!isPublic} />
          </FormFieldWrapper>

          <FormFieldWrapper
            name="richDescription"
            label="Popis"
            description="Popiš hobby pomocí formátovaného textu"
          >
            <RichTextInput placeholder="Zadej text..." />
          </FormFieldWrapper>
        </FormSection>
        
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
        {/* Reset, errors, success */}
        {errors && <p className="text-red-500">{errors}</p>}
        {submitted && <p className="text-green-500">✅ Hobby created!</p>}
      </form>
    </Form>
  );
}
