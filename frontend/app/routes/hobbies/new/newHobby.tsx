import type { Route } from "./+types/newHobby";
import HobbyForm from "./components/hobbyForm";
import Header from "~/components/custom/header";
import { newHobbyAction } from "./newHobby.action";
import { getEmptyHobbyForm } from "~/shared/models/hobbyModel";
import HobbyForm2 from "./components/hobbyForm2";
import BackButton from "~/components/custom/BackButton";

export const action = newHobbyAction;

export default function NewHobby({ actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-4">
      <BackButton />
      <Header>New Hobby</Header>
      {/* <HobbyForm
        data={actionData?.data ?? getEmptyHobbyForm()}
        errors={actionData?.errors ?? {}}
      /> */}
      <HobbyForm2
        data={actionData?.data ?? getEmptyHobbyForm()}
        errors={actionData?.errors ? "Eroryyyy" : ""}
      />
    </div>
  );
}
