import {ArrowRight, Brain, Play, Shield, Sparkles, Star, TrendingUp, Users} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-20 dark:opacity-15" />

      {/* Glow Effects Base */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />

      {/* Subtle Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/25 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse opacity-40 dark:opacity-50" />
      <div
        className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200/25 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-pulse opacity-40 dark:opacity-45"
        style={{animationDelay: "3s"}}
      />

      {/* Subtle Central Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-40 dark:opacity-60 animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 80%)",
          animationDuration: "12s",
        }}
      />

      <MaxWidthWrapper className="relative">
        <div className="flex flex-col gap-10 items-center">
          {/* Content */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Badge
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
                variant="secondary"
              >
                <Sparkles className="h-4 w-4" />
                Tıp Eğitiminde Yapay Zeka
              </Badge>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-foreground">
                  Akıllı Tıp Asistanın
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                Yapay zeka destekli chat, akıllı not alma ve interaktif quiz sistemi ile tıp
                eğitimini dönüştürün. Kişiselleştirilmiş öğrenme deneyimiyle başarınızı artırın.
              </p>
            </div>

            <div className="flex flex-col mx-auto sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button className="w-full" size="lg">
                  Ücretsiz Başla
                  <ArrowRight />
                </Button>
              </Link>

              <Button size="lg" variant="outline">
                <Play />
                Demo İzle
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">10,000+ Öğrenci</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5 Puan</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">KVKK Uyumlu</span>
              </div>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="relative lg:order-last w-full">
            {/* Video Glow Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60 dark:opacity-80 blur-xl scale-105"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)",
              }}
            />

            <div className="relative">
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 border-2 border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 group-hover:from-primary/30 group-hover:to-purple-600/30 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Play Button Glow */}
                  <div
                    className="absolute h-24 w-24 rounded-full opacity-50 group-hover:opacity-70 transition-all duration-300 animate-pulse"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-background/95 backdrop-blur-sm group-hover:bg-background group-hover:scale-110 transition-all duration-300 shadow-xl shadow-primary/20">
                    <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <p className="text-lg font-semibold">MedAIst Platform Demo</p>
                  <p className="text-sm opacity-80">3 dakikada tüm özellikler</p>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
                  3:24
                </div>

                {/* Mockup Content */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <div className="text-center text-primary-foreground/70">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Platform Önizleme</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4">
                {/* Success Card Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30 blur-sm scale-110"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(120 70% 50% / 0.2) 0%, transparent 70%)",
                  }}
                />
                <div className="relative bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 shadow-green-500/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">95% Başarı</p>
                      <p className="text-xs text-muted-foreground">Sınav Ortalaması</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4">
                {/* AI Card Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30 blur-sm scale-110"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
                  }}
                />
                <div className="relative bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 shadow-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">AI Destekli</p>
                      <p className="text-xs text-muted-foreground">Öğrenme Sistemi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
