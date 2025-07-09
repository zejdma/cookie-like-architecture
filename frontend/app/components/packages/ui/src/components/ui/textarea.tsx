import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "ring-input placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 dark:bg-gray-800 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500  dark:aria-[invalid=true]:placeholder:text-red-400 sm:text-sm sm:leading-6",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
