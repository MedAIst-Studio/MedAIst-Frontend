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
    <>
      <DashboardHeader />
      <main className="min-h-screen bg-background">{children}</main>
    </>
  );
}
