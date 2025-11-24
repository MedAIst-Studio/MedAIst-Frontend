"use client";

import {useParams} from "next/navigation";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Spinner} from "@/components/ui/spinner";
import {QuizResult} from "@/features/quiz/components/QuizResult";
import {useSubmissionDetails} from "@/features/quiz/hooks/useQueries";

export default function QuizResultPage() {
  const params = useParams();
  const submissionId = params.submissionId as string;

  const {data: submission, isLoading, error} = useSubmissionDetails(submissionId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Sonuçlar yüklenirken hata oluştu.
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="py-8">
      <QuizResult
        results={submission.question_results}
        score={submission.score}
        totalQuestions={submission.question_results.length}
      />
    </MaxWidthWrapper>
  );
}
