import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

import {clearAuthTokens} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";

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
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

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
      queryClient.invalidateQueries({queryKey: ["user", "profile"]});
      toast.success("Profil bilgileri başarıyla güncellendi");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

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

export const useDeleteAccount = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const {error} = await userAPI.deleteAccount();

      if (error) {
        throw new Error(error.message || "Hesap silinemedi");
      }
    },
    onSuccess: async () => {
      clearAuthTokens();
      await AuthAPI.logout();
      router.push("/login");
      toast.success("Hesap başarıyla silindi");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
