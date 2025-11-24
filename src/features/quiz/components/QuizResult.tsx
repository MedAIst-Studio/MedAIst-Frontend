import {ArrowRight, CheckCircle2, XCircle} from "lucide-react";
import Link from "next/link";
import React from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

interface ResultDetail {
  text: string;
  user_selected: number;
  correct_index: number;
  is_correct: boolean;
  explanation: string;
}

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  results: ResultDetail[];
}

export const QuizResult: React.FC<QuizResultProps> = ({score, totalQuestions, results}) => {
  const percentage = Math.round((score / (totalQuestions * 10)) * 100);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="text-center border-border/40 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Quiz Tamamlandı!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-6xl font-extrabold text-primary tracking-tighter">
              {percentage}%
            </div>
            <p className="text-muted-foreground text-lg">
              Skorunuz {totalQuestions * 10} üzerinden{" "}
              <span className="font-semibold text-foreground">{score}</span>
            </p>
          </div>

          <Button asChild className="mt-4" size="lg">
            <Link href="/quiz">
              Quiz listesi <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold tracking-tight px-1">Detaylı Analiz</h3>
        {results.map((result, index) => (
          <Card
            key={index}
            className={`transition-colors ${
              result.is_correct
                ? "border-green-500 bg-green-50/10"
                : "border-destructive bg-red-50/10"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {result.is_correct ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-500" />
                  )}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-medium leading-snug">
                      <span className="text-muted-foreground mr-2">#{index + 1}</span>
                      {result.text}
                    </h4>
                    <Badge
                      className={result.is_correct ? "bg-green-600 hover:bg-green-700" : ""}
                      variant={result.is_correct ? "default" : "destructive"}
                    >
                      {result.is_correct ? "Correct" : "Incorrect"}
                    </Badge>
                  </div>

                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-muted-foreground w-24">Cevabınız:</span>
                      <span
                        className={
                          result.is_correct
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }
                      >
                        Seçenek {result.user_selected + 1}
                      </span>
                    </div>
                    {!result.is_correct && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-muted-foreground w-24">Doğru Cevap:</span>
                        <span className="text-green-600 font-medium">
                          Seçenek {result.correct_index + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-3" />

                  <div className="bg-muted/50 rounded-lg p-4 text-sm">
                    <span className="font-semibold block mb-1 text-foreground">Açıklama:</span>
                    <span className="text-muted-foreground leading-relaxed">
                      {result.explanation}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
