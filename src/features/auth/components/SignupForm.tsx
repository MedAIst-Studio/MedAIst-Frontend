"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight, ChevronLeft, UserPlus} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";

import {signupSchema, type SignupFormData} from "../utils/validation";

import {SocialLoginGroup} from "./SocialLoginButton";

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
  onSocialLogin: (provider: "google" | "facebook") => void;
  isLoading?: boolean;
  error?: string;
}

export function SignupForm({onSubmit, onSocialLogin, isLoading = false, error}: SignupFormProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const handleSubmit = async (data: SignupFormData) => {
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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium">veya</span>
            </div>
          </div>

          {/* Email Continue Button */}
          <Button className="w-full" type="button" onClick={() => setShowEmailForm(true)}>
            <UserPlus />
            E-posta ile Hesap Oluştur
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
            <ChevronLeft />
            Geri Dön
          </Button>

          {/* Signup Form */}
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-400 backdrop-blur-sm">
                  {error}
                </div>
              )}

              <DynamicFormField
                control={form.control}
                disabled={isLoading}
                label="Kullanıcı Adı"
                name="username"
                placeholder="Kullanıcı adınız"
                type="text"
              />

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

              <DynamicFormField
                control={form.control}
                disabled={isLoading}
                label="Şifreyi Onayla"
                name="confirmPassword"
                placeholder="Şifreniz"
                type="password"
              />

              <DynamicFormField
                checkboxLabel="Kullanım Koşullarını Kabul Ediyorum"
                control={form.control}
                disabled={isLoading}
                name="agreeToTerms"
                type="checkbox"
              />

              <Button className="w-full" type="submit">
                {isLoading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
                {!isLoading && <ArrowRight />}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
