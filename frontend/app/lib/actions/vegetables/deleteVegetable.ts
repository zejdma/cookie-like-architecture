import { redirect } from "react-router";

export async function deleteVegetable(id: string) {
  const res = await fetch(`http://localhost:3000/vegetables/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Smazání se nezdařilo");
  return res.json();
}

export async function handleDeleteVegetable(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) return { error: "Chybí ID" };

  try {
    await fetch(`http://localhost:3000/vegetables/${id}`, {
      method: "DELETE",
    });
    return redirect("/vegetables");
  } catch {
    return { error: "Nepodařilo se smazat zeleninu" };
  }
}
