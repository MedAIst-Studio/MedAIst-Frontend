import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group rounded-xl",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 border-b-4 border-primary-dark active:border-primary-dark/50 active:translate-y-0.5 hover:-translate-y-0.5 transition-all",

        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 border-b-4 border-destructive/80 active:border-destructive/50 active:translate-y-0.5 hover:-translate-y-0.5 transition-all",

        outline:
          "border-2 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground border-b-4 active:border-input active:translate-y-0.5 hover:-translate-y-0.5 transition-all",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border-b-4 border-muted-foreground/20 active:border-muted-foreground/10 active:translate-y-0.5 hover:-translate-y-0.5 transition-all",

        ghost:
          "hover:bg-accent hover:text-accent-foreground active:translate-y-0.5 hover:-translate-y-0.5 transition-all",

        link: "text-primary underline-offset-4 hover:underline",

        success:
          "bg-green-600 text-white shadow-sm hover:bg-green-700 border-b-4 border-green-800 active:border-green-800/50 active:translate-y-0.5 hover:-translate-y-0.5 transition-all",
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
