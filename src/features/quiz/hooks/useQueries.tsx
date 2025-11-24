import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

import {quizAPI} from "../api";
import {SubmissionRequestData} from "../validation";

export const useQuizzes = () => {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: quizAPI.getQuizzes,
  });
};

export const useQuiz = (id: string) => {
  return useQuery({
    queryKey: ["quiz", id],
    queryFn: () => quizAPI.getQuizById(id),
    enabled: !!id,
  });
};

export const useSubmitQuiz = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SubmissionRequestData) => quizAPI.submitQuiz(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["submissions"]});
    },
  });
};

export const useSubmissions = () => {
  return useQuery({
    queryKey: ["submissions"],
    queryFn: quizAPI.getSubmissions,
  });
};

export const useSubmissionDetails = (id: string) => {
  return useQuery({
    queryKey: ["submission", id],
    queryFn: () => quizAPI.getSubmissionDetails(id),
    enabled: !!id,
  });
};
