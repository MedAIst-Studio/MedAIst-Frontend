"use client";

import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {useParams} from "next/navigation";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import {QuizResult} from "@/features/quiz/components/QuizResult";
import {useSubmissionDetails} from "@/features/quiz/hooks/useQueries";

export default function QuizResultPage() {
  const params = useParams();
  const attemptId = params.attemptId as string;

  const {data: attempt, isLoading, error} = useSubmissionDetails(attemptId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  if (error || !attempt) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Sonuçlar yüklenirken hata oluştu.
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="py-8 space-y-6">
      <div className="max-w-4xl mx-auto">
        <Button
          asChild
          className="mb-4 pl-0 hover:bg-transparent hover:text-primary"
          variant="ghost"
        >
          <Link className="flex items-center gap-2" href="/quiz/results">
            <ArrowLeft className="w-4 h-4" />
            Tüm Sonuçlara Dön
          </Link>
        </Button>
        <QuizResult result={attempt} />
      </div>
    </MaxWidthWrapper>
  );
}
