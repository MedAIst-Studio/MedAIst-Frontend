import {apiClient} from "@/lib/api";

import {
  AttemptRequestData,
  attemptRequestSchema,
  attemptResponseSchema,
  attemptsResponseSchema,
  QuizRequestData,
  quizRequestSchema,
  quizResponseSchema,
  quizzesResponseSchema,
  submissionDetailsResponseSchema,
} from "../validation";

export const quizAPI = {
  createQuiz: async (data: QuizRequestData) => {
    const {error} = await apiClient.post("/quizzes", data, {
      request: quizRequestSchema,
    });

    return {error};
  },

  getQuizzes: async () => {
    const {error, data} = await apiClient.get("/quizzes", {
      response: quizzesResponseSchema,
    });

    return {error, data};
  },

  getQuizById: async (id: string) => {
    const {error, data} = await apiClient.get("/quizzes/" + id, {
      response: quizResponseSchema,
    });

    return {error, data};
  },

  submitQuiz: async (requestData: AttemptRequestData) => {
    const {error, data} = await apiClient.post(`/quizzes/${requestData.id}/solve`, requestData, {
      request: attemptRequestSchema,
      response: attemptResponseSchema,
    });

    return {error, data};
  },

  getAttemptDetails: async (id: string) => {
    const {error, data} = await apiClient.get("/quizzes/attempts/" + id, {
      response: submissionDetailsResponseSchema,
    });

    return {error, data};
  },

  getAttempts: async () => {
    const {error, data} = await apiClient.get("/quizzes/attempts", {
      response: attemptsResponseSchema,
    });

    return {error, data};
  },
};
