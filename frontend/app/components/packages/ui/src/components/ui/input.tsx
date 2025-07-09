import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary ring-input file:text-foreground block w-full rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset file:border-0 file:bg-transparent file:px-3 file:text-sm file:font-medium focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500 dark:aria-[invalid=true]:placeholder:text-red-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
