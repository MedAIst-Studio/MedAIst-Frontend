"use client";

import {useParams} from "next/navigation";

import {QuizResult} from "@/features/quiz/components/QuizResult";
import {useSubmissionDetails} from "@/features/quiz/hooks/useQueries";

export default function QuizResultPage() {
  const params = useParams();
  const submissionId = params.submissionId as string;

  const {data: submission, isLoading, error} = useSubmissionDetails(submissionId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Error loading results. Please try again later.
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-10">
      <QuizResult
        results={submission.question_results}
        score={submission.score}
        totalQuestions={submission.question_results.length}
      />
    </div>
  );
}
