import z from "zod";

export const quizRequestSchema = z.object({
  fileId: z.string().min(1, "Dosya seçimi gereklidir"),
  fileName: z.string().optional(),
  endPage: z.number(),
  startPage: z.number(),
});

export const quizResponseSchema = z.object({
  id: z.string(),
  questions: z.array(
    z.object({
      correct_option: z.string(),
      no: z.number(),
      options: z.array(
        z.object({
          label: z.string(),
          text: z.string(),
        }),
      ),
      text: z.string(),
    }),
  ),
  title: z.string(),
});

export const attemptRequestSchema = z.object({
  id: z.string().min(1, "Quiz ID is required"),
  answers: z.array(
    z.object({
      question_no: z.number().min(1, "Question ID is required"),
      selected_option: z.string().min(1, "Selected option is required"),
    }),
  ),
});

export const attemptResponseSchema = z.object({
  attempt_id: z.string(),
  percentage: z.number(),
  score: z.number(),
  total_questions: z.number(),
});

export const attemptsResponseSchema = z.object({
  attempts: z.array(
    z.object({
      completed_at: z.string(),
      id: z.string(),
      percentage: z.number(),
      quiz_id: z.string(),
      quiz_title: z.string(),
      score: z.number(),
      time_spent_seconds: z.number(),
      total_questions: z.number(),
    }),
  ),
  total_count: z.number(),
});

export const submissionDetailsResponseSchema = z.object({
  submission_id: z.string(),
  score: z.number(),
  question_results: z.array(
    z.object({
      text: z.string(),
      user_selected: z.number(),
      correct_index: z.number(),
      is_correct: z.boolean(),
      explanation: z.string(),
    }),
  ),
});

export const quizzesResponseSchema = z.array(
  z.object({
    quizId: z.string(),
    title: z.string(),
    createdAt: z.string(),
  }),
);

export type AttemptRequestData = z.infer<typeof attemptRequestSchema>;
export type QuizRequestData = z.infer<typeof quizRequestSchema>;
export type QuizResponseData = z.infer<typeof quizResponseSchema>;
export type AttemptResponseData = z.infer<typeof attemptResponseSchema>;
export type AttemptsResponseData = z.infer<typeof attemptsResponseSchema>;
export type SubmissionDetailsResponseData = z.infer<typeof submissionDetailsResponseSchema>;
export type QuizzesResponseData = z.infer<typeof quizzesResponseSchema>;
