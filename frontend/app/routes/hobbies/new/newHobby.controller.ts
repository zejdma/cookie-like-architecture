
import { getEmptyHobbyForm } from "~/shared/models/hobbyModel";
import type { IHobby, IHobbyForm } from "~/shared/models/hobbyModel";
import { useActionData, useNavigation } from "react-router";
import type { newHobbyAction } from "./newHobby.action";


export function useNewHobbyController() {
  const actionData = useActionData<typeof newHobbyAction>();
  const navigation = useNavigation();

  const controller = {
    isLoading: navigation.state === "submitting",
    formData: (actionData?.data ?? getEmptyHobbyForm()) as IHobbyForm,
    errorMsg: typeof actionData?.errors === "string" ? actionData.errors : "",
    submitted: Boolean(actionData?.data?.id),
  };

  return controller;
}