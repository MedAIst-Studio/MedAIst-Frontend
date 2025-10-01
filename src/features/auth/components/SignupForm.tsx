"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight, ChevronLeft, Eye, EyeOff, UserPlus} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
            <ChevronLeft className="mr-1 h-4 w-4" />
            Geri Dön
          </Button>

          {/* Signup Form */}
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-400 backdrop-blur-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <DynamicFormField
                  control={form.control}
                  disabled={isLoading}
                  label="Ad"
                  name="firstName"
                  placeholder="Adınız"
                  type="text"
                />
                <DynamicFormField
                  control={form.control}
                  disabled={isLoading}
                  label="Soyad"
                  name="lastName"
                  placeholder="Soyadınız"
                  type="text"
                />
              </div>

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
                          placeholder="Şifrenizi oluşturun"
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-slate-200">Şifre Onayı</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Şifrenizi tekrar giriniz"
                          type={showConfirmPassword ? "text" : "password"}
                        />
                        <button
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
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

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({field}) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <input
                        checked={field.value}
                        className="rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-400 focus:ring-offset-0 mt-1"
                        disabled={isLoading}
                        type="checkbox"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-slate-800">
                        Kullanım koşullarını ve gizlilik politikasını okudum, kabul ediyorum.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
