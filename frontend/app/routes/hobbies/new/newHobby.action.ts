import { HobbyFormSchema } from "~/shared/models/hobbyModel";
import type { Route } from "./+types/newHobby";
import { createHobbyUseCase } from "~/shared/domain/newHobbyUseCase";
import { hobbyRepository } from "~/shared/repositories/hobbyRepository";
import { useCases } from "~/shared/domain";

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

  const hobby = parseResult.data

  try {
    return await useCases.createHobby.execute(hobby);
    // return await useHobbyStorage().create(parseResult.data);
    // return {
    //   name: "Dummy response z action",
    //   description: "popis dummy responsu",
    //   locations: "brno praha",
    //   img: "https://radar.bourky.cz/",
    //   img2: undefined as unknown as File,
    // };
  } catch (error) {
    console.error(error);
  }
}
