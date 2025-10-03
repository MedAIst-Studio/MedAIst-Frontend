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
          "bg-red-500 text-destructive-foreground rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-red-500/50 border-b-4 border-red-700 hover:border-red-800 active:border-red-600",

        outline:
          "border-2 border-slate-100 bg-white text-slate-700 rounded-lg hover:shadow-xl hover:border-primary hover:text-primary transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-primary/50 border-b-4 border-slate-300 hover:border-primary active:border-slate-300 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:hover:border-primary/90 dark:hover:text-blue-300",

        secondary:
          "bg-white text-slate-800 rounded-lg hover:bg-slate-50 hover:shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-slate-200 hover:border-slate-300 active:border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-800 dark:hover:bg-slate-600 dark:hover:border-slate-900",

        ghost:
          "text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-blue-500/30 border-b-4 border-transparent hover:border-blue-200 active:border-transparent dark:text-slate-300 dark:hover:bg-blue-950/30 dark:hover:text-blue-300 dark:hover:border-blue-800",

        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 transition-colors font-medium transform hover:-translate-y-0.5 active:translate-y-0 dark:text-blue-400 dark:hover:text-blue-300",

        medical:
          "bg-emerald-600 text-white rounded-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-emerald-500/50 border-b-4 border-emerald-800 hover:border-emerald-900 active:border-emerald-700",

        premium:
          "bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-amber-500/50 border-b-4 border-amber-700 hover:border-amber-800 active:border-amber-600",

        success:
          "bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-green-500/50 border-b-4 border-green-800 hover:border-green-900 active:border-green-700",

        neon: "bg-slate-900 text-cyan-400 rounded-lg border-2 border-cyan-400 shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-cyan-500/50 border-b-4 border-cyan-600 hover:border-cyan-500 active:border-cyan-700",

        pill: "bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-purple-500/50 border-b-4 border-purple-800 hover:border-purple-900 active:border-purple-700",

        neumorphism:
          "bg-slate-100 text-slate-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-slate-300 hover:border-slate-400 active:border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-900 dark:hover:bg-slate-700 dark:hover:border-slate-950",
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
