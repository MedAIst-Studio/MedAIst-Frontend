import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

import {userAPI} from "../api";
import {User} from "../types";

// User details query
export const useUserDetails = () => {
  return useQuery<User>({
    queryKey: ["user", "profile"],
    queryFn: async (): Promise<User> => {
      const {data, error} = await userAPI.getUserDetails();

      if (error) {
        throw new Error(error.message || "Kullanıcı bilgileri alınamadı");
      }

      return data as User;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Update user details mutation
export const useUpdateUserDetails = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (username: string) => {
      const {error} = await userAPI.updateUserDetails(username);

      if (error) {
        throw new Error(error.message || "Kullanıcı bilgileri güncellenemedi");
      }
    },
    onSuccess: () => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({queryKey: ["user", "profile"]});
      toast.success("Profil bilgileri başarıyla güncellendi");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Update password mutation
export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: async ({oldPassword, newPassword}: {oldPassword: string; newPassword: string}) => {
      const {error} = await userAPI.updatePassword(oldPassword, newPassword);

      if (error) {
        throw new Error(error.message || "Şifre değiştirilemedi");
      }
    },
    onSuccess: () => {
      toast.success("Şifre başarıyla değiştirildi");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
