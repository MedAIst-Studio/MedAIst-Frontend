"use client";

import {motion, AnimatePresence} from "framer-motion";
import {Check, ChevronRight, RotateCcw} from "lucide-react";
import {useState, useEffect} from "react";

export const MockFlashcards = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      front: "Mitral Kapak nerede bulunur?",
      back: "Sol atrium ile sol ventrikül arasında yer alır.",
    },
    {
      front: "Diyastol nedir?",
      back: "Kalp kasının gevşediği ve kanla dolduğu evre.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-[280px] h-[180px] perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{rotateY: isFlipped ? 180 : 0}}
          transition={{duration: 0.6, type: "spring", stiffness: 260, damping: 20}}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-card border-2 border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Soru</span>
            <p className="text-sm font-semibold">{cards[0].front}</p>
            <div className="mt-4 flex gap-2">
               <div className="w-2 h-2 rounded-full bg-primary/20" />
               <div className="w-2 h-2 rounded-full bg-primary/10" />
               <div className="w-2 h-2 rounded-full bg-primary/10" />
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 backface-hidden bg-primary/5 border-2 border-primary/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl"
            style={{transform: "rotateY(180deg)"}}
          >
            <span className="text-[10px] uppercase tracking-wider text-primary mb-2">Cevap</span>
            <p className="text-sm font-medium text-foreground">{cards[0].back}</p>
            <div className="mt-4 flex gap-3">
               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                  <RotateCcw className="w-4 h-4" />
               </div>
               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                  <Check className="w-4 h-4" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Mock */}
      <div className="mt-8 grid grid-cols-3 gap-4 w-full">
        <div className="bg-muted/30 p-2 rounded-lg text-center">
            <p className="text-[10px] text-muted-foreground">Yeni</p>
            <p className="text-xs font-bold">12</p>
        </div>
        <div className="bg-green-500/10 p-2 rounded-lg text-center">
            <p className="text-[10px] text-green-600">Öğrenildi</p>
            <p className="text-xs font-bold text-green-600">45</p>
        </div>
        <div className="bg-blue-500/10 p-2 rounded-lg text-center">
            <p className="text-[10px] text-blue-600">Tekrar</p>
            <p className="text-xs font-bold text-blue-600">8</p>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
};
