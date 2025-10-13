"use client";

import {motion, useInView} from "framer-motion";
import {ArrowRight, Bot, FileUp, Target, TrendingUp} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const steps = [
    {
      number: "01",
      icon: FileUp,
      title: "Yükle",
      description: "Ders notlarını (PDF, PPTX, TXT) güvenle platforma yükle.",
      details: [
        "Sürükle-bırak ile kolay yükleme",
        "Tüm dosya formatları desteklenir",
        "256-bit SSL şifreleme ile güvenli",
        "Sınırsız dosya boyutu",
      ],
      color: "blue",
    },
    {
      number: "02",
      icon: Bot,
      title: "Sorgula ve Test Et",
      description: "Notlarınla sohbet et veya anında kişisel quizini oluştur.",
      details: [
        "AI ile doğal dil sohbeti",
        "Saniyeler içinde yanıt al",
        "Otomatik quiz oluşturma",
        "Çoklu soru formatları",
      ],
      color: "green",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Öğren ve Geliş",
      description: "Analizlerle eksiklerini kapat ve bir sonraki sınava tam hazır ol.",
      details: [
        "Zayıf noktaları belirle",
        "İlerleme takibi",
        "Kişisel öneriler al",
        "Başarı grafiklerini gör",
      ],
      color: "purple",
    },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-background">
      <MaxWidthWrapper>
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-6 mb-20"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.8}}
        >
          <Badge className="px-6 py-3 text-base font-medium">
            <Target />
            Süper Basit
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Nasıl Çalışır?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 basit adımda tıp eğitimini dönüştür. Hiçbir teknik bilgi gerektirmez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={index}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                className="relative group"
                initial={{opacity: 0, y: 50}}
                transition={{delay: 0.2 + index * 0.2, duration: 0.8}}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="text-3xl font-bold text-primary leading-none">
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            className="flex items-center gap-3"
                            initial={{opacity: 0, x: -20}}
                            transition={{delay: 1 + index * 0.2 + detailIndex * 0.1}}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          animate={isInView ? {opacity: 1} : {}}
          className="text-center"
          initial={{opacity: 0}}
          transition={{delay: 1.2}}
        >
          <Button className="group text-lg px-8 py-6" size="lg">
            Hemen Başla
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorksSection;
