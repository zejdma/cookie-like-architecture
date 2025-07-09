import { FormDescription } from "~/components/ui/form";
import { Switch as BaseSwitch } from "~/components/ui/switch";

type ControlledSwitchProps = {
  value?: boolean;
  onChange?: (val: boolean) => void;
  disabled?: boolean;
  description?: string;
};

export const ControlledSwitch = ({
  value,
  onChange,
  disabled,
  description,
}: ControlledSwitchProps) => {
  return (
    <div className="flex items-center justify-between">
      <FormDescription>{description}</FormDescription>
      <BaseSwitch
        checked={value}
        onCheckedChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
