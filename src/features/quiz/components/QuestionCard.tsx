import {Check} from "lucide-react";
import React from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";

interface QuestionCardProps {
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <Card className="w-full shadow-md border-border/40">
      <CardHeader>
        <CardTitle className="text-xl font-semibold leading-relaxed">{question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option, index) => (
          <Button
            key={index}
            className={cn(
              "w-full justify-start text-left h-auto py-4 px-4 whitespace-normal",
              selectedOption === index
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground",
            )}
            variant={selectedOption === index ? "default" : "outline"}
            onClick={() => onSelectOption(index)}
          >
            <div className="flex items-center w-full">
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mr-3 transition-colors font-semibold text-sm",
                  selectedOption === index
                    ? "border-primary-foreground bg-primary-foreground text-primary"
                    : "border-muted-foreground/30 text-muted-foreground",
                )}
              >
                {selectedOption === index ? <Check className="w-5 h-5" /> : option.label}
              </div>
              <span className="text-base font-medium leading-snug">{option.text}</span>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};
