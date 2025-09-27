import DashboardHeader from "@/components/shared/DashboardHeader";
import type {Metadata} from "next";

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
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 bg-background">{children}</main>
    </div>
  );
}
