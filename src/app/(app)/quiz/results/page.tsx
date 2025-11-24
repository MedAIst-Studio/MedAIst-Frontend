"use client";

import {ArrowLeft, ExternalLink} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Spinner} from "@/components/ui/spinner";
import {useSubmissions} from "@/features/quiz/hooks/useQueries";

export default function QuizHistoryPage() {
  const {data: submissions, isLoading, error} = useSubmissions();

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
    <MaxWidthWrapper className="py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sonuçlarım</h1>
          <p className="text-muted-foreground">
            Geçmiş quiz denemelerinizi ve skorlarınızı inceleyin.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/quiz">
            <ArrowLeft className="mr-2 h-4 w-4" /> Quizlere Dön
          </Link>
        </Button>
      </div>

      {submissions && submissions.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {submissions.map((submission) => (
            <Card key={submission.id} className="flex flex-col h-full transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2 min-h-[3.5rem]">
                  {submission.quiz_title}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {new Intl.DateTimeFormat("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(new Date(submission.attempt_date))}
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-stretch">
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium text-muted-foreground">Puan:</span>
                  <Badge
                    className="text-base px-2 py-1 font-bold"
                    variant={submission.score >= 70 ? "default" : "secondary"}
                  >
                    {submission.score}
                  </Badge>
                </div>
                <Button asChild className="w-full group mt-2" variant="outline">
                  <Link href={`/quiz/results/${submission.id}`}>
                    Detayları Gör
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          Henüz hiç quiz çözmediniz.
          <div className="mt-4">
            <Button asChild>
              <Link href="/quiz">İlk Quizini Çöz</Link>
            </Button>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
