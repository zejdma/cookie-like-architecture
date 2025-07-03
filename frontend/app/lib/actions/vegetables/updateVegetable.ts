import { redirect } from "react-router";

export async function updateVegetable(id: string, name: string) {
  const res = await fetch(`http://localhost:3000/vegetables/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error("Úprava se nezdařila");
  return res.json();
}

export async function handleUpdateVegetable(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();

  if (!id || !name) return { error: "Chybí ID nebo jméno" };

  try {
    const res = await fetch(`http://localhost:3000/vegetables/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) throw new Error();
    return redirect("/vegetables"); 
  } catch {
    return { error: "Nepodařilo se upravit zeleninu" };
  }
}
