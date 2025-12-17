import type {Metadata} from "next";
import "./globals.css";

import {IBM_Plex_Mono, Plus_Jakarta_Sans} from "next/font/google";

import {Toaster} from "@/components/ui/sonner";
import {QueryProvider} from "@/providers/query-provider";
import {ThemeProvider} from "@/providers/theme-provider";

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedAIst",
  description: "MedAIst - Yapay Zeka Destekli Öğrenci Asistanı",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`scroll-smooth ${plus_jakarta_sans.variable} ${ibm_plex_mono.variable}`}
      lang="en"
    >
      <body className="antialiased">
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
