import type { Route } from "./+types/newHobby";
import HobbyForm from "./components/hobbyForm";
import Header from "~/components/custom/header";
import { newHobbyAction } from "./newHobby.action";
import { getEmptyHobbyForm } from "~/shared/models/hobbyModel";
import HobbyForm2 from "./components/hobbyForm2";
import BackButton from "~/components/custom/BackButton";
import { useNewHobbyController } from "./newHobby.controller";
import HobbyForm3 from "./components/hobbyForm3";

export const action = newHobbyAction;

export default function NewHobby() {
  const { formData, errorMsg, submitted, isLoading } = useNewHobbyController();

  return (
    <div className="space-y-4">
      <BackButton />
      <Header>New Hobby</Header>
      <HobbyForm3
        data={formData}
        errors={errorMsg}
        isLoading={isLoading}
        submitted={submitted}
      />
    </div>
  );
}