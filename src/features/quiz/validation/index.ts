import z from "zod";

export const quizRequestSchema = z.object({
  file_id: z.string().min(1, "File ID is required"),
  topic: z.string().min(1, "Topic is required"),
  difficulty: z.enum(["easy", "medium", "hard"]),
});

export const submissionRequestSchema = z.object({
  quiz_id: z.string().min(1, "Quiz ID is required"),
  answers: z.array(
    z.object({
      question_id: z.string().min(1, "Question ID is required"),
      selected_index: z
        .number()
        .min(0, "Selected index must be at least 0")
        .max(3, "Selected index must be at most 3"),
    }),
  ),
});

export const submissionResponseSchema = z.object({
  score: z.number(),
  summary: z.string(),
  results_by_question: z.array(
    z.object({
      question_id: z.string(),
      user_selected: z.number(),
      correct_index: z.number(),
      explanation: z.string(),
    }),
  ),
});

export const quizResponseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  questions: z.array(
    z.object({
      text: z.string().min(3, "Question must be at least 3 characters long"),
      options: z.array(z.string().min(3, "Option must be at least 3 characters long")),
      correct_index: z
        .number()
        .min(0, "Correct index must be at least 0")
        .max(3, "Correct index must be at most 3"),
      explanation: z.string().min(3, "Explanation must be at least 3 characters long"),
    }),
  ),
});

export const submissionsResponseSchema = z.array(
  z.object({
    id: z.uuid(),
    quiz_title: z.string(),
    score: z.number(),
    attempt_date: z.string(),
  }),
);

export const submissionDetailsResponseSchema = z.object({
  submission_id: z.uuid(),
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
    id: z.string(),
    title: z.string(),
  }),
);

export type SubmissionRequestData = z.infer<typeof submissionRequestSchema>;
export type QuizRequestData = z.infer<typeof quizRequestSchema>;
