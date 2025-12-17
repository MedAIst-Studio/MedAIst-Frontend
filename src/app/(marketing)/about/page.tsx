"use client";

import {motion} from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Heart,
  Lightbulb,
  Mail,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

const AboutPage = () => {
  const stats = [
    {icon: Users, label: "Aktif Öğrenci", value: "10,000+"},
    {icon: BookOpen, label: "Analiz Edilen Sayfa", value: "2.5M+"},
    {icon: Brain, label: "AI Yanıt Süresi", value: "0.8s"},
    {icon: Award, label: "Başarı Oranı", value: "%94"},
  ];

  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description:
        "Tıp öğrencilerinin eğitim sürecini yapay zeka ile dönüştürerek, daha verimli ve etkili öğrenme deneyimi sunmak.",
    },
    {
      icon: Heart,
      title: "Vizyonumuz",
      description:
        "Yapay zekanın gücünü kullanarak, öğrencilerin daha verimli ve etkili bir şekilde öğrenmesini sağlamak.",
    },
    {
      icon: Shield,
      title: "Değerlerimiz",
      description:
        "Kalite, güven, yenilik ve öğrenci odaklılık prensiplerimizle eğitimde fark yaratmaya devam ediyoruz.",
    },
  ];

  const team = [
    {
      name: "Ömer Faruk Işık",
      role: "Ürün Mühendisi - CEO",
      image: "/team/omer-faruk-isik.jpg",
      description: "Fullstack Geliştirici",
    },
    {
      name: "Muhammed Küçükaslan",
      role: "Backend Geliştirici",
      image: "/team/muhammed-kucukaslan.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/20">
        <MaxWidthWrapper>
          <motion.div
            animate={{opacity: 1, y: 0}}
            className="text-center space-y-8"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
          >
            <motion.div
              animate={{opacity: 1, scale: 1}}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              initial={{opacity: 0, scale: 0.8}}
              transition={{delay: 0.2, duration: 0.6}}
            >
              <Sparkles className="w-4 h-4" />
              <span>Hakkımızda</span>
            </motion.div>

            <motion.h1
              animate={{opacity: 1, y: 0}}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight"
              initial={{opacity: 0, y: 20}}
              transition={{delay: 0.3, duration: 0.8}}
            >
              Tıp Eğitiminde{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Yapay Zeka Devrimi
              </span>
            </motion.h1>

            <motion.p
              animate={{opacity: 1, y: 0}}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{opacity: 0, y: 20}}
              transition={{delay: 0.4, duration: 0.8}}
            >
              2025 yılında kurulan MedAIst, tıp öğrencilerinin akademik başarısını artırmak için
              geliştirilmiş yenilikçi bir yapay zeka platformudur.
            </motion.p>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-muted/20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-4"
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: index * 0.1, duration: 0.6}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section> */}

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <MaxWidthWrapper>
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Değerlerimiz & Amacımız
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eğitimde kalite ve yenilikçilik anlayışımızla tıp öğrencilerine hizmet veriyoruz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: index * 0.2, duration: 0.8}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                >
                  <Card className="p-8 h-full">
                    <div className="space-y-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <MaxWidthWrapper>
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ekibimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alanında uzman, deneyimli ve vizyoner ekibimizle eğitimde fark yaratıyoruz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{opacity: 0, y: 20}}
                transition={{delay: index * 0.2, duration: 0.8}}
                viewport={{once: true}}
                whileInView={{opacity: 1, y: 0}}
              >
                <Card className="p-8 text-center">
                  <div className="space-y-6">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-muted-foreground">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{opacity: 0, x: -20}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Hikayemiz Nasıl Başladı?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tıp fakültesi öğrencilerinin karşılaştığı en büyük problemlerden biri, binlerce
                  sayfalık ders materyali arasında kaybolmaktı. 2025 yılında bu soruna çözüm bulmak
                  için yola çıktık.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Yapay zeka teknolojisinin gücünü eğitimle birleştirerek, öğrencilerin notlarını
                  daha akıllıca kullanabilecekleri, soru sorabileceği ve kişiselleştirilmiş sınavlar
                  oluşturabileceği bir platform geliştirdik.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Mail className="mr-2" />
                    İletişime Geç
                  </Link>
                </Button>
                {/* <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">Fiyatları İncele</Link>
                </Button> */}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{opacity: 0, x: 20}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
            >
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">İlk Fikir</h3>
                      <p className="text-sm text-muted-foreground">2025 Eylül</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Geliştirme</h3>
                      <p className="text-sm text-muted-foreground">2025 Eylül</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Beta Lansmanı</h3>
                      <p className="text-sm text-muted-foreground">2025 Aralık</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <MaxWidthWrapper>
          <motion.div
            className="text-center space-y-8 max-w-3xl mx-auto"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            whileInView={{opacity: 1, y: 0}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Bize Katılmaya Hazır Mısınız?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Binlerce tıp öğrencisinin tercih ettiği MedAIst ile siz de eğitiminizi dönüştürün.
              Ücretsiz denemeye başlayın, kredi kartı gerekmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/signup">
                  <Sparkles className="mr-2" />
                  Ücretsiz Başla
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">İletişim</Link>
              </Button>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default AboutPage;
