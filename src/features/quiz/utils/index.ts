import {Brain, Eye, Heart, Stethoscope} from "lucide-react";
import {z} from "zod";

import {Document, Question, Quiz, QuizFormData} from "../types";

export const quizFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be under 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  category: z.string().min(1, "Please select a category"),
  difficulty: z.enum(["Başlangıç", "Orta", "İleri"]),
  questionCount: z.number().min(5, "Minimum 5 questions").max(50, "Maximum 50 questions"),
  documentId: z.number().min(1, "Please select a document"),
});

export const mockQuizzes: Quiz[] = [
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

export const mockDocuments: Document[] = [
  {id: 1, name: "Kardiyoloji Ders Notları.pdf", pages: 45, uploaded: "2 gün önce"},
  {id: 2, name: "İç Hastalıkları Vaka Sunumları.docx", pages: 28, uploaded: "1 hafta önce"},
  {id: 3, name: "Anatomi Atlas Bölüm 3.pdf", pages: 67, uploaded: "3 gün önce"},
];

export const mockQuestion: Question = {
  id: 1,
  question: "Miyokard infarktüsünün en yaygın nedeni nedir?",
  options: ["Koroner arter spazmı", "Koroner arter trombozu", "Aritmi", "Hipertansiyon"],
  correctAnswer: 1,
  explanation:
    "Miyokard infarktüsünün en yaygın nedeni koroner arterlerde oluşan trombüstür. Bu genellikle aterosklerotik plak rüptürü sonucu gelişir.",
};

export const categories = ["Tümü", "Kardiyoloji", "İç Hastalıkları", "Oftalmoloji", "Nöroloji"];
export const difficulties = ["Tümü", "Başlangıç", "Orta", "İleri"];

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Başlangıç":
      return "bg-green-100 text-green-800 border-green-200";
    case "Orta":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "İleri":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-600";

  return "text-red-600";
};

export const filterQuizzes = (
  quizzes: Quiz[],
  category: string,
  difficulty: string,
  completed: boolean | null,
) => {
  return quizzes.filter((quiz) => {
    const matchesCategory = category === "Tümü" || quiz.category === category;
    const matchesDifficulty = difficulty === "Tümü" || quiz.difficulty === difficulty;
    const matchesCompleted = completed === null || quiz.completed === completed;

    return matchesCategory && matchesDifficulty && matchesCompleted;
  });
};

export const calculateQuizProgress = (currentIndex: number, totalQuestions: number) => {
  return ((currentIndex + 1) / totalQuestions) * 100;
};

export const calculateScore = (correctAnswers: number, totalQuestions: number) => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

export const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes} dk`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}s ${remainingMinutes}dk`;
};

export const processQuizFormData = async (data: QuizFormData): Promise<Quiz> => {
  // Simulate API processing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newQuiz: Quiz = {
    id: Date.now(),
    title: data.title,
    description: data.description,
    category: data.category,
    difficulty: data.difficulty,
    questions: data.questionCount,
    duration: Math.ceil(data.questionCount * 1.5), // 1.5 minutes per question
    completed: false,
    score: null,
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
  };

  return newQuiz;
};
