
import type { Route } from "./+types/hobbyList";
import { useHobbyStorage } from "../../../shared/adapters/hobbyAdapter";

export async function hobbyListLoader({ request }: Route.ClientActionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10);
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10);
  return await useHobbyStorage().getAll(page, limit);
}
