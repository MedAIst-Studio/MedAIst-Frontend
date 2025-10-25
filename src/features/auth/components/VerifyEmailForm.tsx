"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight, CheckCircle} from "lucide-react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";

import {verifyEmailSchema, type VerifyEmailFormData} from "../utils/validation";

interface VerifyEmailFormProps {
  onSubmit: (data: VerifyEmailFormData) => Promise<void>;
  email?: string;
  isLoading?: boolean;
  error?: string;
  isSuccess?: boolean;
}

export function VerifyEmailForm({
  onSubmit,
  isLoading = false,
  error,
  isSuccess = false,
}: VerifyEmailFormProps) {
  const form = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      code: "",
    },
  });

  const handleSubmit = async (data: VerifyEmailFormData) => {
    try {
      await onSubmit(data);
    } catch {
      // Error handling is done by parent component
    }
  };

  if (isSuccess) {
    return (
      <div className="space-y-6 text-center animate-in fade-in duration-500">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">E-posta Doğrulandı!</h3>
          <p className="text-muted-foreground leading-relaxed">
            E-posta adresiniz başarıyla doğrulandı. Artık tüm özellikleri kullanabilirsiniz.
          </p>
        </div>

        <Button className="w-full" type="button" onClick={() => (window.location.href = "/files")}>
          Uygulama&apos;ya Git
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Form */}
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
            inputClassName="text-center text-lg tracking-wider font-mono"
            label="Doğrulama Kodu"
            name="code"
            placeholder="123456"
            type="text"
          />

          <Button className="w-full" disabled={isLoading} type="submit">
            {isLoading ? "Doğrulanıyor..." : "E-postayı Doğrula"}
            {!isLoading && <ArrowRight />}
          </Button>
        </form>
      </Form>

      <div className="text-center">
        <p className="text-xs text-slate-500">Spam klasörünüzü de kontrol etmeyi unutmayın</p>
      </div>
    </div>
  );
}
