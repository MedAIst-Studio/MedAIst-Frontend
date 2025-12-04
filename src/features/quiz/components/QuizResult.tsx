import {AlertCircle, ArrowRight, CheckCircle2, HelpCircle, Target, XCircle} from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

import {AttemptDetailData} from "../validation";

interface QuizResultProps {
  result: AttemptDetailData;
}

export const QuizResult: React.FC<QuizResultProps> = ({result}) => {
  const correctCount = result.answers.filter((a) => a.is_correct).length;
  const incorrectCount = result.answers.length - correctCount;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Card */}
      <Card className="border-border/40 overflow-hidden p-0 gap-0">
        <div className="bg-primary/5 p-6 md:p-10 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Quiz Tamamlandı!</h2>
            <p className="text-muted-foreground">İşte performans özetiniz</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Score Circle */}
            <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-background bg-white dark:bg-slate-950 shadow-xl">
              <div
                className="absolute inset-0 rounded-full border-8 border-primary opacity-20"
                style={{clipPath: "circle(50%)"}}
              />
              <div
                className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent transform -rotate-90"
                style={{
                  clipPath: "circle(50%)",
                  transform: `rotate(${(result.percentage / 100) * 360}deg)`,
                }}
              />
              <div className="text-center z-10">
                <span className="text-4xl font-extrabold text-primary tracking-tighter block">
                  {result.percentage}%
                </span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Başarı
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-left">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Doğru
                </div>
                <div className="text-2xl font-bold">{correctCount}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" /> Yanlış
                </div>
                <div className="text-2xl font-bold">{incorrectCount}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-500" /> Toplam Puan
                </div>
                <div className="text-2xl font-bold">{result.score}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-500" /> Soru Sayısı
                </div>
                <div className="text-2xl font-bold">{result.total_questions}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background p-4 flex justify-center border-t border-border/50">
          <Button asChild className="px-8" size="lg">
            <Link href="/quiz">
              Quiz Listesine Dön <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>

      {/* Detailed Analysis */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-2xl font-bold tracking-tight">Detaylı Analiz</h3>
          <Badge className="text-sm py-1 px-3" variant="outline">
            {result.total_questions} Soru
          </Badge>
        </div>

        <Accordion collapsible className="w-full space-y-4" type="single">
          {result.answers.map((answer, index) => (
            <AccordionItem
              key={index}
              className={`border-2 border-b-4 rounded-lg px-4 bg-card ${
                answer.is_correct
                  ? "border-green-200 dark:border-green-900/30"
                  : "border-red-200 dark:border-red-900/30"
              }`}
              value={`item-${index}`}
            >
              <AccordionTrigger className="hover:no-underline py-4 cursor-pointer">
                <div className="flex items-start text-left gap-4 w-full pr-4">
                  <div className="mt-0.5">
                    {answer.is_correct ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="font-medium leading-normal">
                      <span className="text-muted-foreground mr-2 font-normal">
                        Soru {answer.question_no}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90 line-clamp-2">
                      {answer.question_text || `Soru metni bulunamadı.`}
                    </p>
                  </div>
                  <Badge
                    className={answer.is_correct ? "bg-green-600 hover:bg-green-700" : ""}
                    variant={answer.is_correct ? "default" : "destructive"}
                  >
                    {answer.is_correct ? "Doğru" : "Yanlış"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="pl-9 space-y-4">
                  <div className="grid gap-3 bg-muted/30 rounded-lg text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-medium text-muted-foreground w-24">Cevabınız:</span>
                      <span
                        className={`font-medium ${
                          answer.is_correct ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {answer.selected_option}
                      </span>
                    </div>
                    {!answer.is_correct && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="font-medium text-muted-foreground w-24">Doğru Cevap:</span>
                        <span className="text-green-600 font-medium">{answer.correct_option}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <AlertCircle className="w-4 h-4" />
                      Açıklama
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed bg-primary/5 p-4 rounded-lg border border-primary/10">
                      {answer.explanation}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
