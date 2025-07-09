import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { createContext } from "react";

const alertVariants = cva("rounded-md p-4 flex ring-1 ring-inset", {
  variants: {
    variant: {
      info: "bg-blue-50 dark:bg-blue-400/10 ring-blue-700/10 dark:ring-blue-400/30",
      success:
        "bg-green-50 dark:bg-green-500/10 ring-green-600/20 dark:ring-green-500/20",
      warning:
        "bg-yellow-50 dark:bg-yellow-400/10 ring-yellow-600/20 dark:ring-yellow-400/20",
      danger:
        "bg-red-50 dark:bg-red-400/10 ring-red-600/10 dark:ring-red-400/20",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

type AlertVariantContextType = VariantProps<typeof alertVariants>["variant"];

const AlertVariantContext = createContext<AlertVariantContextType>(null);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant = "info", ...props }, ref) => {
  return (
    <AlertVariantContext.Provider value={variant}>
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    </AlertVariantContext.Provider>
  );
});
Alert.displayName = "Alert";

const titleVariants = cva("font-medium mb-1.5", {
  variants: {
    variant: {
      info: "text-blue-800 dark:text-blue-400",
      success: "text-green-800 dark:text-green-400",
      warning: "text-yellow-800 dark:text-yellow-400",
      danger: "text-red-800 dark:text-red-400",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(AlertVariantContext);
  return (
    <h3
      ref={ref}
      className={cn(titleVariants({ variant }), className)}
      {...props}
    />
  );
});
AlertTitle.displayName = "AlertTitle";

const iconVariants = cva("h-5 w-5", {
  variants: {
    variant: {
      info: "text-blue-500 dark:text-blue-400",
      success: "text-green-500 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-400",
      danger: "text-red-500 dark:text-red-400",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const AlertIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(AlertVariantContext);
  return (
    <div className="flex-shrink-0">
      <Slot
        ref={ref}
        className={cn(iconVariants({ variant }), className)}
        aria-hidden="true"
        {...props}
      />
    </div>
  );
});
AlertIcon.displayName = "AlertIcon";

const contentVariants = cva("ml-3 flex-1 text-sm", {
  variants: {
    variant: {
      info: "text-blue-700 dark:text-blue-300",
      success: "text-green-700 dark:text-green-400",
      warning: "text-yellow-700 dark:text-yellow-300",
      danger: "text-red-700 dark:text-red-300",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(AlertVariantContext);
  return (
    <div
      ref={ref}
      className={cn(contentVariants({ variant }), className)}
      {...props}
    />
  );
});
AlertContent.displayName = "AlertContent";

export { Alert, AlertContent, AlertIcon, AlertTitle };
