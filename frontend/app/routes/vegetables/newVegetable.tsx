
import { Form, useNavigate } from "react-router";
import { handleCreateVegetable, type CreateVegetableResult } from "~/lib/actions/vegetables/createVegetable";
import type { Route } from "./+types/newVegetable";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";


export const clientAction = handleCreateVegetable;

export default function VegetableNew({ actionData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const result = actionData as CreateVegetableResult;

  return (
    <Form method="post" className="">
        <div className="space-y-4">  
            <Button variant="outline" type="button" onClick={() => navigate(-1)}>Zpět</Button>
            <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold">Přidat zeleninu</h1>
                <div className="flex justify-center space-4">
                    <Button type="submit">Přidat</Button>
                </div>
            </div>
            <Input name="name" placeholder="Nová zelenina"/>
        
            {actionData?.error && <p className="text-red-600">{actionData.error}</p>}
            {result?.success && (
                <div className="text-green-700">
                    ✅ Zelenina vytvořena!
                </div>
            )}
        </div>
    </Form>
  );
}
