import { useHobbyStorage } from "../../../shared/adapters/hobbyAdapter";
import type { Route } from "./+types/hobbyDetail";

export async function loadHobbyById({params}: Route.ClientActionArgs) {
  return useHobbyStorage().getById(params.hobbyId);
}
