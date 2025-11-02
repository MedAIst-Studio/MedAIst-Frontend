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
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/20" id="testimonials">
      <MaxWidthWrapper className="px-4">
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 mb-12 sm:mb-16 md:mb-20"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.8}}
        >
          <Badge className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-medium">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Sosyal Kanıt
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            Tıp Öğrencileri Ne Diyor?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Türkiye&apos;nin önde gelen tıp fakültelerinden binlerce öğrenci MedAIst ile çalışıyor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              initial={{opacity: 0, y: 50}}
              transition={{delay: 0.2 + index * 0.2, duration: 0.8}}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Quote & Rating */}
                    <div className="flex items-start justify-between">
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary/60" />
                      <div className="flex gap-0.5 sm:gap-1">
                        {Array.from({length: testimonial.rating}).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <blockquote className="text-sm sm:text-base text-foreground leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-border pt-4 sm:pt-5 md:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="font-bold text-sm sm:text-base text-primary">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm sm:text-base text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground truncate">
                            {testimonial.school}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.year}
                          </div>
                          <Badge className="text-xs mt-1.5 sm:mt-2" variant="secondary">
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
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
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          animate={isInView ? {opacity: 1} : {}}
          className="text-center mt-12 sm:mt-14 md:mt-16"
          initial={{opacity: 0}}
          transition={{delay: 1.8}}
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-4">
            Türkiye&apos;nin en büyük tıp fakülteleri tarafından güveniliyor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground/60 px-4">
            <div className="text-xs sm:text-sm font-medium">İstanbul Üniversitesi</div>
            <div className="text-xs sm:text-sm font-medium">Hacettepe Üniversitesi</div>
            <div className="text-xs sm:text-sm font-medium">Ankara Üniversitesi</div>
            <div className="text-xs sm:text-sm font-medium hidden sm:inline">Ege Üniversitesi</div>
            <div className="text-xs sm:text-sm font-medium hidden md:inline">Gazi Üniversitesi</div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;
