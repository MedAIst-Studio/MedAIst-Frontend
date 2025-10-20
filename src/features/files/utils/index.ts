import {Note} from "../types";

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
