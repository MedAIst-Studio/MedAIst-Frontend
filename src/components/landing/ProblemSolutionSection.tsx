"use client";

import {motion, useInView} from "framer-motion";
import {
  ArrowRight,
  Brain,
  Clock,
  FileSearch,
  MessageSquare,
  Search,
  Target,
  Zap,
} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

import {Button} from "../ui/button";

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const problems = [
    {
      icon: Clock,
      title: "Gecelerce Not Okumak",
      description: "Binlerce sayfalık PDF'leri baştan sona okuyarak zaman kaybetmek",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Search,
      title: "CTRL+F ile Sonuçsuz Arama",
      description: "Aradığınız bilgiyi bulamayıp saatlerce PDF'lerde dolaşmak",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FileSearch,
      title: "Dağınık Kaynaklar",
      description: "Farklı dosyalarda dağılmış bilgileri bir araya getirememek",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const solutions = [
    {
      icon: MessageSquare,
      title: "Notlarına Hükmet",
      subtitle: "Güvenilir Sohbet Özelliği",
      description:
        "PDF, PPTX ve TXT formatındaki tüm notlarınla anında sohbet et. En karmaşık konuyu sor, saniyeler içinde özetlesin.",
      highlight: "Tüm verilerin sana özel ve güvende kalır.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "Aktif Öğrenmeyi Otomatize Et",
      subtitle: "AI Quiz Oluşturma",
      description:
        "Tek tıkla, kendi notlarından yüzlerce özgün soru oluştur. Pasif okumayı bırak, aktif hatırlama ile bilgiyi hafızana kazı.",
      highlight: "Çoktan seçmeli, boşluk doldurma ve daha fazlası.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Brain,
      title: "Zayıf Noktalarını Keşfet",
      subtitle: "Temel Analizler",
      description:
        "Quiz sonuçlarına göre hangi konularda eksik olduğunu gör. Çalışmalarını en çok ihtiyaç duyduğun alanlara yönlendir.",
      highlight: "Verimliliğini katla, hedefli çalış.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/20" id="features">
      <MaxWidthWrapper className="px-4">
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 mb-12 sm:mb-16 md:mb-20"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.8}}
        >
          <Badge className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-medium">
            Eskiye Veda, Yeniye Merhaba
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-4">
            <span className="text-muted-foreground">Eski Yöntem</span> vs{" "}
            <span className="text-primary">Yeni Nesil Çalışma</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Problems Side */}
          <motion.div
            animate={isInView ? {opacity: 1, x: 0} : {}}
            className="space-y-6 sm:space-y-7 md:space-y-8"
            initial={{opacity: 0, x: -50}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground mb-3 sm:mb-4">
                😴 Eski Yöntem
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Zaman kaybettiren, verimsiz ve stresli çalışma alışkanlıkları
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;

                return (
                  <motion.div
                    key={index}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    initial={{opacity: 0, y: 30}}
                    transition={{delay: 0.4 + index * 0.1, duration: 0.6}}
                  >
                    <Card>
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg ${problem.bgColor} flex items-center justify-center shrink-0`}
                          >
                            <IconComponent
                              className={`w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 ${problem.color}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">
                              {problem.title}
                            </h4>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                              {problem.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions Side */}
          <motion.div
            animate={isInView ? {opacity: 1, x: 0} : {}}
            className="space-y-6 sm:space-y-7 md:space-y-8"
            initial={{opacity: 0, x: 50}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                ⚡ Yeni Nesil Çalışma
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli, akıllı ve verimli öğrenme deneyimi
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;

                return (
                  <motion.div
                    key={index}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    initial={{opacity: 0, y: 30}}
                    transition={{delay: 0.4 + index * 0.1, duration: 0.6}}
                  >
                    <Card className="border-primary/30 hover:border-primary/50 transition-colors group">
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg ${solution.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}
                          >
                            <IconComponent
                              className={`w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 ${solution.color}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-2 sm:mb-2.5 md:mb-3">
                              <h4 className="font-semibold text-base sm:text-lg">
                                {solution.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                ({solution.subtitle})
                              </p>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-2.5 md:mb-3">
                              {solution.description}
                            </p>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                              <p className="text-xs sm:text-sm font-medium text-primary">
                                {solution.highlight}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{opacity: 0, y: 30}}
          transition={{delay: 1.2, duration: 0.6}}
        >
          <Card>
            <CardContent className="p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-4">
                Hangi tarafta olmak istiyorsun?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
                Eski yöntemlerle boğuşmaya devam mı edeceksin, yoksa AI ile çalışmanın gücünü
                keşfedecek misin?
              </p>
              <Button className="text-sm sm:text-base" size={"lg"}>
                Akıllı Çalışmaya Geç
                <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProblemSolutionSection;
