import type { Vegetable } from "../../models/vegetable";

export async function createVegetable(name: string): Promise<Vegetable> {
  const res = await fetch("http://localhost:3000/vegetables", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error("Nepodařilo se vytvořit zeleninu");

  return res.json();
}

export async function handleCreateVegetable({
  request,
}: {
  request: Request;
}): Promise<CreateVegetableResult> {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();

  if (!name) return { error: "Název je povinný" };
  const newVeg = await createVegetable(name);
  return { success: true, newVeg };
}

export type CreateVegetableResult = {
  success?: boolean;
  error?: string;
  newVeg?: Vegetable;
};