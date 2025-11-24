"use client";

import {Activity, ArrowRight, BrainCircuit, Stethoscope} from "lucide-react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {CreateQuizDialog} from "@/features/quiz/components/CreateQuizDialog";
import {useQuizzes} from "@/features/quiz/hooks/useQueries";

export default function QuizListPage() {
  const {data: quizzes, isLoading, error} = useQuizzes();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Error loading quizzes. Please try again later.
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Quizlerim</h1>
          <p className="text-muted-foreground">Quizlerinizi burada görebilirsiniz.</p>
        </div>
        <div className="flex gap-2">
          <CreateQuizDialog />
          <Button asChild variant="outline">
            <Link href="/quiz/results">Sonuçlarım</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes?.map((quiz, index) => (
          <Card
            key={quiz.id}
            className="group transition-all duration-300 hover:border-primary/50 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BrainCircuit className="w-24 h-24 text-primary" />
            </div>

            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {index % 2 === 0 ? (
                  <Stethoscope className="w-6 h-6" />
                ) : (
                  <Activity className="w-6 h-6" />
                )}
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {quiz.title}
              </CardTitle>
            </CardHeader>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/quiz/${quiz.id}`}>
                  Başlat
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
