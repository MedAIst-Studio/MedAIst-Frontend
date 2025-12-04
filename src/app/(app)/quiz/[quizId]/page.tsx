"use client";

import {ChevronLeft, ChevronRight} from "lucide-react";
import {useParams} from "next/navigation";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import {QuestionCard} from "@/features/quiz/components/QuestionCard";
import {QuizProgress} from "@/features/quiz/components/QuizProgress";
import {QuizResult} from "@/features/quiz/components/QuizResult";
import {useQuiz, useSubmitQuiz} from "@/features/quiz/hooks/useQueries";
import {AttemptDetailData, QuizResponseData, SubmitResponseData} from "@/features/quiz/validation";

export default function QuizPage() {
  const params = useParams();
  const quizId = params.quizId as string;

  const {data: quizData, isLoading, error} = useQuiz(quizId);
  const quiz = quizData as QuizResponseData;
  const submitQuizMutation = useSubmitQuiz();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{question_id: string; selected_index: number}[]>([]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-destructive">
        Quiz yüklenirken hata oluştu.
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleOptionSelect = (index: number) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.question_id === currentQuestionIndex.toString(),
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = {
        question_id: currentQuestionIndex.toString(),
        selected_index: index,
      };
    } else {
      newAnswers.push({question_id: currentQuestionIndex.toString(), selected_index: index});
    }

    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const formattedAnswers = answers.map((a) => {
        const questionIndex = parseInt(a.question_id);
        const question = quiz.questions[questionIndex];
        const selectedOption = question.options[a.selected_index];

        return {
          question_no: question.no,
          selected_option: selectedOption.label,
        };
      });

      await submitQuizMutation.mutateAsync({
        id: quizId,
        answers: formattedAnswers,
      });
    } catch (err) {
      console.error("Failed to submit quiz", err);
    }
  };

  if (submitQuizMutation.isSuccess && submitQuizMutation.data) {
    const resultData = submitQuizMutation.data as SubmitResponseData;

    // Merge question text from quiz data into the result
    const resultWithText: AttemptDetailData = {
      ...resultData,
      id: resultData.attempt_id, // Map attempt_id to id
      quiz_id: quiz.id,
      quiz_title: quiz.title,
      completed_at: new Date().toISOString(), // Fallback as it might be missing
      answers: resultData.answers.map((answer) => {
        const question = quiz.questions.find((q) => q.no === answer.question_no);

        return {
          ...answer,
          question_text: question?.text || "Soru metni bulunamadı",
        };
      }),
    };

    return (
      <MaxWidthWrapper className="py-8">
        <QuizResult result={resultWithText} />
      </MaxWidthWrapper>
    );
  }

  const currentAnswer = answers.find((a) => a.question_id === currentQuestionIndex.toString());

  return (
    <MaxWidthWrapper className="py-8 space-y-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{quiz.title}</h1>
        <QuizProgress
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={quiz.questions.length}
        />
      </div>

      <div className="min-h-[400px]">
        <QuestionCard
          options={currentQuestion.options}
          question={currentQuestion.text}
          selectedOption={currentAnswer ? currentAnswer.selected_index : null}
          onSelectOption={handleOptionSelect}
        />
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button disabled={currentQuestionIndex === 0} variant="outline" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" /> Önceki
        </Button>

        {isLastQuestion ? (
          <Button
            disabled={answers.length !== quiz.questions.length || submitQuizMutation.isPending}
            onClick={handleSubmit}
          >
            {submitQuizMutation.isPending ? <>Kaydediliyor...</> : <>Tamamla</>}
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Sonraki <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </MaxWidthWrapper>
  );
}
