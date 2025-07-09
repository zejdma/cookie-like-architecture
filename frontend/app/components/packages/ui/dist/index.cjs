'use strict';

var AccordionPrimitive = require('@radix-ui/react-accordion');
var lucideReact = require('lucide-react');
var React7 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var reactDayPicker = require('react-day-picker');
var useEmblaCarousel = require('embla-carousel-react');
var RechartsPrimitive = require('recharts');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var cmdk = require('cmdk');
var SheetPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var PopoverPrimitive = require('@radix-ui/react-popover');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var TogglePrimitive = require('@radix-ui/react-toggle');
var TooltipPrimitive = require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var React7__namespace = /*#__PURE__*/_interopNamespace(React7);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);
var RechartsPrimitive__namespace = /*#__PURE__*/_interopNamespace(RechartsPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);

// src/components/ui/accordion.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex pr-4", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronDown,
        {
          "aria-hidden": "true",
          className: "h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var alertVariants = classVarianceAuthority.cva("rounded-md p-4 flex ring-1 ring-inset", {
  variants: {
    variant: {
      info: "bg-blue-50 dark:bg-blue-400/10 ring-blue-700/10 dark:ring-blue-400/30",
      success: "bg-green-50 dark:bg-green-500/10 ring-green-600/20 dark:ring-green-500/20",
      warning: "bg-yellow-50 dark:bg-yellow-400/10 ring-yellow-600/20 dark:ring-yellow-400/20",
      danger: "bg-red-50 dark:bg-red-400/10 ring-red-600/10 dark:ring-red-400/20"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var AlertVariantContext = React7.createContext(null);
var Alert = React7__namespace.forwardRef(({ className, variant = "info", ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(AlertVariantContext.Provider, { value: variant, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  ) });
});
Alert.displayName = "Alert";
var titleVariants = classVarianceAuthority.cva("font-medium mb-1.5", {
  variants: {
    variant: {
      info: "text-blue-800 dark:text-blue-400",
      success: "text-green-800 dark:text-green-400",
      warning: "text-yellow-800 dark:text-yellow-400",
      danger: "text-red-800 dark:text-red-400"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var AlertTitle = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const variant = React7__namespace.useContext(AlertVariantContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    {
      ref,
      className: cn(titleVariants({ variant }), className),
      ...props
    }
  );
});
AlertTitle.displayName = "AlertTitle";
var iconVariants = classVarianceAuthority.cva("h-5 w-5", {
  variants: {
    variant: {
      info: "text-blue-500 dark:text-blue-400",
      success: "text-green-500 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-400",
      danger: "text-red-500 dark:text-red-400"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var AlertIcon = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const variant = React7__namespace.useContext(AlertVariantContext);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    {
      ref,
      className: cn(iconVariants({ variant }), className),
      "aria-hidden": "true",
      ...props
    }
  ) });
});
AlertIcon.displayName = "AlertIcon";
var contentVariants = classVarianceAuthority.cva("ml-3 flex-1 text-sm", {
  variants: {
    variant: {
      info: "text-blue-700 dark:text-blue-300",
      success: "text-green-700 dark:text-green-400",
      warning: "text-yellow-700 dark:text-yellow-300",
      danger: "text-red-700 dark:text-red-300"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var AlertContent = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const variant = React7__namespace.useContext(AlertVariantContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(contentVariants({ variant }), className),
      ...props
    }
  );
});
AlertContent.displayName = "AlertContent";
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary",
        secondary: "bg-background-primary dark:hover:bg-white/20 text-secondary-foreground ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 shadow-sm ring-1 ring-inset focus-visible:outline-primary",
        destructive: "bg-transparent dark:bg-transparent ring-1 ring-inset ring-destructive-foreground dark:ring-destructive-foreground text-destructive-foreground hover:bg-destructive focus-visible:outline-destructive dark:hover:text-white hover:text-white",
        ghost: "hover:bg-primary/10 focus-visible:outline-primary",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        xxs: "rounded px-2 py-1 text-xs",
        xs: "rounded px-2 py-1 text-sm",
        sm: "rounded-md px-2.5 py-1.5 text-sm",
        md: "rounded-md px-3 py-2 text-sm",
        lg: "rounded-md px-3.5 py-2.5 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = React7__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = ({
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Portal, { ...props });
AlertDialogPortal.displayName = AlertDialogPrimitive__namespace.Portal.displayName;
var AlertDialogOverlay = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "bg-background-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "secondary" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var Avatar = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: cn(
      "bg-muted relative flex h-full w-full items-center justify-center rounded-full transition-colors",
      "hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-slate-700 hover:before:bg-opacity-5 dark:hover:before:bg-black dark:hover:before:bg-opacity-10",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20",
        red: "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
        yellow: "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
        green: "bg-[#649b3126] text-[#649B31] ring-[#649B31]",
        blue: "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
        indigo: "bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30",
        purple: "bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30",
        pink: "bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20"
      },
      size: {
        sm: "px-1.5 py-1 h-6",
        md: "px-2 py-1 h-6"
      },
      rounded: {
        full: "rounded-sm",
        md: "rounded-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      rounded: "full"
    }
  }
);
function Badge({ className, variant, size, rounded, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(badgeVariants({ variant, size, rounded }), className),
      ...props
    }
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "secondary" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-dropdownsAccent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-dropdownsAccent text-dropdownsAccent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-dropdownsAccent aria-selected:text-dropdownsAccent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
var Card = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-card-foreground bg-background-primary rounded-md border border-black/5 backdrop-blur-md dark:border-white/5",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var CardWithBlur = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-card-foreground bg-background-primaryTransparent rounded-md border border-black/5 backdrop-blur-md dark:border-white/5",
      className
    ),
    ...props
  }
));
CardWithBlur.displayName = "CardWithBlur";
var CarouselContext = React7__namespace.createContext(null);
function useCarousel() {
  const context = React7__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React7__namespace.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel__default.default(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React7__namespace.useState(false);
    const [canScrollNext, setCanScrollNext] = React7__namespace.useState(false);
    const onSelect = React7__namespace.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React7__namespace.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React7__namespace.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React7__namespace.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React7__namespace.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React7__namespace.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React7__namespace.forwardRef(({ className, variant = "secondary", size = "xs", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React7__namespace.forwardRef(({ className, variant = "secondary", size = "xs", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React7__namespace.createContext(null);
function useChart() {
  const context = React7__namespace.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = React7__namespace.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React7__namespace.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line-line]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsxRuntime.jsx(RechartsPrimitive__namespace.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive__namespace.Tooltip;
var ChartTooltipContent = React7__namespace.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React7__namespace.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn(
          "border-border/50 bg-background-primary grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "[&>svg]:text-muted-foreground flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive__namespace.Legend;
var ChartLegendContent = React7__namespace.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        ),
        children: payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: cn(
                "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: item.color
                    }
                  }
                ),
                itemConfig?.label
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
var Checkbox = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CheckboxPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "border-input ring-offset-background-primary focus-visible:ring-ring data-[state=checked]:bg-primary dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      CheckboxPrimitive__namespace.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = React7__namespace.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CollapsiblePrimitive__namespace.CollapsibleContent,
  {
    ref,
    className: cn(
      "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden",
      className
    ),
    ...props
  }
));
function ColorInput({
  color,
  className,
  onFormValueChange,
  handleStateChange
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        className,
        "absolute inset-y-0 left-0 flex items-center pl-3"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "relative rounded-[6px]",
          style: {
            backgroundColor: color,
            width: "20px",
            height: "20px"
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "color",
              value: color,
              onChange: (e) => {
                onFormValueChange(e.target.value);
                handleStateChange(e.target.value);
              },
              className: "absolute inset-0 h-full w-full cursor-pointer opacity-0"
            }
          )
        }
      )
    }
  );
}
var Dialog = SheetPrimitive__namespace.Root;
var DialogTrigger = SheetPrimitive__namespace.Trigger;
var DialogPortal = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Portal, { ...props });
DialogPortal.displayName = SheetPrimitive__namespace.Portal.displayName;
var DialogOverlay = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "bg-background-primary/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var DialogContent = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "bg-background-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
        className
      ),
      ...props,
      children
    }
  )
] }));
DialogContent.displayName = SheetPrimitive__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var DialogDescription = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive__namespace.Description.displayName;
var DialogClose = SheetPrimitive__namespace.Close;
var Command = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    ),
    ...props
  }
));
Command.displayName = cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center border-b px-3", children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: cn("mr-2 h-4 w-4 shrink-0 opacity-50", className) }),
  /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Input,
    {
      ref,
      className: cn(
        "placeholder:text-muted-foreground flex h-11 w-full border-none bg-transparent py-3 text-sm outline-none focus:border-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = cmdk.Command.Input.displayName;
var CommandList = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = cmdk.Command.List.displayName;
var CommandEmpty = React7__namespace.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
var CommandGroup = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Group,
  {
    ref,
    className: cn(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = cmdk.Command.Group.displayName;
var CommandSeparator = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Separator,
  {
    ref,
    className: cn("bg-border -mx-1 h-px", className),
    ...props
  }
));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
var CommandItem = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Item,
  {
    ref,
    className: cn(
      "aria-selected:bg-dropdownsAccent aria-selected:text-dropdownsAccent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React7__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
  {
    ref,
    className: cn(
      "focus:bg-dropdownsAccent data-[state=open]:bg-dropdownsAccent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React7__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React7__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "focus:bg-dropdownsAccent focus:text-dropdownsAccent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React7__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "focus:bg-dropdownsAccent focus:text-dropdownsAccent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "focus:bg-dropdownsAccent focus:text-dropdownsAccent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React7__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("bg-border -mx-1 my-1 h-px", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label2 = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label2.displayName = LabelPrimitive__namespace.Root.displayName;
var Form = reactHookForm.FormProvider;
var FormFieldContext = React7__namespace.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React7__namespace.useContext(FormFieldContext);
  const itemContext = React7__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = reactHookForm.useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React7__namespace.createContext(
  {}
);
var FormItem = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const id = React7__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Label2,
    {
      ref,
      className: cn(error && "text-red-600 dark:text-red-500", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React7__namespace.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React7__namespace.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn(
        "text-sm font-medium text-red-600 dark:text-red-500",
        className
      ),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
var HoverCard = HoverCardPrimitive__namespace.Root;
var HoverCardTrigger = HoverCardPrimitive__namespace.Trigger;
var HoverCardContent = React7__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  HoverCardPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive__namespace.Content.displayName;
var Input = React7__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: cn(
          "placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary ring-input file:text-foreground block w-full rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset file:border-0 file:bg-transparent file:px-3 file:text-sm file:font-medium focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500 dark:aria-[invalid=true]:placeholder:text-red-400",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React7__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
function MultiSelect({
  options,
  selected,
  onChange,
  className,
  ...props
}) {
  const [open, setOpen] = React7__namespace.useState(false);
  const handleUnselect = (item) => {
    onChange(selected.filter((i) => i !== item));
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "secondary",
        role: "combobox",
        "aria-expanded": open,
        className: `w-full justify-between bg-white dark:border dark:border-gray-600 dark:bg-gray-700 ${selected.length > 1 ? "h-full" : "h-10"}`,
        onClick: () => setOpen(!open),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-wrap gap-1", children: selected.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(
            Badge,
            {
              variant: "green",
              className: "mb-1 mr-1",
              onClick: () => handleUnselect(item),
              children: [
                item,
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    className: "ring-offset-background-primary focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2",
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item);
                      }
                    },
                    onMouseDown: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onClick: () => handleUnselect(item),
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "text-muted-foreground hover:text-foreground h-3 w-3" })
                  }
                )
              ]
            },
            item
          )) }),
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-full p-0", children: /* @__PURE__ */ jsxRuntime.jsxs(Command, { className, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CommandInput, { placeholder: "Search ..." }),
      /* @__PURE__ */ jsxRuntime.jsx(CommandEmpty, { children: "No item found." }),
      /* @__PURE__ */ jsxRuntime.jsx(CommandGroup, { className: "max-h-64 overflow-auto", children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsxs(
        CommandItem,
        {
          onSelect: () => {
            onChange(
              selected.includes(option.value) ? selected.filter((item) => item !== option.value) : [...selected, option.value]
            );
            setOpen(true);
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.Check,
              {
                className: cn(
                  "mr-2 h-4 w-4",
                  selected.includes(option.value) ? "opacity-100" : "opacity-0"
                )
              }
            ),
            option.label
          ]
        },
        option.value
      )) })
    ] }) })
  ] });
}
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-end", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "md",
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: isActive ? "primary" : "ghost",
        size
      }),
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "md",
    className: cn("gap-1 pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Previous" })
    ]
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "md",
    className: cn("gap-1 pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Next" }),
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "h-4 w-4" })
    ]
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";
var RadioGroup2 = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup2.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React7__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      className: cn(
        "border-primary text-primary ring-offset-background-primary focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var ScrollArea = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ScrollAreaPrimitive__namespace.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
      /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React7__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "bg-border relative flex-1 rounded-full" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React7__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "ring-input placeholder:text-muted-foreground focus:ring-primary inline-flex w-full items-center justify-between rounded-md bg-white px-3 py-1.5 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-gray-800",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectContent = React7__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SelectPrimitive__namespace.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React7__namespace.forwardRef(({ className, children, checkIcon, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "focus:bg-dropdownsAccent focus:text-dropdownsAccent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: cn(
            "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            !checkIcon ? "hidden" : ""
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Separator,
  {
    ref,
    className: cn("bg-muted -mx-1 my-1 h-px", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Separator3 = React7__namespace.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    SeparatorPrimitive__namespace.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator3.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Sheet = SheetPrimitive__namespace.Root;
var SheetTrigger = SheetPrimitive__namespace.Trigger;
var SheetClose = SheetPrimitive__namespace.Close;
var SheetPortal = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Portal, { ...props });
SheetPortal.displayName = SheetPrimitive__namespace.Portal.displayName;
var SheetOverlay = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Overlay,
  {
    className: cn(
      "bg-background-primary/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
  "fixed z-50 gap-4 bg-background-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        // w-5/6 md:w-3/4 sm:max-w-sm
        left: "inset-y-0 left-0 h-full  border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left ",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React7__namespace.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    SheetPrimitive__namespace.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "ring-offset-background-primary focus:ring-primary data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive__namespace.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-foreground text-lg font-semibold", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive__namespace.Title.displayName;
var SheetDescription = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SheetPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-muted-foreground text-sm", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive__namespace.Description.displayName;
var Spinner = ({ className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: cn("h-4 w-4 animate-spin", className),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: "opacity-25",
            cx: 12,
            cy: 12,
            r: 10,
            stroke: "currentColor",
            strokeWidth: 4
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
};
var Switch = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SwitchPrimitives__namespace.Root,
  {
    className: cn(
      "focus-visible:ring-ring focus-visible:ring-offset-background-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "bg-background-primary pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Table = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom rounded-3xl text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tbody", { ref, className: cn("", className), ...props }));
TableBody.displayName = "TableBody";
var TableFooter = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tfoot",
  {
    ref,
    className: cn("bg-primary text-primary-foreground font-medium", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "tr",
  {
    ref,
    className: cn(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border border-gray-200 transition-colors dark:border-white/5",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "th",
  {
    ref,
    className: cn(
      "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("text-muted-foreground mt-4 text-sm", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: cn(
      "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "ring-offset-background-primary focus-visible:ring-ring data-[state=active]:bg-background-primary data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React7__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "ring-offset-background-primary focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var Textarea = React7__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "textarea",
      {
        className: cn(
          "ring-input placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 dark:bg-gray-800 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500  dark:aria-[invalid=true]:placeholder:text-red-400 sm:text-sm sm:leading-6",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background-primary transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-dropdownsAccent data-[state=on]:text-dropdownsAccent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-dropdownsAccent hover:text-dropdownsAccent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React7__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TogglePrimitive__namespace.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip2 = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React7__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertContent = AlertContent;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertIcon = AlertIcon;
exports.AlertTitle = AlertTitle;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.CardWithBlur = CardWithBlur;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.ChartContainer = ChartContainer;
exports.ChartLegend = ChartLegend;
exports.ChartLegendContent = ChartLegendContent;
exports.ChartStyle = ChartStyle;
exports.ChartTooltip = ChartTooltip;
exports.ChartTooltipContent = ChartTooltipContent;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.ColorInput = ColorInput;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Input = Input;
exports.Label = Label2;
exports.MultiSelect = MultiSelect;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.RadioGroup = RadioGroup2;
exports.RadioGroupItem = RadioGroupItem;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator3;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip2;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.toggleVariants = toggleVariants;
exports.useFormField = useFormField;
