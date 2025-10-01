"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight, ChevronLeft, Eye, EyeOff, Mail} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import {loginSchema, type LoginFormData} from "../utils/validation";

import {SocialLoginGroup} from "./SocialLoginButton";

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  onSocialLogin: (provider: "google" | "facebook") => void;
  isLoading?: boolean;
  error?: string;
}

export function LoginForm({onSubmit, onSocialLogin, isLoading = false, error}: LoginFormProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSubmit = async (data: LoginFormData) => {
    try {
      await onSubmit(data);
    } catch {
      // Error handling is done by parent component
    }
  };

  return (
    <div className="space-y-6">
      {!showEmailForm ? (
        // Initial View - Social Login + Email Button
        <div className="space-y-4">
          {/* Social Login */}
          <SocialLoginGroup
            isLoading={isLoading}
            onFacebookLogin={() => onSocialLogin("facebook")}
            onGoogleLogin={() => onSocialLogin("google")}
          />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-4 text-slate-300 font-medium">veya</span>
            </div>
          </div>

          {/* Email Continue Button */}
          <Button className="w-full" type="button" onClick={() => setShowEmailForm(true)}>
            <Mail className="mr-2 h-4 w-4" />
            E-posta ile Giriş Yap
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      ) : (
        // Email Form View
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
          {/* Back Button */}
          <Button
            size={"sm"}
            type="button"
            variant="outline"
            onClick={() => setShowEmailForm(false)}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Geri Dön
          </Button>

          {/* Login Form */}
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-400 backdrop-blur-sm">
                  {error}
                </div>
              )}

              <DynamicFormField
                control={form.control}
                disabled={isLoading}
                label="E-posta Adresi"
                name="email"
                placeholder="ornek@email.com"
                type="email"
              />

              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Şifre</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          disabled={isLoading}
                          placeholder="Şifrenizi giriniz"
                          type={showPassword ? "text" : "password"}
                        />
                        <button
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-200 transition-colors" />
                          ) : (
                            <Eye className="h-4 w-4 text-slate-400 hover:text-slate-200 transition-colors" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end">
                <Button
                  className="px-0 font-normal text-sm text-blue-400 hover:text-blue-300"
                  variant="link"
                >
                  Şifremi unuttum
                </Button>
              </div>

              <Button
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
