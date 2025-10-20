import {z} from "zod";

import {Note, NoteFormData} from "../types";

export const noteFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be under 100 characters"),
  subject: z.string().min(1, "Please select a subject"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  tags: z.string().optional(),
});

export const subjects = ["all", "Cardiology", "Neurology", "Pharmacology", "Anatomy", "Pathology"];

export const mockNotes: Note[] = [
  {
    id: "1",
    title: "Cardiovascular System Overview",
    content:
      "Detailed notes on heart anatomy, blood circulation, and common cardiovascular diseases...",
    summary:
      "• Heart has 4 chambers: 2 atria and 2 ventricles\n• Blood flows in pulmonary and systemic circuits\n• Common diseases include hypertension, coronary artery disease",
    subject: "Cardiology",
    uploadDate: "2024-01-15",
    fileType: "PDF",
    status: "completed",
    tags: ["anatomy", "physiology", "diseases"],
  },
  {
    id: "2",
    title: "Neurological Pathways",
    content: "Comprehensive study of nervous system pathways and neurotransmitters...",
    summary:
      "• Central nervous system includes brain and spinal cord\n• Peripheral nervous system connects CNS to body\n• Key neurotransmitters: dopamine, serotonin, acetylcholine",
    subject: "Neurology",
    uploadDate: "2024-01-12",
    fileType: "DOCX",
    status: "completed",
    tags: ["neurology", "pathways", "neurotransmitters"],
  },
  {
    id: "3",
    title: "Pharmacology Basics",
    content: "Introduction to drug mechanisms and pharmacokinetics...",
    summary: undefined,
    subject: "Pharmacology",
    uploadDate: "2024-01-10",
    fileType: "PDF",
    status: "processing",
    tags: ["drugs", "mechanisms", "kinetics"],
  },
];

export const filterNotes = (notes: Note[], searchTerm: string, selectedSubject: string): Note[] => {
  return notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });
};

export const processNoteFormData = async (data: NoteFormData): Promise<Note> => {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const newNote: Note = {
    id: `note-${Date.now()}`,
    title: data.title,
    content: data.content,
    subject: data.subject,
    uploadDate: new Date().toISOString().split("T")[0],
    fileType: "TEXT",
    status: "completed",
    tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
    summary: `AI-generated summary for: ${data.title}`,
  };

  return newNote;
};

export const handleFileUpload = async (files: FileList | null): Promise<void> => {
  if (!files) return;

  // Simulate file upload processing
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};
