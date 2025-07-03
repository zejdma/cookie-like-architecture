import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import { useEffect, useState } from "react";

type Vegetable = {
  id: string;
  name: string;
};

export default function Home() {
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  const [newName, setNewName] = useState("");

  // 🟢 Načti všechna data z backendu
  useEffect(() => {
  fetch("http://localhost:3000/vegetables")
    .then((res) => {
      if (!res.ok) throw new Error("Chyba v odpovědi serveru");
      return res.json();
    })
    .then(setVegetables)
    .catch((err) => console.error("Chyba při načítání:", err));
}, []); // ← tohle je důležité!



  // ➕ Odešli novou zeleninu
  const handleAdd = async () => {
    if (!newName.trim()) return;
    const res = await fetch("http://localhost:3000/vegetables", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    const newVeg = await res.json();
    setVegetables((prev) => [...prev, newVeg]);
    setNewName("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Zelenina</h1>

      <ul className="list-disc list-inside">
        {vegetables.map((veg) => (
          <li key={veg.id}>{veg.name}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Název nové zeleniny"
          className="border rounded px-2 py-1"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Přidat
        </button>
      </div>
    </div>
  );
}
