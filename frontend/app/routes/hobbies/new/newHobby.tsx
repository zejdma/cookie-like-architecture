import Header from "~/components/custom/header";
import { newHobbyAction } from "./newHobby.action";
import BackButton from "~/components/custom/BackButton";
import { useNewHobbyController } from "./newHobby.controller";
import HobbyForm3 from "./components/hobbyForm3";

export const action = newHobbyAction;

export default function NewHobby() {
  const controller = useNewHobbyController();

  return (
    <div className="space-y-4">
      <BackButton />
      <Header>New Hobby</Header>
      <HobbyForm3
        data={controller.formData}
        errors={controller.errorMsg}
        isLoading={controller.isLoading}
        submitted={controller.submitted}
      />
    </div>
  );
}
