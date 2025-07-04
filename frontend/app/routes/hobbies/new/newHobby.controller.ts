
import { getEmptyHobbyForm } from "~/shared/models/hobbyModel";
import type { IHobby, IHobbyForm } from "~/shared/models/hobbyModel";
import { useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/newHobby";
import type { newHobbyAction } from "./newHobby.action";


export function useNewHobbyController() {
  const actionData = useActionData<typeof newHobbyAction>();
  const navigation = useNavigation();

  const isLoading = navigation.state === "submitting";

  const formData: IHobbyForm =
    actionData?.data ?? getEmptyHobbyForm();

  const errorMsg = typeof actionData?.errors === "string" ? actionData.errors : "";

  return {
    isLoading,
    formData,
    errorMsg,
    submitted: Boolean(actionData?.data?.id),
  };
}
