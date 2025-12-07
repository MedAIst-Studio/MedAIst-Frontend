"use client";

import {Sparkles, Star} from "lucide-react";
import Link from "next/link";

import Logo from "@/components/shared/Logo";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: {
    text: string;
    href: string;
  };
  className?: string;
}

export function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  className,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"
          style={{animationDelay: "2s"}}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl animate-bounce"
          style={{animationDelay: "1s"}}
        />

        {/* Floating Stars */}
        <div className="absolute top-32 right-1/4 text-white/10 animate-pulse">
          <Star className="h-4 w-4" />
        </div>
        <div
          className="absolute bottom-32 left-1/3 text-white/10 animate-pulse"
          style={{animationDelay: "1.5s"}}
        >
          <Sparkles className="h-5 w-5" />
        </div>
        <div
          className="absolute top-1/3 right-12 text-white/10 animate-pulse"
          style={{animationDelay: "3s"}}
        >
          <Star className="h-3 w-3" />
        </div>
      </div>

      <div className={cn("w-full max-w-lg mx-auto relative z-10", className)}>
        <div className="text-center mb-8">
          <Link className="inline-flex items-center space-x-3 group" href="/">
            <div className="relative">
              <Logo size={40} />
            </div>
            <div className="text-start">
              <span className="text-4xl font-bold text-white block leading-none">
                Med<span className="text-blue-400">AI</span>st
              </span>
              <span className="text-blue-200/80 text-xs font-medium tracking-wide -mt-0.5 block">
                Akıllı Tıp Asistanı
              </span>
            </div>
          </Link>
          <p className="text-slate-300 mt-4 text-sm leading-relaxed">
            Tıp eğitiminde yapay zeka ile geleceği keşfedin
          </p>
        </div>

        {/* Auth Card with Glass Morphism */}
        <Card className="w-full flex-1">
          <CardHeader className="relative space-y-3 text-center">
            <div className="mx-auto w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mb-4" />
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
            <CardDescription className="text-muted-foreground text-base leading-relaxed">
              {subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative space-y-6 px-8">{children}</CardContent>

          {/* Footer */}
          <div className="relative px-8 pb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
            <p className="text-center text-sm text-muted-foreground">
              {footerText}{" "}
              <Link
                className="font-semibold text-primary hover:underline transition-colors duration-200"
                href={footerLink.href}
              >
                {footerLink.text}
              </Link>
            </p>
          </div>
        </Card>

        {/* Terms and Privacy */}
        <div className="mt-8 text-center space-x-4 text-xs text-slate-200">
          <Link className="hover:text-slate-300 transition-colors duration-200" href="/privacy">
            Gizlilik Politikası
          </Link>
          <span className="text-slate-500">•</span>
          <Link className="hover:text-slate-300 transition-colors duration-200" href="/terms">
            Kullanım Koşulları
          </Link>
        </div>
      </div>
    </div>
  );
}
