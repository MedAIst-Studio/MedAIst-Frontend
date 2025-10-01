"use client";

import {Brain, CheckCircle2, RotateCcw, XCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";

import {type Question} from "../types";

interface QuizSessionProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showResult: boolean;
  progress: number;
  quizTitle: string;
  onAnswerSelect: (answerIndex: number) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  onResetQuestion: () => void;
  onEndQuiz: () => void;
}

export function QuizSession({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  showResult,
  progress,
  quizTitle,
  onAnswerSelect,
  onSubmitAnswer,
  onNextQuestion,
  onResetQuestion,
  onEndQuiz,
}: QuizSessionProps) {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Quiz Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{quizTitle}</h1>
              <p className="text-muted-foreground">
                Soru {currentQuestionIndex + 1} / {totalQuestions}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={onEndQuiz}>
            Çıkış
          </Button>
        </div>
        <Progress className="h-2" value={progress} />
      </div>

      {/* Question Card */}
      <Card className="mb-6 border-b-4 border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold leading-relaxed">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full cursor-pointer rounded-lg border-2 p-4 text-left transition-all duration-200 ${
                selectedAnswer === index
                  ? "border-primary bg-primary/10"
                  : showResult
                    ? index === question.correctAnswer
                      ? "border-green-500 bg-green-50"
                      : index === selectedAnswer
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => onAnswerSelect(index)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    showResult && index === question.correctAnswer
                      ? "border-green-500 bg-green-500"
                      : showResult && index === selectedAnswer && index !== question.correctAnswer
                        ? "border-red-500 bg-red-500"
                        : selectedAnswer === index
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                  }`}
                >
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle className="h-4 w-4 text-white" />
                  )}
                  {selectedAnswer === index && !showResult && (
                    <div className="h-3 w-3 rounded-full bg-white" />
                  )}
                </div>
                <span className="font-medium text-foreground">{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Result Explanation */}
      {showResult && (
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-primary">Açıklama</h3>
                <p className="leading-relaxed text-primary/80">{question.explanation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {!showResult ? (
          <Button
            className="flex-1 border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl"
            disabled={selectedAnswer === null}
            onClick={onSubmitAnswer}
          >
            Cevabı Onayla
          </Button>
        ) : (
          <>
            <Button
              className="flex-1 border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl"
              onClick={onNextQuestion}
            >
              {currentQuestionIndex < totalQuestions - 1 ? "Sonraki Soru" : "Quiz'i Bitir"}
            </Button>
            <Button
              className="border-b-4 border-secondary/30 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/50 hover:shadow-xl"
              variant="outline"
              onClick={onResetQuestion}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Tekrar Dene
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
