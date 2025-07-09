import { cn } from "@/lib/utils";

function ColorInput({
  color,
  className,
  onFormValueChange,
  handleStateChange,
}: {
  color: string;
  className?: string;
  onFormValueChange: (...event: any[]) => void;
  handleStateChange: (value: string) => void;
}) {
  return (
    <div
      className={cn(
        className,
        "absolute inset-y-0 left-0 flex items-center pl-3"
      )}
    >
      <div
        className="relative rounded-[6px]"
        style={{
          backgroundColor: color,
          width: "20px",
          height: "20px",
        }}
      >
        <input
          type="color"
          value={color}
          onChange={e => {
            onFormValueChange(e.target.value);
            handleStateChange(e.target.value);
          }}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
    </div>
  );
}

export { ColorInput };
