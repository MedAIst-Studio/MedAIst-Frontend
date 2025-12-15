"use client";

import {motion} from "framer-motion";
import {ArrowRight, Sparkles} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";

import {BackgroundBeamsWithCollision} from "../ui/background-beams-with-collision";

import {DemoEmbed} from "./DemoEmbed";

const HeroSection = () => {
  const handleVideoPlay = () => {
    const video = document.getElementById("hero-demo-video") as HTMLVideoElement;

    if (video) {
      video.requestFullscreen?.();
    }
  };

  return (
    <BackgroundBeamsWithCollision className="pt-32 pb-20 sm:pt-40 sm:pb-32 bg-background relative">
      <MaxWidthWrapper className="relative">
        <div className="flex flex-col items-center text-center space-y-12 sm:space-y-16 md:space-y-20">
          {/* Hero Content */}
          <motion.div
            animate={{opacity: 1, y: 0}}
            className="flex flex-col items-center space-y-6 sm:space-y-7 md:space-y-8 max-w-4xl mx-auto px-4 sm:px-0"
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            {/* Hero Headline */}
            <motion.div
              animate={{opacity: 1, y: 0}}
              className="space-y-4 sm:space-y-5 md:space-y-6 text-left md:text-center"
              initial={{opacity: 0, y: 30}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl">
                Binlerce Sayfa PDF&apos;in{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  İçinde Kaybolma.
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-muted-foreground">
                  Notlarınla Sohbet Et.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl md:mx-auto">
                Ders notlarını sadece okumakla yetinme. Onlara soru sor, saniyeler içinde aradığın
                cevabı bul ve tek tıkla zayıf olduğun konulardan kendine özel deneme sınavı oluştur.
              </p>

              <p className="text-base sm:text-lg text-foreground font-medium max-w-2xl mx-auto">
                Komiteye kadar değil, komiteden sonra bile aklında kalsın.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              animate={{opacity: 1, y: 0}}
              className="flex flex-row gap-4 items-start md:items-center justify-start md:justify-center"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.6, delay: 0.4}}
            >
              <Link href="/signup">
                <Button size="lg">
                  <Sparkles />
                  Ücretsiz Dene
                  <ArrowRight />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              animate={{opacity: 1}}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm px-4"
              initial={{opacity: 0}}
              transition={{duration: 0.6, delay: 0.6}}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Ücretsiz başla</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="font-medium">Anında kurulum</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Demo */}
          <motion.div
            animate={{opacity: 1, y: 0}}
            className="relative w-full max-w-4xl mx-auto px-4 sm:px-0"
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            {/* Demo Element */}
            <DemoEmbed />

            {/* Video Info Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-medium">INTERAKTIF DEMO</span>
                </div>
              </div>
            </div>

            {/* Video Duration */}
            <div className="absolute top-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                <span className="text-white text-xs font-mono">2:34</span>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-xl -z-10" />

            {/* Floating Stats */}
            <motion.div
              animate={{opacity: 1, scale: 1, y: 0}}
              className="hidden sm:flex absolute -top-4 sm:-top-6 -right-4 sm:-right-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg sm:shadow-xl"
              initial={{opacity: 0, scale: 0.8, y: 20}}
              transition={{delay: 0.8, duration: 0.6}}
            >
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold whitespace-nowrap">1000+ sayfa analiz edildi</span>
              </div>
            </motion.div>

            <motion.div
              animate={{opacity: 1, scale: 1, y: 0}}
              className="hidden sm:flex absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg sm:shadow-xl"
              initial={{opacity: 0, scale: 0.8, y: -20}}
              transition={{delay: 1.0, duration: 0.6}}
            >
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                <span className="font-semibold whitespace-nowrap">AI yanıt süresi: 3 saniye</span>
              </div>
            </motion.div>

            {/* Performance Badge */}
            <motion.div
              animate={{opacity: 1, scale: 1}}
              className="hidden md:flex absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg"
              initial={{opacity: 0, scale: 0.8}}
              transition={{delay: 1.2, duration: 0.6}}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-primary">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-bounce" />
                <span>CANLI DEMO</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
