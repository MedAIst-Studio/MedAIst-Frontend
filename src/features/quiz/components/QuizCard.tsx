"use client";

import {Clock, Play, Target, Trophy} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import {type Quiz} from "../types";
import {formatDuration, getDifficultyColor, getScoreColor} from "../utils";

interface QuizCardProps {
  quiz: Quiz;
  onStartQuiz: (quizId: number) => void;
}

export function QuizCard({quiz, onStartQuiz}: QuizCardProps) {
  const IconComponent = quiz.icon;

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-2 sm:space-x-3 flex-1">
            <div className={`p-1.5 sm:p-2 rounded-lg ${quiz.color} flex-shrink-0`}>
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-sm sm:text-lg leading-tight">{quiz.title}</CardTitle>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {quiz.description}
              </p>
            </div>
          </div>
          {quiz.completed && quiz.score && (
            <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span className={`text-xs sm:text-sm font-semibold ${getScoreColor(quiz.score)}`}>
                {quiz.score}%
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 pt-2 sm:pt-6">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <Badge className="text-xs" variant="secondary">
            {quiz.category}
          </Badge>
          <Badge className={`text-xs ${getDifficultyColor(quiz.difficulty)}`} variant="outline">
            {quiz.difficulty}
          </Badge>
          {quiz.completed && (
            <Badge
              className="bg-green-100 text-green-800 border-green-200 text-xs"
              variant="outline"
            >
              Tamamlandı
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Target className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>{quiz.questions} soru</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span>{formatDuration(quiz.duration)}</span>
          </div>
        </div>

        <Button
          className="w-full text-xs sm:text-sm h-8 sm:h-10"
          onClick={() => onStartQuiz(quiz.id)}
        >
          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          {quiz.completed ? "Tekrar Çöz" : "Quiz'i Başlat"}
        </Button>
      </CardContent>
    </Card>
  );
}
