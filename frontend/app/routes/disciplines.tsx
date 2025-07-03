import { loadVegetables } from "~/lib/loaders/vegetables/getAllVegetables";
import type { Vegetable } from "~/lib/models/vegetable";
import { Form, Link, useActionData } from "react-router";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/disciplines";
import { HeartHandshake } from "lucide-react";

export const clientLoader = loadVegetables;

export default function Vegetables({ loaderData }: Route.ComponentProps) {
 return (
    <div className="space-y-4">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">Disciplines</h1>
        <Button type="submit">
          <Link to="/vegetables/new">
              Nová zelenina
          </Link>
        </Button>
      </div>
      
      <div>
     
      </div>
    </div>
  );
}
