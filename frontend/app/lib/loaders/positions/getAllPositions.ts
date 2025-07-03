// lib/loaders/vegetables/getAllVegetables.ts
import type { LoaderFunctionArgs } from "react-router";
import type { Position } from "~/lib/models/position";

export async function loadPositions({
  q = "",
  page = 1,
  limit = 10,
}: {
  q?: string;
  page?: number;
  limit?: number;
}): Promise<{
  positions: Position[];
  total: number;
  page: number;
  pageSize: number;
  q: string;
}> {
  const params = new URLSearchParams({
    q,
    page: String(page),
    limit: String(limit),
  });

  const res = await fetch(`http://localhost:3000/positions?${params.toString()}`);
  if (!res.ok) throw new Error("Chyba při načítání pozic");

  return res.json();
}

export async function handleLoadPositions({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page") || "1");

  return await loadPositions({ q, page });
}
