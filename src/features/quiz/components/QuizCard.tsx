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
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${quiz.color}`}>
              <IconComponent className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg leading-tight">{quiz.title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{quiz.description}</p>
            </div>
          </div>
          {quiz.completed && quiz.score && (
            <div className="flex items-center space-x-1">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className={`text-sm font-semibold ${getScoreColor(quiz.score)}`}>
                {quiz.score}%
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{quiz.category}</Badge>
          <Badge className={getDifficultyColor(quiz.difficulty)} variant="outline">
            {quiz.difficulty}
          </Badge>
          {quiz.completed && (
            <Badge className="bg-green-100 text-green-800 border-green-200" variant="outline">
              Tamamlandı
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span>{quiz.questions} soru</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{formatDuration(quiz.duration)}</span>
          </div>
        </div>

        <Button className="w-full" onClick={() => onStartQuiz(quiz.id)}>
          <Play />
          {quiz.completed ? "Tekrar Çöz" : "Quiz'i Başlat"}
        </Button>
      </CardContent>
    </Card>
  );
}
