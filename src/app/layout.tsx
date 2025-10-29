import type {Metadata} from "next";
import "./globals.css";

import {gsap} from "gsap";
import {Flip} from "gsap/Flip";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {IBM_Plex_Mono} from "next/font/google";

import {Toaster} from "@/components/ui/sonner";
import {QueryProvider} from "@/providers/query-provider";
import {ThemeProvider} from "@/providers/theme-provider";

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedAIst",
  description: "MedAIst - Yapay Zeka Destekli Öğrenci Asistanı",
  icons: {
    icon: "/logo.svg",
  },
};

gsap.registerPlugin(Flip, ScrollTrigger);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body className={`${ibm_plex_mono.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute={"class"}
            defaultTheme="system"
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
