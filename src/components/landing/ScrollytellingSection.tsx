"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {BookOpen, Brain, MessageSquare, Target} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

interface StoryStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
}

const storySteps: StoryStep[] = [
  {
    id: 1,
    title: "PDF'lerini Yükle",
    description:
      "Ders notlarını, kitapları ve sunumlarını tek bir yere topla. Tüm dökümanların yapay zeka tarafından analiz edilir ve anında erişime hazır hale gelir.",
    icon: BookOpen,
    image: "/screenshots/upload.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Akıllı Sohbet Et",
    description:
      "Notlarınla sohbet et, soru sor ve saniyeler içinde cevap al. AI asistanın karmaşık tıbbi kavramları basitleştirir ve senin için örnekler oluşturur.",
    icon: MessageSquare,
    image: "/screenshots/chat.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Zayıf Noktalarını Keşfet",
    description:
      "Yapay zeka çalışma alışkanlıklarını analiz eder, hangi konularda zorlandığını tespit eder ve sana özel öğrenme yolu oluşturur.",
    icon: Brain,
    image: "/screenshots/analytics.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Hedefli Quiz Çöz",
    description:
      "Zayıf olduğun konulardan otomatik olarak oluşturulan testlerle pratik yap. Her cevabın analiz edilir ve gelişimini takip et.",
    icon: Target,
    image: "/screenshots/quiz.png",
    color: "from-green-500 to-emerald-500",
  },
];

const ScrollytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <MaxWidthWrapper>
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 text-center px-4 sm:px-0"
          initial={{opacity: 0, y: 20}}
          viewport={{once: true}}
          whileInView={{opacity: 1, y: 0}}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Nasıl{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Çalışır?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground px-4">
            4 basit adımda tıp eğitimini dönüştür
          </p>
        </motion.div>

        {/* Scrollytelling Steps */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {storySteps.map((step, index) => (
            <StoryCard key={step.id} index={index} scrollYProgress={scrollYProgress} step={step} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

interface StoryCardProps {
  step: StoryStep;
  index: number;
  scrollYProgress: any;
}

const StoryCard = ({step, index}: StoryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress: cardScrollProgress} = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const opacity = useTransform(cardScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(cardScrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Image effects
  const imageY = useTransform(cardScrollProgress, [0, 1], [50, -50]);
  const imageRotate = useTransform(cardScrollProgress, [0, 1], [-5, 5]);

  const isEven = index % 2 === 0;

  return (
    <motion.div ref={cardRef} className="relative px-4 sm:px-0" style={{opacity, scale}}>
      <div
        className={`grid items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-dense"}`}
      >
        {/* Content Side */}
        <motion.div
          className={`space-y-4 sm:space-y-5 md:space-y-6 ${isEven ? "" : "lg:col-start-2"}`}
          initial={{opacity: 0, x: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true, margin: "-100px"}}
          whileInView={{opacity: 1, x: 0}}
        >
          {/* Step Number */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`flex size-10 sm:size-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
            >
              <step.icon className="size-5 sm:size-6 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
              Adım {step.id}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {step.description}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {step.id === 1 && (
              <>
                <span className="rounded-full bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-primary">
                  PDF Desteği
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-primary">
                  Hızlı Analiz
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-primary">
                  Sınırsız Dosya
                </span>
              </>
            )}
            {step.id === 2 && (
              <>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                  Doğal Dil İşleme
                </span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                  Bağlam Analizi
                </span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                  Anlık Cevap
                </span>
              </>
            )}
            {step.id === 3 && (
              <>
                <span className="rounded-full bg-orange-100 dark:bg-orange-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">
                  Akıllı Analiz
                </span>
                <span className="rounded-full bg-orange-100 dark:bg-orange-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">
                  Kişisel Öneriler
                </span>
                <span className="rounded-full bg-orange-100 dark:bg-orange-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">
                  İlerleme Takibi
                </span>
              </>
            )}
            {step.id === 4 && (
              <>
                <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-green-700 dark:text-green-300">
                  Özel Quiz
                </span>
                <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-green-700 dark:text-green-300">
                  Detaylı Açıklama
                </span>
                <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-green-700 dark:text-green-300">
                  Performans Raporu
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className={`relative mt-8 lg:mt-0 ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}
          style={{y: imageY}}
        >
          <motion.div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-b-4 shadow-xl sm:shadow-2xl"
            style={{rotate: imageRotate}}
          >
            {/* Placeholder with gradient background */}
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${step.color} p-4 sm:p-6 md:p-8`}
            >
              {/* Placeholder Content */}
              <div className="flex h-full items-center justify-center">
                <div className="space-y-2 sm:space-y-3 md:space-y-4 text-center text-white">
                  <step.icon className="mx-auto size-12 sm:size-14 md:size-16" strokeWidth={1.5} />
                  <p className="text-base sm:text-lg font-semibold">{step.title}</p>
                  <p className="text-xs sm:text-sm opacity-90">Ekran görüntüsü yakında eklenecek</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 size-16 sm:size-20 md:size-24 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 size-20 sm:size-24 md:size-32 rounded-full bg-white/10 blur-3xl" />
            </div>

            {/* Real image overlay (when available) */}
            {/* <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
            /> */}
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 rounded-lg sm:rounded-xl bg-card/90 px-2.5 py-1.5 sm:px-4 sm:py-2 shadow-lg sm:shadow-xl backdrop-blur-sm border-2 border-b-4"
            initial={{scale: 0, rotate: -10}}
            transition={{delay: 0.3, type: "spring"}}
            viewport={{once: true}}
            whileInView={{scale: 1, rotate: 0}}
          >
            <p className="text-xs sm:text-sm font-bold">
              {step.id === 1 && "⚡ Hızlı"}
              {step.id === 2 && "🤖 Akıllı"}
              {step.id === 3 && "📊 Veri Odaklı"}
              {step.id === 4 && "🎯 Hedefli"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollytellingSection;
