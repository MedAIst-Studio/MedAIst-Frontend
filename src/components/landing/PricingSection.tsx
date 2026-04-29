"use client";

import {motion} from "framer-motion";
import {Check, Zap, Star, ShieldCheck, HelpCircle} from "lucide-react";
import {useState} from "react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Ücretsiz",
      description: "Platformu keşfetmek isteyen tıp öğrencileri için.",
      monthlyPrice: "0",
      yearlyPrice: "0",
      features: [
        "3 PDF Yükleme Sınırı",
        "Temel AI Chat (GPT-3.5)",
        "Günde 5 Quiz Soru Hakkı",
        "7 Günlük Veri Saklama",
      ],
      notIncluded: [
        "Sınırsız PDF Yükleme",
        "Hafıza Kartları (SRS)",
        "AI Mindmaps",
        "Gelişmiş Quiz Analitiği",
      ],
      cta: "Ücretsiz Başla",
      popular: false,
      color: "border-border",
    },
    {
      name: "Pro",
      description: "Sınavlara hazırlanan ve tam verim almak isteyenler için.",
      monthlyPrice: "149",
      yearlyPrice: "89",
      features: [
        "Sınırsız PDF Yükleme",
        "Gelişmiş AI Chat (GPT-4o)",
        "Sınırsız Quiz Oluşturma",
        "Hafıza Kartları (SRS)",
        "AI Mindmaps",
        "Gelişmiş Performans Analizi",
      ],
      cta: "Pro'ya Geç",
      popular: true,
      color: "border-primary shadow-xl shadow-primary/20",
    },
    {
      name: "Akademi",
      description: "Kurumsal veya grup alımları için özel çözümler.",
      monthlyPrice: "Özel",
      yearlyPrice: "Özel",
      features: [
        "Pro'daki Tüm Özellikler",
        "Grup Yönetim Paneli",
        "Özel API Erişimi",
        "7/24 Öncelikli Destek",
        "Kurumsal Entegrasyon",
        "Sınırsız Depolama",
      ],
      cta: "Bizimle İletişime Geç",
      popular: false,
      color: "border-border",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden" id="pricing">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <MaxWidthWrapper>
        <div className="text-center space-y-4 mb-16">
          <Badge 
            variant="outline" 
            className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm"
          >
            Şeffaf Fiyatlandırma
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Tıp Eğitiminde{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              En Büyük Yardımcın
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İster ücretsiz dene, ister Pro özelliklerle verimliliğini zirveye taşı.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Label htmlFor="pricing-toggle" className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Aylık
            </Label>
            <Switch
              id="pricing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <Label htmlFor="pricing-toggle" className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yıllık
              <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-600 border-none">
                %40 İndirim
              </Badge>
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="flex h-full"
            >
              <Card className={`relative flex flex-col w-full overflow-hidden border-2 bg-background/50 backdrop-blur-md transition-all hover:translate-y-[-4px] ${plan.color}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-[10px] font-bold px-8 py-1 rotate-45 translate-x-[25px] translate-y-[12px] shadow-lg">
                      EN POPÜLER
                    </div>
                  </div>
                )}
                
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                        {plan.monthlyPrice === "Özel" ? plan.monthlyPrice : (isYearly ? plan.yearlyPrice : plan.monthlyPrice)}₺
                    </span>
                    {plan.monthlyPrice !== "Özel" && (
                        <span className="text-muted-foreground font-medium">/ay</span>
                    )}
                  </div>
                  {isYearly && plan.monthlyPrice !== "Özel" && plan.monthlyPrice !== "0" && (
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                        Yıllık {Number(plan.yearlyPrice) * 12}₺ olarak faturalandırılır
                    </p>
                  )}
                </CardHeader>

                <CardContent className="p-8 pt-0 flex-1">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Özellikler</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div className="bg-primary/10 rounded-full p-0.5 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm opacity-40">
                          <div className="bg-muted rounded-full p-0.5 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-muted-foreground" />
                          </div>
                          <span className="font-medium line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button 
                    className={`w-full h-12 rounded-xl font-bold text-sm ${plan.popular ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02]" : "bg-muted text-foreground hover:bg-muted/80"}`}
                    variant={plan.popular ? "default" : "secondary"}
                    asChild
                  >
                    <Link href="/signup">
                        {plan.cta}
                        {plan.popular && <Zap className="ml-2 w-4 h-4 fill-current" />}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Info */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Güvenli Ödeme
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
                <Star className="w-5 h-5 text-primary" />
                Dilediğin Zaman İptal Et
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
                <HelpCircle className="w-5 h-5 text-primary" />
                7/24 Destek
            </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingSection;
