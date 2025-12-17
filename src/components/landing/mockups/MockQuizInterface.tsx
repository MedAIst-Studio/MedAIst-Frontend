"use client";

import {motion} from "framer-motion";
import {Check} from "lucide-react";
import {useEffect, useState} from "react";

export const MockQuizInterface = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev === null ? 1 : null)); // Toggle selection
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-card border border-border rounded-xl p-4 flex flex-col gap-4 shadow-sm font-sans relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      {/* Question Header */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
          Soru 1/10
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
          Hangisi parasempatik sinir sisteminin etkilerinden biridir?
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {[
          {id: 0, text: "Kalp hızının artması", correct: false},
          {id: 1, text: "Sindirim aktivitesinin artması", correct: true},
          {id: 2, text: "Göz bebeklerinin büyümesi", correct: false},
        ].map((option, idx) => {
          const isSelected = selected === option.id;
          const isCorrect = option.correct;
          // Only show validation logic if something is selected
          // But for mockup, let's just make the "Correct" one turn green when selected.
          const showResult = selected !== null;

          let borderColor = "border-border";
          let bgColor = "bg-card";
          let textColor = "text-muted-foreground";

          if (showResult) {
            if (isCorrect) {
              borderColor = "border-green-500/50";
              bgColor = "bg-green-500/10";
              textColor = "text-green-700 dark:text-green-300";
            } else if (isSelected && !isCorrect) {
              // We are simulating user picking the CORRECT one primarily for positive reinforcement in landing page
              // But if we wanted to show wrong... logic would be here.
              // For this mockup, let's assume the user clicks the Correct one (id 1)
            } else {
              bgColor = "opacity-50";
            }
          }

          return (
            <motion.div
              key={idx}
              className={`
                            relative flex items-center justify-between p-3 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-300
                            ${borderColor} ${bgColor} ${textColor}
                        `}
              animate={{
                scale: isSelected ? 1.02 : 1,
              }}
            >
              <span>{option.text}</span>
              {showResult && isCorrect && (
                <motion.div
                  initial={{scale: 0}}
                  animate={{scale: 1}}
                  className="bg-green-500 text-white rounded-full p-0.5"
                >
                  <Check className="w-3 h-3" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Score/Feedback Mock */}
      <motion.div
        className="mt-auto pt-2"
        initial={{opacity: 0}}
        animate={{opacity: selected !== null ? 1 : 0}}
      >
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
            <span className="font-bold">Doğru!</span> Parasempatik sistem "dinlen ve sindir"
            fonksiyonlarını yönetir.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
