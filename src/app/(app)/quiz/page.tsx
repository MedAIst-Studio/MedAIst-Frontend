"use client";

import type {Quiz} from "@/features/quiz/types";

import {Brain, Plus, Target, Trophy} from "lucide-react";
import {useState} from "react";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {QuizList} from "@/features/quiz/components/QuizList";
import {useQuizzes} from "@/features/quiz/hooks";

export default function QuizPage() {
  const [activeTab, setActiveTab] = useState("available");
  const {quizzes, loading} = useQuizzes();

  return (
    <MaxWidthWrapper className="py-10 px-4 md:px-0">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Quiz Merkezi</h1>
        <p className="text-muted-foreground text-sm">
          Bilgilerinizi test edin ve gelişiminizi takip edin
        </p>
      </div>

      <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full mb-6">
          <TabsTrigger className="flex items-center gap-2" value="available">
            <Target className="h-4 w-4" />
            <span>Mevcut</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="completed">
            <Trophy className="h-4 w-4" />
            <span>Tamamlanan</span>
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2" value="progress">
            <Brain className="h-4 w-4" />
            <span>İstatistik</span>
          </TabsTrigger>
        </TabsList>

        <div className="mb-4">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Yeni Quiz Oluştur</span>
          </Button>
        </div>

        <TabsContent value="available">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => !quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent value="completed">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent value="progress">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-b-4 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">{quizzes.length}</div>
              <div className="text-sm text-gray-600">Toplam Quiz</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-b-4 border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {quizzes.filter((quiz: Quiz) => quiz.completed).length}
              </div>
              <div className="text-sm text-gray-600">Tamamlanan</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-b-4 border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {quizzes.filter((quiz: Quiz) => quiz.completed).length > 0
                  ? Math.round(
                      quizzes
                        .filter((quiz: Quiz) => quiz.completed)
                        .reduce((acc: number, quiz: Quiz) => acc + (quiz.score || 0), 0) /
                        quizzes.filter((quiz: Quiz) => quiz.completed).length,
                    )
                  : 0}
                %
              </div>
              <div className="text-sm text-gray-600">Ortalama Skor</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  );
}
