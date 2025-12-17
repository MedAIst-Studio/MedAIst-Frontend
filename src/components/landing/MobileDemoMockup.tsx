"use client";

import {motion} from "framer-motion";
import {ArrowDown, Check, FileText, Sparkles} from "lucide-react";

export const MobileDemoMockup = () => {
  const questions = [
    {
      id: 1,
      text: "72 yaşında bayan hasta, halsizlik, nefes darlığı ve egzersizle artan yorgunluk ile geliyor. Fizik muayenede bacaklarda şişlik ve hafif raller saptanıyor. En uygun tedavi yaklaşımı nedir?",
      options: [
        {text: "Antiaritmik Tedavi", correct: false},
        {text: "Diüretik Tedavi", correct: true},
      ],
    },
    {
      id: 2,
      text: "65 yaşındaki bir erkek hasta, son altı aydır giderek artan nefes darlığı ve çabuk yorulma şikayetleriyle başvuruyor. Kardiyovasküler muayenede ılımlı bir üfürüm duyuluyor ve sol ventrikül hipertrofisi saptanıyor. Sol ventrikül hipertrofisi vakasına bağlı olarak hangi patofizyolojik mekanizma en olasıdır?",
      options: [
        {text: "Sol ventrikül çıkış yolunda darlık ve konsantrik hipertrofi", correct: true},
        {text: "Sol atriyal dilatasyon", correct: false},
      ],
    },
    {
      id: 3,
      text: "63 yaşındaki erkek hasta, son 6 aydır ilerleyici nefes darlığı şikayetiyle başvuruyor. Kan basıncı 160/100 mmHg olarak ölçülüyor. Ekokardiyografi, sol ventrikül duvarının kalınlaşmış olduğunu gösteriyor. Bu durumun altta yatan en olası mekanizması nedir?",
      options: [
        {text: "Basınç yükü hipertrofisi", correct: true},
        {text: "Volüm yükü hipertrofisi", correct: false},
      ],
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto p-4 flex flex-col items-center gap-6">
      {/* Source PDF Card */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="w-full bg-background border-2 border-b-4 border-border rounded-xl p-4 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-red-500/10 p-2 rounded-lg">
            <FileText className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">Patoloji Notları.pdf</h3>
            <p className="text-xs text-muted-foreground">3.62 MB • 247 Sayfa</p>
          </div>
        </div>

        {/* Fake PDF Content */}
        <div className="space-y-2 opacity-50 blur-[0.5px]">
          <div className="h-2 bg-muted rounded w-3/4" />
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-5/6" />
          <div className="h-2 bg-muted rounded w-4/5" />
        </div>

        {/* Scan effect */}
        <motion.div
          animate={{top: ["0%", "100%"]}}
          transition={{duration: 2, repeat: Infinity, ease: "linear"}}
          className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10"
        />
      </motion.div>

      {/* Connection / Process */}
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 0.3, duration: 0.4}}
        className="relative"
      >
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
        <Sparkles className="w-4 h-4 text-purple-500 absolute -top-1 -right-2 animate-pulse" />
      </motion.div>

      {/* Generated Quiz Cards Stack */}
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-medium text-muted-foreground">Oluşturulan Sorular</span>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            3 Yeni Soru
          </span>
        </div>

        {questions.map((q, qImg) => (
          <motion.div
            key={q.id}
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.6 + qImg * 0.2, duration: 0.5}}
            className="w-full bg-card border-2 border-b-4 border-border rounded-xl p-4"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                {q.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-left font-medium mb-3 text-foreground/90 leading-snug">
                  {q.text}
                </p>

                <div className="space-y-1.5">
                  {q.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2 rounded-lg text-xs font-medium transition-colors ${
                        opt.correct
                          ? "bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-muted/30 border border-transparent text-muted-foreground"
                      }`}
                    >
                      <span className="truncate pr-2">{opt.text}</span>
                      {opt.correct && <Check className="w-3 h-3 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
