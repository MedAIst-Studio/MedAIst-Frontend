"use client";

import {useEffect, useState} from "react";

import {Question, Quiz, QuizFormData, QuizState} from "../types";
import {mockQuestion, mockQuizzes, processQuizFormData} from "../utils";

export const useQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading quizzes from API
    const loadQuizzes = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setQuizzes(mockQuizzes);
      setLoading(false);
    };

    loadQuizzes();
  }, []);

  const addQuiz = async (quizData: QuizFormData) => {
    const newQuiz = await processQuizFormData(quizData);

    setQuizzes((prev) => [newQuiz, ...prev]);

    return newQuiz;
  };

  const updateQuiz = (quizId: number, updates: Partial<Quiz>) => {
    setQuizzes((prev) => prev.map((quiz) => (quiz.id === quizId ? {...quiz, ...updates} : quiz)));
  };

  const deleteQuiz = (quizId: number) => {
    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId));
  };

  return {
    quizzes,
    loading,
    addQuiz,
    updateQuiz,
    deleteQuiz,
  };
};

export const useQuizSession = (totalQuestions: number = 15) => {
  const [quizState, setQuizState] = useState<QuizState>({
    isActive: false,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showResult: false,
    answers: Array(totalQuestions).fill(null),
    score: 0,
    startTime: null,
  });

  const [currentQuestion] = useState<Question>(mockQuestion);

  const startQuiz = () => {
    setQuizState({
      isActive: true,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showResult: false,
      answers: Array(totalQuestions).fill(null),
      score: 0,
      startTime: new Date().toISOString(),
    });
  };

  const endQuiz = () => {
    setQuizState((prev) => ({
      ...prev,
      isActive: false,
    }));
  };

  const selectAnswer = (answerIndex: number) => {
    if (quizState.showResult) return;

    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
    }));
  };

  const submitAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const newAnswers = [...quizState.answers];

    newAnswers[quizState.currentQuestionIndex] = quizState.selectedAnswer;

    setQuizState((prev) => ({
      ...prev,
      answers: newAnswers,
      showResult: true,
    }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestionIndex < totalQuestions - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
      }));
    } else {
      // Quiz completed
      const correctAnswers = quizState.answers.filter(
        (answer) => answer === currentQuestion.correctAnswer,
      ).length;
      const finalScore = Math.round((correctAnswers / totalQuestions) * 100);

      setQuizState((prev) => ({
        ...prev,
        score: finalScore,
        isActive: false,
      }));
    }
  };

  const resetQuestion = () => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: null,
      showResult: false,
    }));
  };

  const getProgress = () => {
    return ((quizState.currentQuestionIndex + 1) / totalQuestions) * 100;
  };

  return {
    quizState,
    currentQuestion,
    startQuiz,
    endQuiz,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    resetQuestion,
    getProgress,
  };
};
