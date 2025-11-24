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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useFiles} from "@/features/files/hooks";

import {useCreateQuiz} from "../hooks/useQueries";
import {QuizRequestData, quizRequestSchema} from "../validation";

export function CreateQuizDialog() {
  const [open, setOpen] = useState(false);
  const {data: files, isLoading: filesLoading} = useFiles();
  const createQuizMutation = useCreateQuiz();

  const form = useForm<QuizRequestData>({
    resolver: zodResolver(quizRequestSchema),
    defaultValues: {
      file_id: "",
      topic: "",
      difficulty: "medium",
    },
  });

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

      toast.dismiss(loadingToast);
      toast.success("Quiz Hazır! 🚀", {
        description: `"${result.title}" başarıyla oluşturuldu. Hemen çözmeye başlamak ister misiniz?`,
        duration: 8000,
        action: {
          label: "Quiz'i Başlat",
          onClick: () => (window.location.href = `/quiz/${result.id}`),
        },
      });
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
            <FormField
              control={form.control}
              name="file_id"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Dosya</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Bir dosya seçin..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filesLoading ? (
                        <div className="p-2 text-sm text-muted-foreground">Yükleniyor...</div>
                      ) : files && files.length > 0 ? (
                        files.map((file) => (
                          <SelectItem key={file.id} value={file.id}>
                            {file.title}
                          </SelectItem>
                        ))
                      ) : (
                        <div className="p-2 text-sm text-muted-foreground">Dosya bulunamadı</div>
                      )}
                    </SelectContent>
                  </Select>
                  <FormDescription>Quiz oluşturmak için dosya seçin</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="topic"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Konu</FormLabel>
                  <FormControl>
                    <Input placeholder="Örn: Kardiyoloji Temelleri" {...field} />
                  </FormControl>
                  <FormDescription>Quiz konusunu belirleyin</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="difficulty"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Zorluk Seviyesi</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Zorluk seçin..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="easy">Kolay</SelectItem>
                      <SelectItem value="medium">Orta</SelectItem>
                      <SelectItem value="hard">Zor</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Soru zorluğunu belirleyin</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
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
