import {ArrowRight, Brain, Play, Shield, Sparkles, Star, TrendingUp, Users} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70" />
      <div
        className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-70"
        style={{animationDelay: "2s"}}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-60"
        style={{animationDelay: "4s"}}
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
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-slate-700">
                  Akıllı Tıp Asistanın
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
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
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
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
            <div className="relative">
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 shadow-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="h-8 w-8 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">MedAIst Platform Demo</p>
                  <p className="text-sm opacity-80">3 dakikada tüm özellikler</p>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  3:24
                </div>

                {/* Mockup Content */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Platform Önizleme</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-slate-200/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">95% Başarı</p>
                    <p className="text-xs text-slate-600">Sınav Ortalaması</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-slate-200/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">AI Destekli</p>
                    <p className="text-xs text-slate-600">Öğrenme Sistemi</p>
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
