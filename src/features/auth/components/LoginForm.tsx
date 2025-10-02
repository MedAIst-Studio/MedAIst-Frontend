"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight, ChevronLeft, Mail} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";

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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-600 font-medium">veya</span>
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

              <DynamicFormField
                control={form.control}
                disabled={isLoading}
                label="Şifre"
                name="password"
                placeholder="Şifreniz"
                type="password"
              />

              <div className="flex items-center justify-end">
                <Link href="/forgot-password">
                  <Button
                    className="px-0 font-normal text-sm text-blue-400 hover:text-blue-300"
                    variant="link"
                  >
                    Şifremi unuttum
                  </Button>
                </Link>
              </div>

              <Button className="w-full" type="submit">
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
                {!isLoading && <ArrowRight />}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
