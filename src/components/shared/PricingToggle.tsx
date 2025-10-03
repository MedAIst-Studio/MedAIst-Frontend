"use client";

import {useState} from "react";

import {Badge} from "@/components/ui/badge";

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PricingToggle({onToggle}: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly: boolean) => {
    setIsYearly(yearly);
    onToggle(yearly);
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-slate-100 rounded-full w-fit mx-auto border-2 border-b-4 border-slate-200">
      <button
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border-2 border-b-4 hover:-translate-y-0.5 ${
          !isYearly
            ? "bg-white text-slate-900 border-slate-200"
            : "bg-transparent text-slate-600 border-transparent hover:bg-slate-50"
        }`}
        onClick={() => handleToggle(false)}
      >
        Aylık
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border-2 border-b-4 hover:-translate-y-0.5 flex items-center gap-2 ${
          isYearly
            ? "bg-white text-slate-900 border-slate-200 "
            : "bg-transparent text-slate-600 border-transparent hover:bg-slate-50"
        }`}
        onClick={() => handleToggle(true)}
      >
        Yıllık
        <Badge className="text-xs bg-green-100 text-green-700 border-green-200" variant="outline">
          %20 İndirim
        </Badge>
      </button>
    </div>
  );
}
