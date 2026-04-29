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
import Link from "next/link";

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
      bgColor: "bg-red-500/10",
    },
    {
      icon: Search,
      title: "CTRL+F ile Sonuçsuz Arama",
      description: "Aradığınız bilgiyi bulamayıp saatlerce PDF'lerde dolaşmak",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: FileSearch,
      title: "Dağınık Kaynaklar",
      description: "Farklı dosyalarda dağılmış bilgileri bir araya getirememek",
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
    },
  ];

  const solutions = [
    {
      icon: MessageSquare,
      title: "Notlarına Hükmet",
      subtitle: "Güvenilir Sohbet",
      description:
        "PDF formatındaki tüm notlarınla anında sohbet et. En karmaşık tıbbi konuları sor, saniyeler içinde özetlesin.",
      highlight: "Tüm verilerin sana özel ve güvende.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Target,
      title: "Aktif Hatırlama Gücü",
      subtitle: "AI Quiz Sistemi",
      description:
        "Notlarından otomatik oluşturulan özgün sorularla pratik yap. Pasif okumayı bırak, aktif hatırlama ile bilgiyi hafızana kazı.",
      highlight: "Kişiselleştirilmiş soru bankası.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      title: "Hafıza Kartları",
      subtitle: "Spaced Repetition",
      description:
        "Spaced Repetition algoritması ile öğrenmeyi hızlandır. Hangi kartı ne zaman görmen gerektiğini biz hesaplayalım.",
      highlight: "Kalıcı hafıza için optimize edildi.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      isComingSoon: true,
    },
    {
      icon: Brain,
      title: "Görsel Konu Haritaları",
      subtitle: "AI Mindmaps",
      description:
        "Karmaşık tıp konularını görselleştir. Konular arası bağlantıları gör ve ilerlemeni interaktif haritalarla takip et.",
      highlight: "Bütünsel bakış açısı kazan.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      isComingSoon: true,
    },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-24 md:py-32 overflow-hidden" id="features">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <MaxWidthWrapper className="px-4">
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center space-y-4 mb-16 md:mb-24"
          initial={{opacity: 0, y: 30}}
          transition={{duration: 0.8}}
        >
          <Badge 
            variant="outline" 
            className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm"
          >
            Öğrenme Devrimi Başladı
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            <span className="text-muted-foreground/60">Zamanını tüketen yöntemleri</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-purple-500 bg-clip-text text-transparent">
              Yapay Zeka ile Değiştir
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Problems Side */}
          <motion.div
            animate={isInView ? {opacity: 1, x: 0} : {}}
            className="lg:col-span-4 space-y-8"
            initial={{opacity: 0, x: -30}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-muted-foreground flex items-center gap-2">
                <span className="w-8 h-[1px] bg-muted-foreground/30" />
                Eski Yöntem
              </h3>
              <p className="text-sm text-muted-foreground/70">
                Stresli, düzensiz ve verimsiz süreçler
              </p>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{delay: 0.4 + index * 0.1}}
                  >
                    <div className="group relative p-5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm transition-all hover:bg-background/80 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex gap-4">
                        <div className={`w-10 h-10 rounded-xl ${problem.bgColor} flex items-center justify-center shrink-0`}>
                          <IconComponent className={`w-5 h-5 ${problem.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-1 group-hover:text-foreground transition-colors">
                            {problem.title}
                          </h4>
                          <p className="text-muted-foreground/70 text-xs leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* VS Divider (Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center pt-24">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                    VS
                </div>
             </div>
          </div>

          {/* Solutions Side */}
          <motion.div
            animate={isInView ? {opacity: 1, x: 0} : {}}
            className="lg:col-span-7 space-y-8"
            initial={{opacity: 0, x: 30}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary/30" />
                Yeni Nesil Çalışma
              </h3>
              <p className="text-sm text-muted-foreground/70">
                Akıllı asistanınla tıp eğitiminde fark yarat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{delay: 0.5 + index * 0.1}}
                  >
                    <Card className="relative h-full overflow-hidden border-primary/10 bg-background/40 backdrop-blur-md hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-primary/5">
                      {solution.isComingSoon && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-[10px] px-2 py-0">
                            Yakında
                          </Badge>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-2xl ${solution.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-6 h-6 ${solution.color}`} />
                        </div>
                        <div className="space-y-1 mb-3">
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                            {solution.title}
                          </h4>
                          <p className="text-xs font-medium text-muted-foreground/60">
                            {solution.subtitle}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                          {solution.description}
                        </p>
                        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                          <Zap className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-semibold text-primary/80">
                            {solution.highlight}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Professional CTA Box */}
        <motion.div
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="mt-20 md:mt-32"
          initial={{opacity: 0, y: 40}}
          transition={{delay: 1, duration: 0.8}}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 md:p-16 text-center text-background">
            {/* Background elements for CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Geleceğin Hekimleri Bugünün Teknolojisiyle Hazırlanıyor
              </h3>
              <p className="text-lg text-background/70 font-medium">
                Eski yöntemlerle boğuşmak yerine, yapay zekanın gücünü arkana alarak tıp eğitiminde bir adım öne geç.
              </p>
              <div className="pt-4">
                <Link href="/signup">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/20"
                  >
                    Şimdi Ücretsiz Başla
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProblemSolutionSection;
