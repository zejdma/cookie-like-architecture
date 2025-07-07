import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { useElementWidth } from "~/shared/hooks/useElementWidth";

type ControlledMultiSelectProps = {
  value?: string[];
  onChange?: (value: string[]) => void;
  fieldName?: string;
  trigger?: (name: string) => Promise<boolean>;
  placeholder?: string;
  options: any[];
  valueKey?: string; // default: "value"
  labelKey?: string; // default: "label"
  disabled?: boolean;
};

export const ControlledMultiSelect = ({
  value = [],
  onChange,
  fieldName,
  trigger,
  placeholder = "Vyber více...",
  options,
  valueKey = "value",
  labelKey = "label",
  disabled,
}: ControlledMultiSelectProps) => {
  const [open, setOpen] = useState(false);

  const {
    formState: { errors, isSubmitted },
    clearErrors,
  } = useFormContext();

  const handleToggle = (val: string) => {
    const alreadySelected = value?.includes(val);
    const newValue = alreadySelected
      ? value.filter((v) => v !== val)
      : [...value, val];

    onChange?.(newValue);

    if (fieldName) {
      if (newValue.length > 0) {
        clearErrors(fieldName);
      } else if (isSubmitted && trigger) {
        trigger(fieldName);
      }
    }
  };

  const hasError = fieldName ? !!errors[fieldName] && isSubmitted : false;

  const selected = options.filter((opt) => value.includes(opt[valueKey]));

  const triggerRef = useRef<HTMLButtonElement>(null);
  const width = useElementWidth(triggerRef);

  return (
    <div className="space-y-2">
      {!disabled && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            className={cn(
              "px-3 text-sm font-normal",
              hasError &&
                "border border-destructive ring-destructive focus:ring-1"
            )}
            asChild
          >
            <Button
              ref={triggerRef}
              variant="secondary"
              role="combobox"
              className={cn(
                "justify-between w-full max-w-full overflow-hidden",
                value.length === 0 && "text-muted-foreground"
              )}
            >
              <div className="truncate flex-1 text-left">
                {value.length === 0
                  ? placeholder
                  : (() => {
                      const text = selected.map((s) => s[labelKey]).join(", ");
                      return text.length > 40
                        ? `${value.length} items selected`
                        : text;
                    })()}
              </div>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          {/* 💡 Šířka synchronizovaná podle triggeru */}
          <PopoverContent style={{ width }} className="p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected = value.includes(option[valueKey]);
                    return (
                      <CommandItem
                        key={option[valueKey]}
                        onSelect={() => handleToggle(option[valueKey])}
                        className="cursor-pointer"
                      >
                        <div
                          className={cn(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "border-muted"
                          )}
                        >
                          {isSelected && <Check className="h-4 w-4" />}
                        </div>
                        <span>{option[labelKey]}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};
