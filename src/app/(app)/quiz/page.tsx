"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  Heart,
  Play,
  Plus,
  RotateCcw,
  Stethoscope,
  Target,
  Trophy,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import {useState} from "react";

// Mock data - gerçek uygulamada API'den gelecek
const mockQuizzes = [
  {
    id: 1,
    title: "Kardiyoloji Temel Kavramlar",
    description: "Kalp anatomisi ve fizyolojisi üzerine temel sorular",
    category: "Kardiyoloji",
    difficulty: "Başlangıç",
    questions: 15,
    duration: 20,
    completed: true,
    score: 85,
    icon: Heart,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    title: "İç Hastalıkları Tanı Yöntemleri",
    description: "Klinik değerlendirme ve diagnostik yaklaşımlar",
    category: "İç Hastalıkları",
    difficulty: "Orta",
    questions: 25,
    duration: 35,
    completed: false,
    score: null,
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "Göz Hastalıkları Acil Durumlar",
    description: "Oftalmolojik acil durumların yönetimi",
    category: "Oftalmoloji",
    difficulty: "İleri",
    questions: 12,
    duration: 18,
    completed: false,
    score: null,
    icon: Eye,
    color: "bg-green-100 text-green-700",
  },
];

const mockDocuments = [
  {id: 1, name: "Kardiyoloji Ders Notları.pdf", pages: 45, uploaded: "2 gün önce"},
  {id: 2, name: "İç Hastalıkları Vaka Sunumları.docx", pages: 28, uploaded: "1 hafta önce"},
  {id: 3, name: "Anatomi Atlas Bölüm 3.pdf", pages: 67, uploaded: "3 gün önce"},
];

const currentQuestion = {
  id: 1,
  question: "Miyokard infarktüsünün en yaygın nedeni nedir?",
  options: ["Koroner arter spazmı", "Koroner arter trombozu", "Aritmi", "Hipertansiyon"],
  correctAnswer: 1,
  explanation:
    "Miyokard infarktüsünün en yaygın nedeni koroner arterlerde oluşan trombüstür. Bu genellikle aterosklerotik plak rüptürü sonucu gelişir.",
};

export default function QuizPage() {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmitAnswer = () => {
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const startQuiz = () => {
    setIsQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Başlangıç":
        return "bg-green-100 text-green-800";
      case "Orta":
        return "bg-yellow-100 text-yellow-800";
      case "İleri":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isQuizActive) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kardiyoloji Temel Kavramlar</h1>
                <p className="text-gray-600">Soru {currentQuestionIndex + 1} / 15</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsQuizActive(false)}>
              Çıkış
            </Button>
          </div>
          <Progress value={((currentQuestionIndex + 1) / 15) * 100} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50"
                    : showResult
                      ? index === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : index === selectedAnswer
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 bg-gray-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult && index === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-500"
                        : showResult &&
                            index === selectedAnswer &&
                            index !== currentQuestion.correctAnswer
                          ? "border-red-500 bg-red-500"
                          : selectedAnswer === index
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                    }`}
                  >
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                    {showResult &&
                      index === selectedAnswer &&
                      index !== currentQuestion.correctAnswer && (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    {selectedAnswer === index && !showResult && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-gray-900 font-medium">{option}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Result Explanation */}
        {showResult && (
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-blue-100">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Açıklama</h3>
                  <p className="text-blue-800 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!showResult ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="flex-1"
            >
              Cevabı Onayla
            </Button>
          ) : (
            <>
              <Button onClick={handleNextQuestion} className="flex-1">
                Sonraki Soru
              </Button>
              <Button variant="outline" onClick={() => setShowResult(false)}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Tekrar Dene
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Quiz Merkezi</h1>
            <p className="text-gray-600 text-lg">
              Yüklediğiniz belgelerden AI tarafından oluşturulmuş quizlerle bilginizi test edin
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Yeni Quiz Oluştur
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Belgelerinizden Quiz Oluşturun</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Yüklediğiniz belgelerden birini seçin ve AI otomatik olarak quiz soruları
                  oluştursun.
                </p>
                <div className="space-y-2">
                  {mockDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            {doc.pages} sayfa • {doc.uploaded}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Quiz Oluştur
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Toplam Quiz</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-gray-600">Tamamlanan</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.2</p>
                <p className="text-sm text-gray-600">Ort. Süre (dk)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-gray-600">Ortalama Skor</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="available">Mevcut Quizler</TabsTrigger>
          <TabsTrigger value="completed">Tamamlananlar</TabsTrigger>
          <TabsTrigger value="favorites">Favoriler</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes
              .filter((quiz) => !quiz.completed)
              .map((quiz) => {
                const IconComponent = quiz.icon;
                return (
                  <Card key={quiz.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${quiz.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge className={getDifficultyColor(quiz.difficulty)}>
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold mt-3">{quiz.title}</CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">{quiz.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{quiz.questions} soru</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>~{quiz.duration} dk</span>
                          </div>
                        </div>
                        <Separator />
                        <Button className="w-full gap-2" onClick={() => startQuiz()}>
                          <Play className="w-4 h-4" />
                          Quiz&apos;i Başlat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes
              .filter((quiz) => quiz.completed)
              .map((quiz) => {
                const IconComponent = quiz.icon;
                return (
                  <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${quiz.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Tamamlandı
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold mt-3">{quiz.title}</CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">{quiz.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Skorunuz</span>
                          <span className="text-2xl font-bold text-green-600">{quiz.score}%</span>
                        </div>
                        <Progress value={quiz.score} className="h-2" />
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 gap-2">
                            <RotateCcw className="w-4 h-4" />
                            Tekrar Çöz
                          </Button>
                          <Button variant="outline" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          <div className="text-center py-12">
            <div className="p-4 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Henüz favori quiz yok</h3>
            <p className="text-gray-600 mb-6">
              Beğendiğiniz quizleri favorilere ekleyerek kolayca erişebilirsiniz.
            </p>
            <Button variant="outline">Quizlere Göz At</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
