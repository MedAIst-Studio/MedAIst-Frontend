import type {Metadata} from "next";

import DashboardHeader from "@/components/shared/DashboardHeader";
import {SidebarProvider} from "@/components/ui/sidebar";

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
    <SidebarProvider defaultOpen={true}>
      <DashboardHeader />
      <main className="min-h-screen w-full relative">{children}</main>
    </SidebarProvider>
  );
}
