import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
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
  valueKey?: string;
  labelKey?: string;
  disabled?: boolean;
  searchable?: boolean;
  badges?: boolean;
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
  searchable,
  badges,
}: ControlledMultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const effectiveOptions = searchable
    ? options.filter((opt) =>
        opt[labelKey].toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const {
    formState: { errors, isSubmitted },
    clearErrors,
  } = useFormContext();

  const triggerRef = useRef<HTMLDivElement | HTMLButtonElement>(null);
  const width = useElementWidth(triggerRef);

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

  return (
    <div className="space-y-2">
      {!disabled && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            {badges ? (
              <div
                ref={triggerRef as any}
                role="combobox"
                className={cn(
                  "w-full border rounded-md hover:bg-secondary text-sm font-normal px-2 py-1.75 transition-all cursor-pointer",
                  hasError &&
                    "border-destructive ring-destructive focus:ring-1",
                  value.length === 0 && "text-muted-foreground"
                )}
                onClick={() => setOpen(true)}
              >
                <div className="flex justify-between items-start w-full gap-2">
                  <div className="flex flex-wrap gap-1 flex-1">
                    {value.length === 0 ? (
                      <span>{placeholder}</span>
                    ) : (
                      selected.map((s) => (
                        <span
                          key={s[valueKey]}
                          className="bg-white border rounded-sm px-2 py-0.25 text-xs flex items-center"
                        >
                          {s[labelKey]}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggle(s[valueKey]);
                            }}
                            className="ml-1 text-xs hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 opacity-50 mt-0.5" />
                </div>
              </div>
            ) : (
              <Button
                ref={triggerRef as any}
                variant="secondary"
                role="combobox"
                className={cn(
                  "justify-between w-full text-sm font-normal items-start px-3 py-2",
                  hasError &&
                    "border border-destructive ring-destructive focus:ring-1",
                  value.length === 0 && "text-muted-foreground"
                )}
              >
                <div className="truncate flex-1 text-left">
                  {value.length === 0
                    ? placeholder
                    : (() => {
                        const text = selected
                          .map((s) => s[labelKey])
                          .join(", ");
                        return text.length > 40
                          ? `${value.length} selected`
                          : text;
                      })()}
                </div>
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 mt-0.5" />
              </Button>
            )}
          </PopoverTrigger>

          <PopoverContent style={{ width }} className="p-0">
            <Command shouldFilter={false}>
              {searchable && (
                <CommandInput
                  placeholder="Hledej..."
                  value={search}
                  onValueChange={setSearch}
                />
              )}
              <CommandList>
                <CommandGroup>
                  {effectiveOptions.map((option) => {
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

type SelectMultiListProps = {
  options: any[];
  selectedValues: string[];
  valueKey: string;
  labelKey: string;
  onToggle: (val: string) => void;
};

export const SelectMultiList = ({
  options,
  selectedValues,
  valueKey,
  labelKey,
  onToggle,
}: SelectMultiListProps) => {
  return (
    <>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option[valueKey]);
        return (
          <CommandItem
            key={option[valueKey]}
            onSelect={() => onToggle(option[valueKey])}
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
    </>
  );
};