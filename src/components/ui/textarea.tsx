import * as React from "react";

import {cn} from "@/lib/utils";

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border border-b-4 border-b-gray-300 bg-transparent px-3 py-2 text-base shadow-lg transition-all duration-300 ease-out outline-none focus-visible:ring-[3px] focus-visible:shadow-xl focus-visible:-translate-y-0.5 focus-visible:border-b-blue-500 hover:shadow-xl hover:-translate-y-0.5 hover:border-b-blue-400 aria-invalid:border-b-red-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transform-gpu",
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}

export {Textarea};
