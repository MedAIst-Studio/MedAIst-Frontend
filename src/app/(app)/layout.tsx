import type {Metadata} from "next";

import {BottomBar} from "@/components/shared";
import DashboardHeader from "@/components/shared/DashboardHeader";
import {SidebarProvider} from "@/components/ui/sidebar";
import TallyProvider from "@/providers/tally-provider";
import {ThemeProvider} from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "MedAIst",
  description: "AI destekli tıp asistanınız",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
      <SidebarProvider defaultOpen={true}>
        <TallyProvider>
          <DashboardHeader />
          <main className="min-h-screen w-full relative pb-20 md:pb-0">{children}</main>
          <BottomBar />
        </TallyProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
