import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
        secondary:
          "bg-background-primary dark:hover:bg-white/20 text-secondary-foreground ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 shadow-sm ring-1 ring-inset focus-visible:outline-primary",
        destructive:
          "bg-transparent dark:bg-transparent ring-1 ring-inset ring-destructive-foreground dark:ring-destructive-foreground text-destructive-foreground hover:bg-destructive focus-visible:outline-destructive dark:hover:text-white hover:text-white",
        ghost: "hover:bg-primary/10 focus-visible:outline-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xxs: "rounded px-2 py-1 text-xs",
        xs: "rounded px-2 py-1 text-sm",
        sm: "rounded-md px-2.5 py-1.5 text-sm",
        md: "rounded-md px-3 py-2 text-sm",
        lg: "rounded-md px-3.5 py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
