"use client";

import type {Quiz} from "@/features/quiz/types";

import {Brain, Plus, Target, Trophy} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {QuizList} from "@/features/quiz/components/QuizList";
import {useQuizzes} from "@/features/quiz/hooks";

export default function QuizPage() {
  const [activeTab, setActiveTab] = useState("available");
  const {quizzes, loading} = useQuizzes();

  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 py-4 sm:py-8">
      <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full h-auto gap-1 p-1">
          <TabsTrigger
            className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 text-xs sm:text-sm"
            value="available"
          >
            <Target className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2 mb-1 sm:mb-0" />
            <span className="hidden sm:inline">Mevcut Quizler</span>
            <span className="sm:hidden">Mevcut</span>
          </TabsTrigger>
          <TabsTrigger
            className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 text-xs sm:text-sm"
            value="completed"
          >
            <Trophy className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2 mb-1 sm:mb-0" />
            <span className="hidden sm:inline">Tamamlanan</span>
            <span className="sm:hidden">Biten</span>
          </TabsTrigger>
          <TabsTrigger
            className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 text-xs sm:text-sm"
            value="progress"
          >
            <Brain className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2 mb-1 sm:mb-0" />
            <span className="hidden sm:inline">İlerleme</span>
            <span className="sm:hidden">İstatistik</span>
          </TabsTrigger>
          <Button className="h-full flex flex-col sm:flex-row items-center justify-center p-2 sm:p-3 text-xs sm:text-sm">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2 mb-1 sm:mb-0" />
            <span className="hidden sm:inline">Yeni Quiz</span>
            <span className="sm:hidden">Yeni</span>
          </Button>
        </TabsList>

        <TabsContent className="mt-4 sm:mt-6" value="available">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => !quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent className="mt-4 sm:mt-6" value="completed">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent className="mt-4 sm:mt-6" value="progress">
          <div className="grid gap-4 sm:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border-b-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                <Brain className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                Genel İstatistikler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg border-b-4 border-blue-200">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {quizzes.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Toplam Quiz</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg border-b-4 border-green-200">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {quizzes.filter((quiz: Quiz) => quiz.completed).length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Tamamlanan</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg border-b-4 border-purple-200">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">
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
                  <div className="text-xs sm:text-sm text-gray-600">Ortalama Skor</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl border-b-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                <Trophy className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                Son Başarılar
              </h3>
              <div className="text-sm sm:text-base text-gray-600">
                Yakında daha detaylı istatistikler eklenecek...
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
