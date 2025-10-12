import {useCallback, useState} from "react";

import {SubscriptionPlan, SubscriptionSettings} from "../types";

const initialSubscriptionState: SubscriptionSettings = {
  plan: "free",
  status: "active",
  currentPeriodEnd: undefined,
  cancelAtPeriodEnd: false,
  usageQuota: {
    aiQueries: {used: 45, limit: 100},
    quizzes: {used: 12, limit: 50},
    notes: {used: 8, limit: 20},
    storage: {used: 125, limit: 500},
  },
  paymentMethod: undefined,
};

export const useSubscriptionSettings = () => {
  const [settings, setSettings] = useState<SubscriptionSettings>(initialSubscriptionState);
  const [isLoading, setIsLoading] = useState(false);

  const upgradePlan = useCallback(async (newPlan: SubscriptionPlan) => {
    setIsLoading(true);
    try {
      // API call to upgrade plan
      // await api.upgradePlan(newPlan);
      setSettings((prev) => ({...prev, plan: newPlan}));
    } catch (error) {
      throw new Error("Failed to upgrade plan");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancelSubscription = useCallback(async () => {
    setIsLoading(true);
    try {
      // API call to cancel subscription
      // await api.cancelSubscription();
      setSettings((prev) => ({...prev, cancelAtPeriodEnd: true}));
    } catch (error) {
      throw new Error("Failed to cancel subscription");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reactivateSubscription = useCallback(async () => {
    setIsLoading(true);
    try {
      // API call to reactivate subscription
      // await api.reactivateSubscription();
      setSettings((prev) => ({...prev, cancelAtPeriodEnd: false}));
    } catch (error) {
      throw new Error("Failed to reactivate subscription");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    settings,
    isLoading,
    upgradePlan,
    cancelSubscription,
    reactivateSubscription,
  };
};
