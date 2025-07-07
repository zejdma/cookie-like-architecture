import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
} from "~/components/ui/command";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useElementWidth } from "~/shared/hooks/useElementWidth";

type ControlledSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  fieldName?: string;
  trigger?: (name: string) => Promise<boolean>;
  placeholder?: string;
  options: any[];
  valueKey?: string;
  labelKey?: string;
  disabled?: boolean;
  searchable?: boolean;
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
  searchable,
}: ControlledSelectProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const effectiveOptions = searchable
    ? options.filter((opt) =>
        opt[labelKey].toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const width = useElementWidth(triggerRef);

  const {
    formState: { errors, isSubmitted },
    clearErrors,
  } = useFormContext();

  const hasError = fieldName ? !!errors[fieldName] && isSubmitted : false;

  const selected = options.find((opt) => opt[valueKey] === value);
  const displayLabel = selected?.[labelKey];

  const handleSelect = (val: string) => {
    onChange?.(val);
    if (fieldName) {
      clearErrors(fieldName);
      trigger?.(fieldName);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "px-3 text-sm font-normal",
          hasError && "border border-destructive ring-destructive focus:ring-1"
        )}
        asChild
      >
        <Button
          ref={triggerRef}
          variant="secondary"
          role="combobox"
          className={cn(
            "justify-between w-full text-sm font-normal",
            !value && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <span className="truncate flex-1 text-left">
            {displayLabel ?? placeholder}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
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
                const isSelected = option[valueKey] === value;
                return (
                  <CommandItem
                    key={option[valueKey]}
                    onSelect={() => handleSelect(option[valueKey])}
                    className="cursor-pointer h-8"
                  >
                    <span className="flex-1">{option[labelKey]}</span>
                    {isSelected && <Check className="h-4 w-4" />}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};