import {
  quizResponseSchema,
  quizzesResponseSchema,
  submissionDetailsResponseSchema,
  SubmissionRequestData,
  submissionResponseSchema,
  submissionsResponseSchema,
} from "../validation";

// Mock Data Store
const quizzes = [
  {
    id: "1",
    title: "Cardiology Fundamentals: ECG Interpretation",
    questions: [
      {
        text: "A 65-year-old male presents with chest pain. His ECG shows ST-segment elevation in leads II, III, and aVF. Which coronary artery is most likely occluded?",
        options: [
          "Left Anterior Descending (LAD)",
          "Right Coronary Artery (RCA)",
          "Left Circumflex Artery (LCx)",
          "Left Main Coronary Artery (LMCA)",
        ],
        correct_index: 1,
        explanation:
          "ST-elevation in leads II, III, and aVF indicates an inferior wall myocardial infarction, which is most commonly caused by occlusion of the Right Coronary Artery (RCA).",
      },
      {
        text: "Which of the following ECG findings is most characteristic of hyperkalemia?",
        options: ["Peaked T waves", "U waves", "ST depression", "Prolonged QT interval"],
        correct_index: 0,
        explanation:
          "Peaked T waves are the earliest and most characteristic ECG finding in hyperkalemia. As potassium levels rise, the QRS complex may widen.",
      },
      {
        text: "A patient's ECG shows a 'sawtooth' pattern in lead II. What is the most likely diagnosis?",
        options: [
          "Atrial Fibrillation",
          "Atrial Flutter",
          "Ventricular Tachycardia",
          "Supraventricular Tachycardia",
        ],
        correct_index: 1,
        explanation:
          "Atrial Flutter is characterized by a 'sawtooth' pattern of F waves, typically best seen in the inferior leads (II, III, aVF).",
      },
      {
        text: "What is the normal duration of the PR interval?",
        options: [
          "0.08 - 0.12 seconds",
          "0.12 - 0.20 seconds",
          "0.20 - 0.40 seconds",
          "0.04 - 0.08 seconds",
        ],
        correct_index: 1,
        explanation:
          "The normal PR interval ranges from 0.12 to 0.20 seconds (3 to 5 small squares). A prolonged PR interval suggests AV block.",
      },
    ],
  },
  {
    id: "2",
    title: "Clinical Anatomy: Upper Limb",
    questions: [
      {
        text: "Which nerve is most likely injured in a fracture of the surgical neck of the humerus?",
        options: ["Radial Nerve", "Axillary Nerve", "Ulnar Nerve", "Median Nerve"],
        correct_index: 1,
        explanation:
          "The Axillary nerve winds around the surgical neck of the humerus and is at risk of injury during fractures of this region.",
      },
      {
        text: "Winging of the scapula is caused by injury to which nerve?",
        options: [
          "Long Thoracic Nerve",
          "Dorsal Scapular Nerve",
          "Suprascapular Nerve",
          "Thoracodorsal Nerve",
        ],
        correct_index: 0,
        explanation:
          "Injury to the Long Thoracic Nerve results in paralysis of the serratus anterior muscle, leading to winging of the scapula.",
      },
      {
        text: "Which muscle is the primary flexor of the forearm at the elbow joint?",
        options: ["Biceps Brachii", "Brachialis", "Brachioradialis", "Coracobrachialis"],
        correct_index: 1,
        explanation:
          "The Brachialis muscle is the primary flexor of the forearm in all positions. The Biceps Brachii is a powerful supinator and flexor.",
      },
      {
        text: "Carpal Tunnel Syndrome involves compression of which nerve?",
        options: ["Ulnar Nerve", "Radial Nerve", "Median Nerve", "Musculocutaneous Nerve"],
        correct_index: 2,
        explanation:
          "Carpal Tunnel Syndrome is caused by compression of the Median nerve as it travels through the carpal tunnel in the wrist.",
      },
    ],
  },
];

const submissions: any[] = [];

export const quizAPI = {
  getQuizzes: async () => {
    // Return Mock Data.
    // TODO: implement real api
    return quizzesResponseSchema.parse(quizzes.map((q) => ({id: q.id, title: q.title})));
  },

  getQuizById: async (id: string) => {
    // Return Mock Data.
    // TODO: implement real api
    const quiz = quizzes.find((q) => q.id === id);

    if (!quiz) throw new Error("Quiz not found");

    return quizResponseSchema.parse(quiz);
  },

  submitQuiz: async (data: SubmissionRequestData) => {
    // Return Mock Data.
    // TODO: implement real api
    const quiz = quizzes.find((q) => q.id === data.quiz_id);

    if (!quiz) throw new Error("Quiz not found");

    let score = 0;
    const results_by_question = data.answers.map((answer) => {
      const question = quiz.questions.find((_, index) => index.toString() === answer.question_id); // Assuming question_id is index for now based on previous mock
      // Actually, previous mock used index as ID implicitly. Let's stick to that for now or improve.
      // The validation schema expects question_id to be string.
      // In the mock data above, questions don't have explicit IDs.
      // Let's assume the question_id passed in answers corresponds to the index in the questions array.

      const questionIndex = parseInt(answer.question_id);
      const q = quiz.questions[questionIndex];

      if (!q) throw new Error("Question not found");

      const isCorrect = q.correct_index === answer.selected_index;

      if (isCorrect) score += 10; // Arbitrary score per question

      return {
        question_id: answer.question_id,
        user_selected: answer.selected_index,
        correct_index: q.correct_index,
        explanation: q.explanation,
      };
    });

    const submissionId = Math.random().toString(36).substring(7);
    const submission = {
      id: submissionId,
      quiz_id: data.quiz_id,
      quiz_title: quiz.title,
      score,
      attempt_date: new Date().toISOString(),
      results_by_question,
      questions: quiz.questions, // Store questions to reconstruct details later
    };

    submissions.push(submission);

    return submissionResponseSchema.parse({
      score,
      summary: score === quiz.questions.length * 10 ? "Perfect Score!" : "Good effort!",
      results_by_question,
    });
  },

  getSubmissions: async () => {
    // Return Mock Data.
    // TODO: implement real api
    return submissionsResponseSchema.parse(
      submissions.map((s) => ({
        id: s.id,
        quiz_title: s.quiz_title,
        score: s.score,
        attempt_date: s.attempt_date,
      })),
    );
  },

  getSubmissionDetails: async (id: string) => {
    // Return Mock Data.
    // TODO: implement real api
    const submission = submissions.find((s) => s.id === id);

    if (!submission) throw new Error("Submission not found");

    return submissionDetailsResponseSchema.parse({
      submission_id: submission.id,
      score: submission.score,
      question_results: submission.results_by_question.map((r: any) => {
        const q = submission.questions[parseInt(r.question_id)];

        return {
          text: q.text,
          user_selected: r.user_selected,
          correct_index: r.correct_index,
          is_correct: r.user_selected === r.correct_index,
          explanation: r.explanation,
        };
      }),
    });
  },
};
