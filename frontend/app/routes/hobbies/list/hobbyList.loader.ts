import type { Route } from "./+types/hobbyList";
import { hobbyRepository } from "../../../shared/repositories/hobbyRepository";
import { useCases } from "~/shared/domain";

export async function hobbyListLoader({ request }: Route.ClientActionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10);
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10);
  // return await hobbyRepository().getAll(page, limit);
  return await useCases.getAllHobbies.execute(page, limit);
}
