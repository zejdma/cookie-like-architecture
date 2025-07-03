import type { Vegetable } from "../../models/vegetable";

export async function loadVegetables(): Promise<{ vegetables: Vegetable[] }> {
  const res = await fetch("http://localhost:3000/vegetables");
  if (!res.ok) throw new Error("Chyba při načítání zeleniny");
  const vegetables = await res.json();
  return { vegetables };
}
