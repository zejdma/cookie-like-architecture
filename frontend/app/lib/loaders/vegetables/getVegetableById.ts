// lib/loaders/vegetables/getVegetableById.ts
export async function loadVegetableById({
  params,
}: {
  params: { vegetableId: string };
}) {
  const id = params.vegetableId;

  if (!id) {
    throw new Error("Chybějící ID zeleniny v parametrech routy.");
  }

  const res = await fetch(`http://localhost:3000/vegetables/${id}`);

  if (!res.ok) {
    throw new Error("Zelenina nenalezena");
  }

  const vegetable = await res.json();
  return { vegetable };
}
