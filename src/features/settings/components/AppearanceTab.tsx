"use client";

import {Moon, Palette, Sun} from "lucide-react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {useAppearanceSettings} from "../hooks";
import {SettingsTabProps} from "../types";

import {SettingSwitch} from "./SettingSwitch";

export const AppearanceTab = ({className}: SettingsTabProps) => {
  const {settings, updateDarkMode} = useAppearanceSettings();

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
          {/* Dark Mode Toggle */}
          <SettingSwitch
            checked={settings.darkMode}
            description="Gözlerinizi yormayan karanlık tema kullanın"
            icon={settings.darkMode ? <Moon size={16} /> : <Sun size={16} />}
            id="darkMode"
            title="Karanlık Mod"
            onCheckedChange={updateDarkMode}
          />
        </CardContent>
      </Card>
    </div>
  );
};
