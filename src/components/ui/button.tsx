import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-blue-500/50 hover:border-primary/50 hover:shadow-sm rounded-lg",

        destructive:
          "bg-red-500 text-destructive-foreground rounded-lg shadow-lg hover:bg-red-600 hover:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-red-500/50 border-b-4 border-red-700 hover:border-red-800 active:border-red-600",

        outline:
          "border-2 bg-card rounded-lg hover:shadow-sm hover:border-primary hover:text-primary transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-primary/50 border-b-4 hover:border-primary active:border-slate-300",

        secondary:
          "bg-secondary text-slate-800 rounded-lg hover:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 border-b-4 active:border-slate-300",

        ghost:
          "text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-blue-500/30 border-b-4 border-transparent hover:border-blue-200 active:border-transparent dark:text-slate-300 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:border-blue-800",

        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 transition-colors font-medium transform hover:-translate-y-0.5 active:translate-y-0 dark:text-blue-400 dark:hover:text-blue-300",

        success:
          "bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-green-500/50 border-b-4 border-green-800 hover:border-green-900 active:border-green-700",
      },
      size: {
        default: "h-10 px-6 py-2.5 text-sm has-[>svg]:px-4",
        sm: "h-8 px-4 py-2 text-sm gap-1.5 has-[>svg]:px-3",
        lg: "h-12 px-8 py-3 text-base has-[>svg]:px-6 font-semibold",
        xl: "h-14 px-10 py-4 text-lg has-[>svg]:px-8 font-bold",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({variant, size, className}))}
      data-slot="button"
      {...props}
    />
  );
}

export {Button, buttonVariants};
