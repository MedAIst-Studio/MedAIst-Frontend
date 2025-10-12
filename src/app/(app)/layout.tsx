import type {Metadata} from "next";

import {BottomBar} from "@/components/shared";
import DashboardHeader from "@/components/shared/DashboardHeader";
import {SidebarProvider} from "@/components/ui/sidebar";
import {ThemeProvider} from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Dashboard - MedAIst",
  description: "Your AI-powered medical study assistant",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
      <SidebarProvider defaultOpen={true}>
        <DashboardHeader />
        <main className="min-h-screen w-full relative pb-20 md:pb-0">{children}</main>
        <BottomBar />
      </SidebarProvider>
    </ThemeProvider>
  );
}
