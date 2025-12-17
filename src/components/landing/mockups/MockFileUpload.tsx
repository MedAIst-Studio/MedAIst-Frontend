"use client";

import {motion} from "framer-motion";
import {CheckCircle2, FileText, Upload} from "lucide-react";
import {useEffect, useState} from "react";

export const MockFileUpload = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset to loop
        }
        // Specific jump points to simulate real upload
        if (prev === 0) return 10;
        if (prev === 10) return 45;
        if (prev === 45) return 90;
        if (prev === 90) return 100;
        return 0;
      });
    }, 1500); // Loop every 1.5s for dynamic feel

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm">
      {/* Upload Zone */}
      <div className="w-full h-40 border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center gap-3 bg-primary/5 relative overflow-hidden">
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm">
            <Upload className="w-6 h-6 text-primary" />
          </div>
        </motion.div>

        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Dosyaları buraya bırakın</p>
          <p className="text-xs text-muted-foreground mt-1">PDF (max 10MB)</p>
        </div>

        {/* Scan Line Effect */}
        <motion.div
          animate={{top: ["0%", "100%"], opacity: [0, 1, 0]}}
          transition={{duration: 2, repeat: Infinity, ease: "linear"}}
          className="absolute left-0 right-0 h-0.5 bg-primary/30 z-10 w-full"
        />
      </div>

      {/* File List Item Mock */}
      <div className="w-full space-y-3">
        <motion.div
          key={progress === 0 ? "reset" : "active"}
          className="bg-muted/30 rounded-lg p-3 border border-border/50"
          initial={{opacity: 0, x: -10}}
          animate={{opacity: 1, x: 0}}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium truncate">Kardiyoloji_Notlari.pdf</span>
                <span className="text-[10px] text-muted-foreground">
                  {progress === 100 ? "Tamamlandı" : "Yükleniyor..."}
                </span>
              </div>
            </div>
            {progress === 100 && (
              <motion.div initial={{scale: 0}} animate={{scale: 1}}>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </motion.div>
            )}
          </div>
          {/* Progress Bar */}
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              animate={{width: `${progress}%`}}
              transition={{duration: 0.5}}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
