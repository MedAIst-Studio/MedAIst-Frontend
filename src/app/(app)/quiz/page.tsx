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
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="available">
            <Target className="mr-2 h-4 w-4" />
            Mevcut Quizler
          </TabsTrigger>
          <TabsTrigger value="completed">
            <Trophy className="mr-2 h-4 w-4" />
            Tamamlanan
          </TabsTrigger>
          <TabsTrigger value="progress">
            <Brain className="mr-2 h-4 w-4" />
            İlerleme
          </TabsTrigger>
          <Button className="h-full">
            <Plus />
            Yeni Quiz
          </Button>
        </TabsList>

        <TabsContent className="mt-6" value="available">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => !quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent className="mt-6" value="completed">
          <QuizList
            loading={loading}
            quizzes={quizzes.filter((quiz: Quiz) => quiz.completed)}
            onStartQuiz={() => {}}
          />
        </TabsContent>

        <TabsContent className="mt-6" value="progress">
          <div className="grid gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border-b-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="mr-2 h-5 w-5 text-blue-600" />
                Genel İstatistikler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border-b-4 border-blue-200">
                  <div className="text-3xl font-bold text-blue-600">{quizzes.length}</div>
                  <div className="text-sm text-gray-600">Toplam Quiz</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border-b-4 border-green-200">
                  <div className="text-3xl font-bold text-green-600">
                    {quizzes.filter((quiz: Quiz) => quiz.completed).length}
                  </div>
                  <div className="text-sm text-gray-600">Tamamlanan</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border-b-4 border-purple-200">
                  <div className="text-3xl font-bold text-purple-600">
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
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl border-b-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-green-600" />
                Son Başarılar
              </h3>
              <div className="text-gray-600">Yakında daha detaylı istatistikler eklenecek...</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
