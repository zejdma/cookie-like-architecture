import { useCases } from "~/shared/domain";
import { hobbyRepository } from "../../../shared/repositories/hobbyRepository";
import type { Route } from "./+types/hobbyDetail";

export async function loadHobbyById({params}: Route.ClientActionArgs) {
  // return hobbyRepository().getById(params.hobbyId);
  return await useCases.getOneHobby.execute(params.hobbyId);
}
