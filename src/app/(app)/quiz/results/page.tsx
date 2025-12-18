"use client";

import {ArrowLeft, ArrowRight, FileQuestion, Target} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Spinner} from "@/components/ui/spinner";
import {useSubmissions} from "@/features/quiz/hooks/useQueries";
import {AttemptsResponseData} from "@/features/quiz/validation";

export default function QuizHistoryPage() {
  const {data: submissionsData, isLoading, error} = useSubmissions();
  const submissions = submissionsData as AttemptsResponseData;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Sonuçlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sonuçlarım</h1>
          <p className="text-muted-foreground mt-1">
            Geçmiş quiz performanslarınızı ve detaylı analizlerinizi inceleyin.
          </p>
        </div>
        <Button asChild className="shadow-sm" variant="default">
          <Link href="/quiz">
            <ArrowLeft className="h-4 w-4" /> Quizlere Dön
          </Link>
        </Button>
      </div>

      {submissions && submissions.attempts && submissions.attempts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {submissions.attempts.map((submission) => (
            <Card key={submission.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2 leading-tight">
                    {submission.quiz_title}
                  </CardTitle>
                  <Badge
                    className={
                      submission.score >= 70
                        ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400"
                    }
                    variant={submission.score >= 70 ? "default" : "secondary"}
                  >
                    {submission.percentage.toFixed(2)}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Başarı Oranı</span>
                      <span className="font-medium">{submission.score} Puan</span>
                    </div>
                    <Progress className="h-2" value={submission.percentage} />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-md">
                      <Target className="h-4 w-4 text-primary" />
                      <span>{submission.score} Puan</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-md">
                      <FileQuestion className="h-4 w-4 text-primary" />
                      <span>{submission.total_questions} Soru</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full group" variant="outline">
                  <Link href={`/quiz/results/${submission.id}`}>
                    Detayları İncele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed rounded-xl bg-muted/30">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <FileQuestion className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Henüz Quiz Çözmediniz</h3>
          <p className="text-muted-foreground max-w-sm mb-6">
            Bilgilerinizi test etmek ve kendinizi geliştirmek için ilk quizinizi çözün.
          </p>
          <Button asChild size="lg">
            <Link href="/quiz">Quizlere Göz At</Link>
          </Button>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
