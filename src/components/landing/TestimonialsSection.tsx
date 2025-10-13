"use client";

import {motion, useInView} from "framer-motion";
import {Quote, Star, Users} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const testimonials = [
    {
      name: "Ayşe Kaya",
      school: "İstanbul Üniversitesi Cerrahpaşa Tıp",
      year: "3. Sınıf",
      content:
        "Bu platform resmen komitelerden önceki hayat kurtarıcım oldu. Özellikle anatomi notları içinde kaybolmuyorum artık. AI asistanı saniyeler içinde tam istediğim bilgiyi buluyor.",
      rating: 5,
      subject: "Anatomi",
    },
    {
      name: "Mehmet Özkan",
      school: "Hacettepe Üniversitesi Tıp",
      year: "4. Sınıf",
      content:
        "TUS&apos;a hazırlanırken en büyük yardımcım. Binlerce sayfa notu tek bir platformda toplayıp, istediğim konudan quiz oluşturmak müthiş. Çalışma sürem yarıya indi, verimim katlandı.",
      rating: 5,
      subject: "İç Hastalıkları",
    },
    {
      name: "Zeynep Demir",
      school: "Ankara Üniversitesi Tıp",
      year: "2. Sınıf",
      content:
        "İlk kez çalışmaktan zevk alıyorum. PDF&apos;lerin içinde ctrl+f ile boğuşmak yerine, AI&apos;ya doğrudan soru sorabilmek çok farklı bir deneyim. Keşke daha erken keşfetseydim.",
      rating: 5,
      subject: "Fizyoloji",
    },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-muted/20" id="testimonials">
      <MaxWidthWrapper>
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-6 mb-20"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.8}}
        >
          <Badge className="px-6 py-3 text-base font-medium">
            <Users className="w-4 h-4 mr-2" />
            Sosyal Kanıt
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Tıp Öğrencileri Ne Diyor?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Türkiye&apos;nin önde gelen tıp fakültelerinden binlerce öğrenci MedAIst ile çalışıyor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              initial={{opacity: 0, y: 50}}
              transition={{delay: 0.2 + index * 0.2, duration: 0.8}}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote & Rating */}
                    <div className="flex items-start justify-between">
                      <Quote className="w-8 h-8 text-primary/60" />
                      <div className="flex gap-1">
                        {Array.from({length: testimonial.rating}).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <blockquote className="text-foreground leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-border pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-bold text-primary">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.school}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.year}</div>
                          <Badge className="text-xs mt-2" variant="secondary">
                            {testimonial.subject}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{opacity: 0, y: 30}}
          transition={{delay: 1.2, duration: 0.8}}
        >
          {[
            {number: "50+", label: "Tıp Fakültesi"},
            {number: "10K+", label: "Aktif Öğrenci"},
            {number: "1M+", label: "Çözülen Soru"},
            {number: "98%", label: "Memnuniyet"},
          ].map((stat, index) => (
            <motion.div
              key={index}
              animate={isInView ? {opacity: 1, scale: 1} : {}}
              className="text-center"
              initial={{opacity: 0, scale: 0.8}}
              transition={{delay: 1.4 + index * 0.1, duration: 0.6}}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          animate={isInView ? {opacity: 1} : {}}
          className="text-center mt-16"
          initial={{opacity: 0}}
          transition={{delay: 1.8}}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Türkiye&apos;nin en büyük tıp fakülteleri tarafından güveniliyor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground/60">
            <div className="text-sm font-medium">İstanbul Üniversitesi</div>
            <div className="text-sm font-medium">Hacettepe Üniversitesi</div>
            <div className="text-sm font-medium">Ankara Üniversitesi</div>
            <div className="text-sm font-medium">Ege Üniversitesi</div>
            <div className="text-sm font-medium">Gazi Üniversitesi</div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;
