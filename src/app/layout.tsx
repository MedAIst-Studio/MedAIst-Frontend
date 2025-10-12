import type {Metadata} from "next";
import "./globals.css";

import {DM_Sans} from "next/font/google";

import {ThemeProvider} from "@/providers/theme-provider";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedAIst",
  description: "MedAIst - Yapay Zeka Destekli Öğrenci Asistanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body className={`${dm_sans.variable} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute={"class"}
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
