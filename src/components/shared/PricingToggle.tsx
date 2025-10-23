"use client";

import {useState} from "react";

import {Badge} from "@/components/ui/badge";

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PricingToggle({onToggle}: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onToggle(yearly);
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-card rounded-full w-fit mx-auto border-2 border-b-4">
      <button
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border-2 border-b-4 hover:-translate-y-0.5 ${
          !isYearly
            ? "bg-card"
            : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"
        }`}
        onClick={() => handleToggle(false)}
      >
        Aylık
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border-2 border-b-4 hover:-translate-y-0.5 flex items-center gap-2 ${
          isYearly
            ? "bg-card"
            : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"
        }`}
        onClick={() => handleToggle(true)}
      >
        Yıllık
        <Badge className="text-xs text-green-500" variant="outline">
          %20 İndirim
        </Badge>
      </button>
    </div>
  );
}
