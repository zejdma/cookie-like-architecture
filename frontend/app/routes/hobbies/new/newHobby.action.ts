import { HobbyFormSchema } from "~/shared/models/hobbyModel";
import type { Route } from "./+types/newHobby";
import { useHobbyStorage } from "~/shared/adapters/HobbyAdapter";

export async function newHobbyAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData);
  const parseResult = HobbyFormSchema.safeParse(raw);

  if (!parseResult.success) {
    console.error("Parsing error in newHobbyAction");
    return {
      data: null,
      errors: null,
    };
  }
  try {
    return await useHobbyStorage().create(parseResult.data);
  } catch (error) {
    console.error(error);
  }
}