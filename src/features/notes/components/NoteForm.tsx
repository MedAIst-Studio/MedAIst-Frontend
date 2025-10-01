"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {BookOpen, Plus} from "lucide-react";
import {useForm} from "react-hook-form";

import {DynamicFormField} from "@/components/shared/DynamicFormField";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>Create New Note</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <DynamicFormField
              control={form.control}
              description="Give your note a descriptive title"
              label="Title"
              name="title"
              placeholder="Enter note title..."
              type="text"
            />

            <DynamicFormField
              control={form.control}
              description="Select the medical subject"
              label="Subject"
              name="subject"
              options={subjects
                .filter((s) => s !== "all")
                .map((subject) => ({
                  label: subject,
                  value: subject,
                }))}
              placeholder="Select subject..."
              type="select"
            />

            <DynamicFormField
              control={form.control}
              description="Write your detailed notes here"
              label="Content"
              name="content"
              placeholder="Enter your note content..."
              rows={8}
              type="textarea"
            />

            <DynamicFormField
              control={form.control}
              description="Add tags separated by commas (optional)"
              label="Tags"
              name="tags"
              placeholder="cardiology, anatomy, physiology..."
              type="text"
            />

            <Button className="w-full" disabled={isSubmitting} type="submit">
              <Plus className="mr-2 h-4 w-4" />
              {isSubmitting ? "Creating Note..." : "Create Note"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
