import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import ErrorMessage from "~/components/custom/errorMessage";
import {
  HobbyFormSchema,
  type IHobby,
  type IHobbyForm,
} from "~/shared/models/hobbyModel";
import { useFormFields } from "~/shared/hooks/useFormFields";

export default function HobbyForm({
  data,
  errors,
}: {
  data: IHobby | IHobbyForm;
  errors: Record<string, string>;
}) {
  const fields = useFormFields(HobbyFormSchema, data);

  return (
    <Form method="post">
      <Input type="text" placeholder="Name" {...fields.field("name")} />
      <ErrorMessage>{fields.field("name").error || errors.name}</ErrorMessage>

      <Input
        type="text"
        placeholder="Description"
        {...fields.field("description")}
      />
      <ErrorMessage>
        {fields.field("description").error || errors.description}
      </ErrorMessage>

      <Input
        type="text"
        placeholder="Locations"
        {...fields.field("locations")}
      />
      <ErrorMessage>
        {fields.field("locations").error || errors.locations}
      </ErrorMessage>

      <Input type="text" placeholder="Image URL" {...fields.field("img")} />
      <ErrorMessage>{fields.field("img").error || errors.img}</ErrorMessage>

      <Button type="submit">Submit</Button>

      {"id" in data && <p>✅ Hobby "{data.id}" successfully created!</p>}
    </Form>
  );
}
