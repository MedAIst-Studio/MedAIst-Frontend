"use client";

import type {MenuItem} from "./navigation-config";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

import {navigationItems} from "./navigation-config";

interface BottomBarProps {
  className?: string;
  items?: MenuItem[];
}

export default function BottomBar({className, items = navigationItems}: BottomBarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "bg-white/95 backdrop-blur-md border-t border-slate-200/50",
        "shadow-lg",
        className,
      )}
    >
      <div className="flex items-center justify-around px-1 py-1">
        {items.map((item, index) => {
          const isActive = pathname === item.url;
          const Icon = item.icon;

          return (
            <Link
              key={index}
              className={cn(
                "flex flex-col items-center justify-center relative",
                "p-2 rounded-lg transition-all duration-200",
                "min-w-[60px] text-center",
                isActive
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-100/50",
              )}
              href={item.url}
            >
              <div className="relative">
                <Icon
                  className={cn("h-4 w-4 mb-0.5", isActive ? "text-white" : "text-slate-500")}
                />
                {item.badge && item.badge > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[10px] bg-red-500 text-white border-white border shadow-sm"
                    variant="secondary"
                  >
                    {item.badge > 9 ? "9+" : item.badge}
                  </Badge>
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium leading-tight",
                  isActive ? "text-white" : "text-slate-500",
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
