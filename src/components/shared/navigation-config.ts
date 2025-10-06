import {FileText, MessageSquare, Target} from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  icon: any;
  badge?: number;
}

export const navigationItems: MenuItem[] = [
  {
    title: "AI Chat",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Notlarım",
    url: "/notes",
    icon: FileText,
  },
  {
    title: "Quizler",
    url: "/quiz",
    icon: Target,
  },
];
