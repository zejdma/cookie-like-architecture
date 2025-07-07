import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

type ControlledSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  fieldName?: string;
  trigger?: (name: string) => Promise<boolean>;
  placeholder?: string;
  options: any[];
  valueKey?: string; // default: "value"
  labelKey?: string; // default: "label"
  disabled?: boolean;
};

export const ControlledSelect = ({
  value,
  onChange,
  fieldName,
  trigger,
  placeholder = "Vyber jeden...",
  options,
  valueKey = "value",
  labelKey = "label",
  disabled,
}: ControlledSelectProps) => {
  const handleChange = (val: string) => {
    onChange?.(val);
    if (fieldName && trigger) trigger(fieldName);
  };

  const {
    formState: { errors, isSubmitted },
  } = useFormContext();

  const hasError = fieldName ? !!errors[fieldName] && isSubmitted : false;
  return (
    <Select value={value} onValueChange={handleChange} disabled={disabled}>
      <SelectTrigger
        className={cn(
          "",
          hasError && "border border-destructive ring-destructive focus:ring-1"
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt, idx) => (
          <SelectItem key={idx} value={opt[valueKey]}>
            {opt[labelKey]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
