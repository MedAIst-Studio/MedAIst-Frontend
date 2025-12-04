import React from "react";

import {Progress} from "@/components/ui/progress";

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestionIndex,
  totalQuestions,
}) => {
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full mb-8 space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground font-medium">
          {totalQuestions} Sorudan{" "}
          <span className="text-foreground">{currentQuestionIndex + 1}.</span>
        </span>
        <span className="text-primary font-semibold">{Math.round(progressPercentage)}%</span>
      </div>
      <Progress className="h-2" value={progressPercentage} />
    </div>
  );
};
