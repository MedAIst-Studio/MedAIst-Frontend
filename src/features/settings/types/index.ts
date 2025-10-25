export interface ProfileSettings {
  username: string;
  email: string;
}

export interface AppearanceSettings {
  darkMode: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange?: Date;
}

export interface SubscriptionSettings {
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd: boolean;
  usageQuota: UsageQuota;
  paymentMethod?: PaymentMethod;
}

export interface SettingsState {
  profile: ProfileSettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
  subscription: SubscriptionSettings;
}

export interface SettingsFormProps {
  onSave?: () => void;
  className?: string;
}

export interface SettingsTabProps {
  className?: string;
}

// Subscription related types
export type SubscriptionPlan = "free" | "student" | "premium" | "pro";

export type SubscriptionStatus = "active" | "canceled" | "past_due" | "unpaid" | "trialing";

export interface UsageQuota {
  aiQueries: {
    used: number;
    limit: number;
  };
  quizzes: {
    used: number;
    limit: number;
  };
  notes: {
    used: number;
    limit: number;
  };
  storage: {
    used: number; // in MB
    limit: number; // in MB
  };
}

export interface PaymentMethod {
  id: string;
  type: "card" | "paypal" | "bank_transfer";
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export interface PlanFeature {
  name: string;
  description: string;
  included: boolean;
  limit?: number;
}

export interface SubscriptionPlanDetails {
  id: SubscriptionPlan;
  name: string;
  price: number;
  currency: string;
  interval: "month" | "year";
  features: PlanFeature[];
  popular?: boolean;
  description: string;
}
