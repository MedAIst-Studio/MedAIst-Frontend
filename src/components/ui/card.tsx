import * as React from "react";

import {cn} from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  hoverable?: boolean;
}

function Card({className, hoverable = false, ...props}: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-b-4 border-b-slate-200 dark:border-b-slate-800 py-4",
        hoverable &&
          "hover:shadow-lg transition-all duration-300 hover:border-b-slate-300 transform hover:-translate-y-0.5 dark:hover:border-b-slate-700 cursor-pointer",
        className,
      )}
      data-slot="card"
      {...props}
    />
  );
}

function CardHeader({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardTitle({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("leading-none font-semibold", className)}
      data-slot="card-title"
      {...props}
    />
  );
}

function CardDescription({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="card-description"
      {...props}
    />
  );
}

function CardAction({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      data-slot="card-action"
      {...props}
    />
  );
}

function CardContent({className, ...props}: React.ComponentProps<"div">) {
  return <div className={cn("px-6", className)} data-slot="card-content" {...props} />;
}

function CardFooter({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      data-slot="card-footer"
      {...props}
    />
  );
}

export {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle};
