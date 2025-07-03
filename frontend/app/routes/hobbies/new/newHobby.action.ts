import { getEmptyHobbyForm, HobbyFormSchema } from "~/shared/models/hobbyModel";
import type { Route } from "./+types/newHobby";
import { useHobbyStorage } from "~/shared/adapters/hobbyAdapter";

export async function newHobbyAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData);
  const parseResult = HobbyFormSchema.safeParse(raw);

  console.log(formData);

  if (!parseResult.success) {
    console.error("Parsing error in newHobbyAction");
    return {
      data: null,
      errors: "PARSE ERROR",
    };
  }
  try {
    // return await useHobbyStorage().create(parseResult.data);
    return {
      name: "Dummy response z action",
      description: "popis dummy responsu",
      locations: "brno praha",
      img: "https://radar.bourky.cz/",
      img2: undefined as unknown as File,
    };
  } catch (error) {
    console.error(error);
  }
}
