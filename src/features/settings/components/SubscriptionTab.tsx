"use client";

import {Check, CreditCard, Star, Zap} from "lucide-react";
import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";

import {useSubscriptionSettings} from "../hooks";
import {SettingsTabProps, SubscriptionPlan} from "../types";
import {SUBSCRIPTION_PLANS, formatDate, formatPrice, formatUsagePercentage} from "../utils";

export const SubscriptionTab = ({className}: SettingsTabProps) => {
  const {settings, isLoading, upgradePlan, cancelSubscription, reactivateSubscription} =
    useSubscriptionSettings();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const currentPlan = SUBSCRIPTION_PLANS.find((plan) => plan.id === settings.plan);
  const usageQuota = settings.usageQuota;

  const handleUpgrade = async (planId: SubscriptionPlan) => {
    try {
      await upgradePlan(planId);
      setSelectedPlan(null);
      // Show success message
    } catch (error) {
      // Show error message
    }
  };

  const handleCancel = async () => {
    const confirmed = window.confirm(
      "Aboneliğinizi iptal etmek istediğinizden emin misiniz? Mevcut dönem sonunda erişiminiz sona erecek.",
    );

    if (!confirmed) return;

    try {
      await cancelSubscription();
      // Show success message
    } catch (error) {
      // Show error message
    }
  };

  const handleReactivate = async () => {
    try {
      await reactivateSubscription();
      // Show success message
    } catch (error) {
      // Show error message
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star size={20} />
            Mevcut Planınız
          </CardTitle>
          <CardDescription>Abonelik durumunuz ve kullanım bilgileriniz</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{currentPlan?.name} Plan</h3>
              <p className="text-sm text-gray-500">
                {currentPlan?.price === 0
                  ? "Ücretsiz plan"
                  : `${formatPrice(currentPlan?.price || 0)}/${currentPlan?.interval === "month" ? "ay" : "yıl"}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={settings.status === "active" ? "default" : "destructive"}>
                {settings.status === "active" ? "Aktif" : "Pasif"}
              </Badge>
              {settings.cancelAtPeriodEnd && <Badge variant="outline">İptal Edilecek</Badge>}
            </div>
          </div>

          {settings.currentPeriodEnd && (
            <div className="text-sm text-gray-500">
              <p>
                {settings.cancelAtPeriodEnd ? "Erişim bitiş tarihi" : "Yenileme tarihi"}:{" "}
                {formatDate(settings.currentPeriodEnd)}
              </p>
            </div>
          )}

          {settings.cancelAtPeriodEnd ? (
            <div className="flex gap-2">
              <Button size="sm" onClick={handleReactivate}>
                Aboneliği Yeniden Etkinleştir
              </Button>
            </div>
          ) : settings.plan !== "free" ? (
            <Button size="sm" variant="outline" onClick={handleCancel}>
              Aboneliği İptal Et
            </Button>
          ) : null}
        </CardContent>
      </Card>

      {/* Usage Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap size={20} />
            Kullanım İstatistikleri
          </CardTitle>
          <CardDescription>Bu ayki kullanım miktarlarınız</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI Sorgu</span>
                <span>
                  {usageQuota.aiQueries.used} / {usageQuota.aiQueries.limit}
                </span>
              </div>
              <Progress
                value={formatUsagePercentage(usageQuota.aiQueries.used, usageQuota.aiQueries.limit)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Quiz</span>
                <span>
                  {usageQuota.quizzes.used} / {usageQuota.quizzes.limit}
                </span>
              </div>
              <Progress
                value={formatUsagePercentage(usageQuota.quizzes.used, usageQuota.quizzes.limit)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Notlar</span>
                <span>
                  {usageQuota.notes.used} / {usageQuota.notes.limit}
                </span>
              </div>
              <Progress
                value={formatUsagePercentage(usageQuota.notes.used, usageQuota.notes.limit)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Depolama</span>
                <span>
                  {usageQuota.storage.used} MB / {usageQuota.storage.limit} MB
                </span>
              </div>
              <Progress
                value={formatUsagePercentage(usageQuota.storage.used, usageQuota.storage.limit)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Planları Keşfet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${
                plan.popular
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : settings.plan === plan.id
                    ? "ring-2 ring-green-500 ring-offset-2"
                    : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">Popüler</Badge>
                </div>
              )}
              {settings.plan === plan.id && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-green-500">Mevcut Plan</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{formatPrice(plan.price)}</span>
                  {plan.price > 0 && (
                    <span className="text-sm text-gray-500">
                      /{plan.interval === "month" ? "ay" : "yıl"}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature.description}</span>
                    </div>
                  ))}
                  {plan.features.length > 4 && (
                    <div className="text-xs text-gray-500">
                      +{plan.features.length - 4} özellik daha
                    </div>
                  )}
                </div>

                {settings.plan !== plan.id && (
                  <Button
                    className="w-full"
                    disabled={isLoading}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleUpgrade(plan.id)}
                  >
                    {plan.price === 0 ? "Geçiş Yap" : "Yükselt"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      {settings.paymentMethod && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard size={20} />
              Ödeme Yöntemi
            </CardTitle>
            <CardDescription>Kayıtlı ödeme bilgileriniz</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">
                    {settings.paymentMethod.brand?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-medium">**** **** **** {settings.paymentMethod.last4}</p>
                  <p className="text-sm text-gray-500">
                    {settings.paymentMethod.expiryMonth}/{settings.paymentMethod.expiryYear}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Güncelle
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
