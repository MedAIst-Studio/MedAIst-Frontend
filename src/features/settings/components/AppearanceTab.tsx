"use client";

import {Moon, Palette, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {SettingsTabProps} from "../types";

export const AppearanceTab = ({className}: SettingsTabProps) => {
  const {setTheme} = useTheme();

  return (
    <div className={`grid gap-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette size={20} />
            Tema Ayarları
          </CardTitle>
          <CardDescription>Uygulamanın görünümünü kişiselleştirin</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex w-full items-center justify-between">
            <span>Tema</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Tema Değiştir</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Aydınlık</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Karanlık</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>Sistem</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
