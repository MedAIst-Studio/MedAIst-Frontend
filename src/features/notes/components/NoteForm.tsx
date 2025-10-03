"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {Plus} from "lucide-react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";

import {NoteFormData} from "../types";
import {noteFormSchema, subjects} from "../utils";

interface NoteFormProps {
  onSubmit: (data: NoteFormData) => void;
  isSubmitting?: boolean;
}

export function NoteForm({onSubmit, isSubmitting = false}: NoteFormProps) {
  const form = useForm<NoteFormData>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      title: "",
      subject: "",
      content: "",
      tags: "",
    },
  });

  const handleSubmit = (data: NoteFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <DynamicFormField
          control={form.control}
          description="Notunuza kısa bir başlık verin"
          label="Title"
          name="title"
          placeholder="Not başlığını girin..."
          type="text"
        />

        <DynamicFormField
          control={form.control}
          description="Tıbbi konuyu seçin"
          label="Subject"
          name="subject"
          options={subjects
            .filter((s) => s !== "all")
            .map((subject) => ({
              label: subject,
              value: subject,
            }))}
          placeholder="Konu seçin..."
          type="select"
        />

        <Button className="w-full" disabled={isSubmitting} type="submit">
          <Plus className="mr-2 h-4 w-4" />
          {isSubmitting ? "Not Oluşturuluyor..." : "Not Oluştur"}
        </Button>
      </form>
    </Form>
  );
}
