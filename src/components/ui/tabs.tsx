"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import {cn} from "@/lib/utils";

function Tabs({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      data-slot="tabs"
      {...props}
    />
  );
}

function TabsList({className, ...props}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn("gap-2 text-muted-foreground inline-flex h-12 w-fit", className)}
      data-slot="tabs-list"
      {...props}
    />
  );
}

function TabsTrigger({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border px-3 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-2 data-[state-active]:border-border data-[state=active]:border-b-4 data-[state=active]:!border-b-border  data-[state=active]:-translate-y-0.5 hover:shadow-lg hover:-translate-y-0.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    />
  );
}

function TabsContent({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 outline-none", className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}

export {Tabs, TabsContent, TabsList, TabsTrigger};
