"use client";

import {motion} from "framer-motion";
import {Network, GitBranch, Target} from "lucide-react";

export const MockMindmaps = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-dot-pattern">
      <div className="relative w-full h-full p-4">
        {/* Central Node */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5}}
        >
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg border-2 border-white/20 text-xs font-bold whitespace-nowrap">
            Kardiyovasküler Sistem
          </div>
        </motion.div>

        {/* Connections and Child Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.line 
                x1="50%" y1="50%" x2="25%" y2="30%" 
                stroke="currentColor" strokeWidth="1" className="text-primary/30"
                initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 0.5}}
            />
            <motion.line 
                x1="50%" y1="50%" x2="75%" y2="35%" 
                stroke="currentColor" strokeWidth="1" className="text-primary/30"
                initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 0.6}}
            />
            <motion.line 
                x1="50%" y1="50%" x2="40%" y2="75%" 
                stroke="currentColor" strokeWidth="1" className="text-primary/30"
                initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1, delay: 0.7}}
            />
        </svg>

        {/* Node 1 */}
        <motion.div 
          className="absolute left-[20%] top-[25%] z-10"
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.2}}
        >
          <div className="bg-background border-2 border-border p-2 rounded-lg shadow-md text-[10px] font-medium flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Kalp Anatomisi
          </div>
        </motion.div>

        {/* Node 2 */}
        <motion.div 
          className="absolute right-[15%] top-[30%] z-10"
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.4}}
        >
          <div className="bg-background border-2 border-border p-2 rounded-lg shadow-md text-[10px] font-medium flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            Kan Basıncı
          </div>
        </motion.div>

        {/* Node 3 */}
        <motion.div 
          className="absolute left-[35%] bottom-[20%] z-10"
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.6}}
        >
          <div className="bg-background border-2 border-border p-2 rounded-lg shadow-md text-[10px] font-medium flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            EKG Analizi
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm border border-border p-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-2">
                <Target className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold">İlerleme</span>
            </div>
            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{width: 0}}
                    animate={{width: "65%"}}
                    transition={{duration: 2, delay: 1}}
                />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1 text-right">%65</p>
        </div>
      </div>

      <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle, #00000010 1px, transparent 1px);
          background-size: 20px 20px;
        }
        :global(.dark) .bg-dot-pattern {
          background-image: radial-gradient(circle, #ffffff10 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};
