import {FileText, Target} from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  icon: any;
  badge?: number;
}

export const navigationItems: MenuItem[] = [
  {
    title: "Dosyalarım",
    url: "/files",
    icon: FileText,
  },
  {
    title: "Quizlerim",
    url: "/quiz",
    icon: Target,
  },
];
