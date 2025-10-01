"use client";

import {Filter, Target} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

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
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-primary" />
            <span>Quiz Filtresi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium">Kategori</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    className={`border-b-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      selectedCategory === category
                        ? "border-primary/50 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg hover:border-primary/70 hover:shadow-xl"
                        : "border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground shadow-sm hover:border-primary/30 hover:shadow-md"
                    }`}
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium">Zorluk</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    className={`border-b-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      selectedDifficulty === difficulty
                        ? "border-primary/50 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg hover:border-primary/70 hover:shadow-xl"
                        : "border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground shadow-sm hover:border-primary/30 hover:shadow-md"
                    }`}
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Completion Filter */}
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
                    className={`border-b-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      showCompleted === option.value
                        ? "border-primary/50 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg hover:border-primary/70 hover:shadow-xl"
                        : "border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground shadow-sm hover:border-primary/30 hover:shadow-md"
                    }`}
                    size="sm"
                    variant="outline"
                    onClick={() => setShowCompleted(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Grid */}
      {filteredQuizzes.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Target className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Quiz bulunamadı</h3>
            <p className="text-muted-foreground">
              {quizzes.length === 0
                ? "Henüz quiz oluşturulmamış. İlk quiz'inizi oluşturun."
                : "Arama kriterlerinizi değiştirmeyi deneyin."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} />
          ))}
        </div>
      )}

      {filteredQuizzes.length > 0 && (
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {filteredQuizzes.length} quiz gösteriliyor (toplam {quizzes.length})
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
