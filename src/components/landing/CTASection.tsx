"use client";

import {motion, useInView} from "framer-motion";
import {ArrowRight, BookOpen, Clock, Sparkles, Target, Trophy} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MaxWidthWrapper>
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-8 mb-16"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.8}}
        >
          <motion.div
            animate={isInView ? {opacity: 1, scale: 1} : {}}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3"
            initial={{opacity: 0, scale: 0.8}}
            transition={{delay: 0.2, duration: 0.6}}
          >
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Son Adım</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            Fakülteyi <span className="text-muted-foreground line-through">Ezberleyerek</span>{" "}
            Değil, <br />
            <span className="text-primary">Anlayarak</span> Bitirmeye Hazır Mısın?
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artık gecelerce PDF okumaya, ctrl+f ile boğuşmaya son ver. AI ile çalışmanın gücünü
            keşfet ve tıp eğitimini dönüştür.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{opacity: 0, y: 30}}
          transition={{delay: 0.6, duration: 0.8}}
        >
          {[
            {
              icon: Clock,
              title: "Zaman Tasarrufu",
              description: "Çalışma sürenizi %50 azaltın, verimliliğinizi katlayın",
              highlight: "Saatler → Dakikalar",
            },
            {
              icon: BookOpen,
              title: "Daha İyi Anlama",
              description: "AI ile etkileşimli öğrenme, pasif okuma yerine aktif anlama",
              highlight: "Ezber → Kavrama",
            },
            {
              icon: Target,
              title: "Hedefli Çalışma",
              description: "Zayıf noktalarınızı tespit edin, eksiklerinize odaklanın",
              highlight: "Rastgele → Sistematik",
            },
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;

            return (
              <motion.div
                key={index}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                initial={{opacity: 0, y: 30}}
                transition={{delay: 0.8 + index * 0.2, duration: 0.6}}
              >
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{benefit.highlight}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-8"
          initial={{opacity: 0, y: 30}}
          transition={{delay: 1.4, duration: 0.8}}
        >
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Bugün Başla, Yarın Farkı Görmeye Başla
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Binlerce tıp öğrencisinin tercihi. Ücretsiz dene, farkı hemen keşfet.
            </p>
          </div>

          <motion.div
            animate={isInView ? {opacity: 1, scale: 1} : {}}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{opacity: 0, scale: 0.9}}
            transition={{delay: 1.6, duration: 0.6}}
          >
            <Button className="group text-lg px-8 py-6 shadow-lg" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Ücretsiz Dene - Hemen Başla
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            animate={isInView ? {opacity: 1} : {}}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 text-sm text-muted-foreground"
            initial={{opacity: 0}}
            transition={{delay: 1.8}}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Kredi kartı gerektirmez</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Anında erişim</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>7 gün ücretsiz deneme</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          animate={isInView ? {opacity: 1} : {}}
          className="text-center mt-20 pt-16 border-t border-border"
          initial={{opacity: 0}}
          transition={{delay: 2.0}}
        >
          <blockquote className="text-lg font-medium text-muted-foreground italic max-w-3xl mx-auto">
            &quot;Bu bir ders çalışma aracı değil, bu senin gizli silahın.&quot;
          </blockquote>
          <div className="mt-4 text-sm text-muted-foreground">
            - MedAIst ile çalışan binlerce tıp öğrencisi
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTASection;
