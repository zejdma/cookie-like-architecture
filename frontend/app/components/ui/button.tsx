import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none leading-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-bohemia text-button-primary hover:bg-button-primary",
        secondary:
          "bg-button-secondary text-green-section border border-green-section hover:bg-button-secondary",
        tertiary: "bg-transparent text-green-section hover:text-[#4e8914]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        softDestructive:
          "bg-button-secondary text-red-400 border border-red-100 hover:bg-button-secondary focus-visible:ring-red-500",
      },
      size: {
        default: "h-9 px-4",
        small: "h-7 px-3",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
