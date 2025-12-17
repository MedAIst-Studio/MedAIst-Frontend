"use client";

import {motion} from "framer-motion";
import {Brain, User} from "lucide-react";
import {useEffect, useState} from "react";

export const MockChatInterface = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4); // 0: User, 1: Thinking, 2: Response, 3: Wait
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden ">
      {/* Chat Area */}
      <div className="flex-1 space-y-4 font-sans text-xs sm:text-sm">
        {/* User Message */}
        <motion.div
          className="flex justify-end gap-3"
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
        >
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
            <p>Kardiyak output nedir?</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-muted flex flex-col items-center justify-center flex-shrink-0 border border-border">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>

        {/* AI Response */}
        {step >= 1 && (
          <motion.div
            className="flex justify-start gap-3"
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex flex-col items-center justify-center flex-shrink-0 border border-purple-200 dark:border-purple-800">
              <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="bg-muted/50 border border-border px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
              {step === 1 ? (
                <div className="flex space-x-1 h-5 items-center">
                  <motion.div
                    className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                    animate={{y: [0, -3, 0]}}
                    transition={{repeat: Infinity, duration: 0.6, delay: 0}}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                    animate={{y: [0, -3, 0]}}
                    transition={{repeat: Infinity, duration: 0.6, delay: 0.1}}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                    animate={{y: [0, -3, 0]}}
                    transition={{repeat: Infinity, duration: 0.6, delay: 0.2}}
                  />
                </div>
              ) : (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Kardiyak output</span>, kalbin
                    bir dakikada pompaladığı kan miktarıdır.
                    <br />
                    <span className="opacity-70 mt-1 block text-[10px]">
                      CO = Atım Hacmi x Kalp Hızı
                    </span>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
      {/* Input Area Mock */}
      <div className="p-3 border-t border-border bg-muted/10">
        <div className="h-9 bg-background border border-border rounded-lg" />
      </div>
    </div>
  );
};
