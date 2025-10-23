"use client";

import {ArrowRight, Check, Star} from "lucide-react";
import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {PricingToggle} from "./PricingToggle";

interface Plan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  yearlyPeriod: string;
  description: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  recommended: boolean;
}

interface PricingCardsProps {
  plans: Plan[];
}

export function PricingCards({plans}: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20">
      {/* Yearly Toggle */}
      <div className="text-center mb-16">
        <PricingToggle onToggle={setIsYearly} />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.recommended && "border-primary border-b-primary"} `}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary px-4 py-1">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Önerilen
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-8">
              <Badge className="w-fit mx-auto mb-4" variant={plan.badgeVariant}>
                {plan.badge}
              </Badge>

              <CardTitle className="text-xl">{plan.name}</CardTitle>

              <div className="py-4">
                <div className="flex items-center justify-center gap-2">
                  {isYearly && plan.yearlyPrice !== plan.price && (
                    <span className="text-lg text-muted-foreground line-through">{plan.price}</span>
                  )}
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                </div>
                <span className="text-muted-foreground ml-1">
                  {isYearly ? plan.yearlyPeriod : plan.period}
                  {isYearly && plan.yearlyPrice !== plan.price && (
                    <span className="text-xs text-green-600 ml-2 font-medium">(%20 tasarruf)</span>
                  )}
                </span>
              </div>

              <CardDescription className="text-muted-foreground">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button className="w-full" size="lg" variant={plan.buttonVariant}>
                {plan.buttonText}
                <ArrowRight />
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
