import * as React from "react";

import {cn} from "@/lib/utils";

function Input({className, type, ...props}: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-11 w-full min-w-0 rounded-md border-2 border-b-4 bg-transparent px-3 py-2 text-base transition-all duration-300 ease-out outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transform-gpu",
        "focus-visible:ring-none focus-visible:shadow-sm focus-visible:border-primary",
        "hover:shadow-xl hover:border-primary",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:border-b-red-500",
        className,
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  );
}

export {Input};
