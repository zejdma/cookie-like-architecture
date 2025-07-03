import { Form, useNavigate, useActionData } from "react-router";
import { loadVegetableById } from "~/lib/loaders/vegetables/getVegetableById";
import type { Vegetable } from "~/lib/models/vegetable";
import type { Route } from "./+types/vegetableDetail";
import { handleDeleteVegetable } from "~/lib/actions/vegetables/deleteVegetable";
import { useEffect, useState } from "react";
import { handleUpdateVegetable } from "~/lib/actions/vegetables/updateVegetable";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const clientLoader = loadVegetableById;

export const clientAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); 
  const _action = formData.get("_action");

  if (_action === "delete") {
    return handleDeleteVegetable(formData);
  }

  if (_action === "update") {
    return handleUpdateVegetable(formData);
  }

  return null;
};

export default function VegetableDetail({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const veg = loaderData.vegetable as Vegetable;
  const result = useActionData() as { success?: boolean; error?: string };
  const [name, setName] = useState(veg.name);

  useEffect(() => {
    if (result?.success) {
     
    }
  }, [result]);

  return (
    <div className="space-y-4">
      <Button
        type="button"
        onClick={() => navigate(-1)}
        variant="outline"
      >
        Zpět
      </Button>
      <Form method="post" className="space-y-2">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold">Zelenina</h1>
          <Button type="submit">
            Uložit
          </Button>
        </div>
      
        <input type="hidden" name="id" value={veg.id} />
        <input type="hidden" name="_action" value="update" />
        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full"
        />
        
        {result?.success && (
          <p className="text-green-600">Změny byly uloženy.</p>
        )}
      </Form>

      <Form method="post">
        <input type="hidden" name="id" value={veg.id} />
        <input type="hidden" name="_action" value="delete" />
        <Button variant="destructive" >Smazat</Button>
      </Form>

      {result?.error && <p className="text-red-600">{result.error}</p>}
    </div>
  );
}
