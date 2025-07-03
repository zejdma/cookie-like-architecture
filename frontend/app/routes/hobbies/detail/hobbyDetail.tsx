import { loadHobbyById } from "~/routes/hobbies/detail/hobbyDetail.loader";
import type { Route } from "./+types/hobbyDetail";
import HobbyForm from "../new/components/hobbyForm";
import BackButton from "~/components/custom/BackButton";

export const clientLoader = loadHobbyById;

export default function HobbyDetail({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-4">
            <BackButton/>
            <div className="w-full space-y-4">
                <h1 className="text-2xl font-bold">{loaderData.name}</h1>
                <HobbyForm data={loaderData} errors={{}} />
            </div>
        </div>
    );
}
