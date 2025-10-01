"use client";

import {Chrome, Facebook} from "lucide-react";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface SocialLoginButtonProps {
  provider: "google" | "facebook";
  onClick: () => void;
  isLoading?: boolean;
  className?: string;
}

const socialProviders = {
  google: {
    name: "Google",
    icon: Chrome,
    iconClassName: "text-blue-600",
    variant: "outline" as const,
  },
  facebook: {
    name: "Facebook",
    icon: Facebook,
    iconClassName: "text-white",
    variant: "default" as const,
  },
};

export function SocialLoginButton({
  provider,
  onClick,
  isLoading = false,
  className,
}: SocialLoginButtonProps) {
  const config = socialProviders[provider];
  const Icon = config.icon;

  return (
    <Button
      className={cn("w-full", className)}
      disabled={isLoading}
      type="button"
      variant={config.variant}
      onClick={onClick}
    >
      <Icon className={cn(config.iconClassName)} />
      {isLoading ? "Bağlanıyor..." : `${config.name} ile devam et`}
    </Button>
  );
}

interface SocialLoginGroupProps {
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
  isLoading?: boolean;
  className?: string;
}

export function SocialLoginGroup({
  onGoogleLogin,
  onFacebookLogin,
  isLoading = false,
  className,
}: SocialLoginGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <SocialLoginButton isLoading={isLoading} provider="google" onClick={onGoogleLogin} />
      <SocialLoginButton isLoading={isLoading} provider="facebook" onClick={onFacebookLogin} />
    </div>
  );
}
