"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {Plus} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFiles} from "@/features/files/hooks";
import DynamicFormField from "@/components/shared/DynamicFormField";

import {useCreateQuiz} from "../hooks/useQueries";
import {QuizRequestData, quizRequestSchema} from "../validation";

export function CreateQuizDialog() {
  const [open, setOpen] = useState(false);
  const {data: files, isLoading: filesLoading} = useFiles();
  const createQuizMutation = useCreateQuiz();

  const form = useForm<QuizRequestData>({
    resolver: zodResolver(quizRequestSchema),
    defaultValues: {
      fileId: "",
      fileName: "",
      startPage: 0,
      endPage: 0,
    },
  });

  const fileOptions =
    files?.map((file) => ({
      label: file.title,
      value: file.id,
    })) || [];

  const onSubmit = async (data: QuizRequestData) => {
    // Close dialog immediately
    setOpen(false);
    form.reset();

    // Show loading toast
    const loadingToast = toast.loading("Quiz Oluşturuluyor...", {
      description: "Yapay zeka sorularınızı hazırlıyor",
    });

    try {
      const result = await createQuizMutation.mutateAsync(data);

      if (result) {
        toast.dismiss(loadingToast);
        toast.success("Quiz Hazır! 🚀", {
          description: `Quiz başarıyla oluşturuldu. Hemen çözmeye başlamak ister misiniz?`,
          duration: 8000,
          /* action: {
            label: "Quiz'i Başlat",
            onClick: () => (window.location.href = `/quiz/${result.id}`),
        }, */
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Hata", {
        description: "Quiz oluşturulurken bir hata oluştu.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4" />
          Quiz Oluştur
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Yeni Quiz Oluştur</DialogTitle>
          <DialogDescription>Bir dosya seçin ve quiz parametrelerini belirleyin.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <DynamicFormField
              control={form.control}
              description="Quiz için özel bir isim belirleyin"
              label="Quiz Adı (Opsiyonel)"
              name="fileName"
              placeholder="Örn: Vize Çalışması"
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startPage"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Başlangıç Sayfası</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1"
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endPage"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Bitiş Sayfası</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="10"
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DynamicFormField
              control={form.control}
              description="Quiz oluşturmak için dosya seçin"
              label="Dosya"
              name="fileId"
              options={fileOptions}
              placeholder="Bir dosya seçin..."
              type="select"
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                İptal
              </Button>
              <Button type="submit">Oluştur</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
