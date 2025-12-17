"use client";

import {motion, useInView} from "framer-motion";
import {ArrowRight, Sparkles} from "lucide-react";
import Link from "next/link";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import {Button} from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section
      ref={ref}
      className="relative bg-background overflow-hidden border-t-2 border-border/50"
    >
      <BackgroundBeamsWithCollision className="py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-slate-950 dark:to-slate-900/50">
        <MaxWidthWrapper className="relative z-20 flex flex-col items-center text-center px-4">
          {/* Floating Badge */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6}}
            className="mb-8 sm:mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Tıp Eğitiminde Yeni Dönem</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={isInView ? {opacity: 1, scale: 1} : {}}
            transition={{duration: 0.8, delay: 0.2}}
            className="mb-8 max-w-4xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
              Sınırlarını <span className="text-primary block sm:inline">Aşmaya</span> Hazır Mısın?
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{duration: 0.8, delay: 0.4}}
            className="mb-10 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Klasik çalışma yöntemlerini geride bırak. Yapay zeka gücüyle notlarını interaktif birer
            öğretmene dönüştür ve başarıyı şansa bırakma.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, delay: 0.6}}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-2xl group shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300"
              >
                <span className="mr-2">Hemen Ücretsiz Başla</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {}}
            transition={{delay: 1, duration: 1}}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Kredi Kartı Gerekmez</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div>Ücretsiz Deneme</div>
          </motion.div>
        </MaxWidthWrapper>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default CTASection;
