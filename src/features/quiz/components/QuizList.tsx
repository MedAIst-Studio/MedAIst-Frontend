"use client";

import {Target} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

import {type Quiz} from "../types";
import {categories, difficulties, filterQuizzes} from "../utils";

import {QuizCard} from "./QuizCard";

interface QuizListProps {
  quizzes: Quiz[];
  onStartQuiz: (quizId: number) => void;
  loading?: boolean;
}

export function QuizList({quizzes, onStartQuiz, loading = false}: QuizListProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tümü");
  const [showCompleted, setShowCompleted] = useState<boolean | null>(null);

  const filteredQuizzes = filterQuizzes(
    quizzes,
    selectedCategory,
    selectedDifficulty,
    showCompleted,
  );

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-8 w-8 mx-auto mb-4" />
          <p className="text-muted-foreground">Quizler yükleniyor...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Kategori</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Zorluk</label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                size="sm"
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Durum</label>
          <div className="flex flex-wrap gap-2">
            {[
              {label: "Tümü", value: null},
              {label: "Tamamlanan", value: true},
              {label: "Tamamlanmayan", value: false},
            ].map((option) => (
              <Button
                key={option.label}
                size="sm"
                variant={showCompleted === option.value ? "default" : "outline"}
                onClick={() => setShowCompleted(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      {filteredQuizzes.length === 0 ? (
        <div className="text-center py-12">
          <Target className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-semibold">Quiz bulunamadı</h3>
          <p className="text-muted-foreground">
            {quizzes.length === 0 ? "İlk quiz'inizi oluşturun" : "Filtre kriterlerinizi değiştirin"}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} />
          ))}
        </div>
      )}

      {filteredQuizzes.length > 0 && filteredQuizzes.length !== quizzes.length && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {filteredQuizzes.length} / {quizzes.length} quiz gösteriliyor
          </p>
        </div>
      )}
    </div>
  );
}
