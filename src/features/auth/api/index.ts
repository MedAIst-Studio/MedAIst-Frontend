import {apiClient} from "@/lib/api";

import {ForgotPasswordFormData, ResetPasswordFormData} from "../types";
import {LoginFormData, loginSchema, SignupFormData} from "../utils/validation";

const AUTH_PATH = "/auth";

export const AuthAPI = {
  async login(request: LoginFormData) {
    const {data, error, success} = await apiClient.post(`${AUTH_PATH}/login`, request, {
      request: loginSchema,
    });

    return {data, error, success};
  },

  async signup(request: SignupFormData) {
    const {data, error, success} = await apiClient.post(`${AUTH_PATH}/signup`, {
      fullName: `${request.firstName} ${request.lastName}`,
      email: request.email,
      password: request.password,
    });

    return {data, error, success};
  },

  async forgotPassword(data: ForgotPasswordFormData) {
    const {error, success} = await apiClient.post(`${AUTH_PATH}/forgot-password`, data);

    return {error, success};
  },

  async resetPassword(data: ResetPasswordFormData, token: string | null) {
    const {error, success} = await apiClient.post(`${AUTH_PATH}/reset-password`, {data, token});

    return {error, success};
  },

  async verifyEmail(code: string) {
    const {error, success} = await apiClient.post(`${AUTH_PATH}/verify-email`, {code});

    return {error, success};
  },

  async logout() {
    const {error, success} = await apiClient.post(`${AUTH_PATH}/logout`);

    return {error, success};
  },
};
