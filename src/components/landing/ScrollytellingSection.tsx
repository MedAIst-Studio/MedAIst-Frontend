"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {BookOpen, MessageSquare, Target} from "lucide-react";
import {useRef} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";

import {MockChatInterface} from "./mockups/MockChatInterface";
import {MockFileUpload} from "./mockups/MockFileUpload";
import {MockFlashcards} from "./mockups/MockFlashcards";
import {MockMindmaps} from "./mockups/MockMindmaps";
import {MockQuizInterface} from "./mockups/MockQuizInterface";

interface StoryStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  component: React.ReactNode;
  color: string;
  isComingSoon?: boolean;
}

const storySteps: StoryStep[] = [
  {
    id: 1,
    title: "PDF'lerini Yükle",
    description:
      "Ders notlarını, kitapları ve sunumlarını tek bir yere topla. Tüm dökümanların yapay zeka tarafından analiz edilir ve anında erişime hazır hale gelir.",
    icon: BookOpen,
    component: <MockFileUpload />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Akıllı Sohbet Et",
    description:
      "Notlarınla sohbet et, soru sor ve saniyeler içinde cevap al. AI asistanın karmaşık tıbbi kavramları basitleştirir ve senin için örnekler oluşturur.",
    icon: MessageSquare,
    component: <MockChatInterface />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Hedefli Quiz Çöz",
    description:
      "Notlarından otomatik olarak oluşturulan quizlerle pratik yap. Pasif okumayı bırak, aktif hatırlama ile bilgiyi hafızana kazı.",
    icon: Target,
    component: <MockQuizInterface />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Hafıza Kartları",
    description:
      "Öğrendiğin bilgileri kalıcı hafızana aktar. Spaced Repetition (Aralıklı Tekrar) algoritması ile hangi kartı ne zaman görmen gerektiğini biz hesaplayalım.",
    icon: Target,
    component: <MockFlashcards />,
    color: "from-amber-500 to-orange-500",
    isComingSoon: true,
  },
  {
    id: 5,
    title: "AI Mindmaps",
    description:
      "Yüklediğin PDF'lerin konu haritalamasını yapıp ilerleme takibini kolaylaştıran sistem. Konular arasındaki bağlantıları görselleştir ve eksiklerini anında tespit et.",
    icon: MessageSquare,
    component: <MockMindmaps />,
    color: "from-indigo-500 to-purple-500",
    isComingSoon: true,
  },
];

const ScrollytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-background py-12 sm:py-16 md:py-20 lg:py-24"
      id="howitworks"
    >
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

  // Image effects - simplified for components
  const imageY = useTransform(cardScrollProgress, [0, 1], [30, -30]);

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
          <div className="flex items-center gap-3">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              {step.title}
            </h3>
            {step.isComingSoon && (
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-[10px] px-2 py-0">
                Yakında
              </Badge>
            )}
          </div>

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
            {step.id === 4 && (
              <>
                <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-amber-700 dark:text-amber-300">
                  Aralıklı Tekrar
                </span>
                <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-amber-700 dark:text-amber-300">
                  Kalıcı Öğrenme
                </span>
                <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-amber-700 dark:text-amber-300">
                  Akıllı Algoritma
                </span>
              </>
            )}
            {step.id === 5 && (
              <>
                <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Görselleştirme
                </span>
                <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Konu Takibi
                </span>
                <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Bütünsel Bakış
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Component Side */}
        <motion.div
          className={`relative mt-8 lg:mt-0 ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}
          style={{y: imageY}}
        >
          {/* Main "Device" Container */}
          <div className="relative z-10 mx-auto w-full max-w-[500px] h-[350px] sm:h-[400px] bg-background rounded-2xl border-2 border-b-4 shadow-xl overflow-hidden flex flex-col">
            {/* Simple visual header for each 'window' */}
            <div className="h-8 bg-muted/30 border-b border-border flex items-center px-4 space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 bg-muted/5 relative overflow-hidden">{step.component}</div>
          </div>

          {/* Decorative Backdrops */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 blur-3xl transform scale-110 -z-10`}
          />

          {/* Floating badge */}
          <motion.div
            className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 z-20 rounded-lg sm:rounded-xl bg-card/90 px-2.5 py-1.5 sm:px-4 sm:py-2 shadow-lg sm:shadow-xl backdrop-blur-sm border-2 border-b-4"
            initial={{scale: 0, rotate: -10}}
            transition={{delay: 0.3, type: "spring"}}
            viewport={{once: true}}
            whileInView={{scale: 1, rotate: 0}}
          >
            <p className="text-xs sm:text-sm font-bold">
              {step.id === 1 && "⚡ Hızlı"}
              {step.id === 2 && "🤖 Akıllı"}
              {step.id === 3 && "📊 Veri Odaklı"}
              {step.id === 4 && "🧠 Kalıcı"}
              {step.id === 5 && "🗺️ Görsel"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollytellingSection;
