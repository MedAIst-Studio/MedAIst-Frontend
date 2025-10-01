"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {FileText, Plus} from "lucide-react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import {type Document, type QuizFormData} from "../types";
import {categories, difficulties, quizFormSchema} from "../utils";

interface QuizFormProps {
  documents: Document[];
  onSubmit: (data: QuizFormData) => void;
  isSubmitting?: boolean;
}

export function QuizForm({documents, onSubmit, isSubmitting = false}: QuizFormProps) {
  const form = useForm<QuizFormData>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      difficulty: "Başlangıç",
      questionCount: 10,
      documentId: 0,
    },
  });

  const handleSubmit = (data: QuizFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Card className="border-b-4 border-primary/20 bg-gradient-to-br from-background via-background/95 to-background/90 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5 text-primary" />
          <span>Yeni Quiz Oluştur</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Yüklediğiniz belgelerden birini seçin ve AI otomatik olarak quiz soruları oluştursun.
          </p>

          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <DynamicFormField
              control={form.control}
              description="Quiz'inize açıklayıcı bir başlık verin"
              label="Quiz Başlığı"
              name="title"
              placeholder="Quiz başlığını girin..."
              type="text"
            />

            <DynamicFormField
              control={form.control}
              description="Quiz'iniz hakkında kısa bir açıklama yazın"
              label="Açıklama"
              name="description"
              placeholder="Quiz açıklamasını girin..."
              rows={3}
              type="textarea"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <DynamicFormField
                control={form.control}
                description="Quiz kategorisini seçin"
                label="Kategori"
                name="category"
                options={categories
                  .filter((c) => c !== "Tümü")
                  .map((category) => ({
                    label: category,
                    value: category,
                  }))}
                placeholder="Kategori seçin..."
                type="select"
              />

              <DynamicFormField
                control={form.control}
                description="Quiz zorluk seviyesini belirleyin"
                label="Zorluk Seviyesi"
                name="difficulty"
                options={difficulties
                  .filter((d) => d !== "Tümü")
                  .map((difficulty) => ({
                    label: difficulty,
                    value: difficulty,
                  }))}
                type="select"
              />
            </div>

            <DynamicFormField
              control={form.control}
              description="Oluşturulacak soru sayısını belirleyin (5-50 arası)"
              label="Soru Sayısı"
              name="questionCount"
              placeholder="10"
              type="number"
            />

            <div>
              <label className="mb-2 block text-sm font-medium">Kaynak Belge</label>
              <p className="mb-3 text-xs text-muted-foreground">
                Quiz sorularının oluşturulacağı belgeyi seçin
              </p>
              <div className="space-y-2">
                {documents.length === 0 ? (
                  <Card>
                    <CardContent className="p-4 text-center">
                      <FileText className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Henüz belge yüklenmedi. Quiz oluşturmak için önce belge yükleyin.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  documents.map((doc) => (
                    <Card
                      key={doc.id}
                      className={`cursor-pointer border-2 transition-all duration-200 ${
                        form.watch("documentId") === doc.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => form.setValue("documentId", doc.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.pages} sayfa • {doc.uploaded}
                            </p>
                          </div>
                          {form.watch("documentId") === doc.id && (
                            <div className="h-4 w-4 rounded-full bg-primary" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>

            <Button
              className="w-full border-b-4 border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl"
              disabled={isSubmitting || documents.length === 0}
              type="submit"
            >
              <Plus className="mr-2 h-4 w-4" />
              {isSubmitting ? "Quiz Oluşturuluyor..." : "Quiz Oluştur"}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
