"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {
  AlertCircle,
  Brain,
  Calendar,
  CheckCircle2,
  Download,
  Edit,
  Eye,
  File,
  FileText,
  Loader2,
  Search,
  Sparkles,
  Tag,
  Upload,
} from "lucide-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {DynamicFormField, StandaloneFormField} from "@/components/shared/DynamicFormField";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Form} from "@/components/ui/form";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";

interface Note {
  id: string;
  title: string;
  content: string;
  summary?: string;
  subject: string;
  uploadDate: string;
  fileType: string;
  status: "processing" | "completed" | "failed";
  tags: string[];
}

// Form schema for manual note creation
const noteFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be under 100 characters"),
  subject: z.string().min(1, "Please select a subject"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  tags: z.string().optional(),
});

type NoteFormData = z.infer<typeof noteFormSchema>;

export default function NotesPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [isProcessingNote, setIsProcessingNote] = useState(false);

  // Form setup
  const form = useForm<NoteFormData>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      title: "",
      subject: "",
      content: "",
      tags: "",
    },
  });

  // Mock data - in real app, this would come from API
  const [notes] = useState<Note[]>([
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
  ]);

  const subjects = ["all", "Cardiology", "Neurology", "Pharmacology", "Anatomy", "Pathology"];

  // Form submit handler
  const onSubmitNote = async (data: NoteFormData) => {
    setIsProcessingNote(true);
    try {
      // Simulate API call to create note and generate summary
      console.log("Creating note:", data);

      // Here you would typically:
      // 1. Send data to your API
      // 2. Generate AI summary
      // 3. Update notes list
      // 4. Show success message

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      form.reset();

      // Show success notification (you can add toast here)
      alert("Note created and summary generated successfully!");
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again.");
    } finally {
      setIsProcessingNote(false);
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
    }, 3000);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Upload className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-xl">Upload New Notes</CardTitle>
            </div>
            <CardDescription>
              Upload PDF, DOCX, or text files and get instant AI-powered summaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* File Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center transition-all duration-200 ${
                  dragActive
                    ? "border-primary bg-blue-50"
                    : "border-gray-300 hover:border-primary hover:bg-blue-50/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <File className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Drop files here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Supports PDF, DOCX, TXT files up to 10MB
                    </p>
                  </div>
                  <input
                    multiple
                    accept=".pdf,.docx,.txt"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    onChange={(e) => handleFileUpload(e.target.files)}
                  />
                </div>

                {isUploading && (
                  <div className="absolute inset-0 bg-white/90 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                      <p className="text-sm font-medium">Uploading and processing...</p>
                      <Progress className="w-48 mx-auto" value={65} />
                    </div>
                  </div>
                )}
              </div>

              {/* Manual Text Input Form */}
              <div className="space-y-4">
                <Form {...form}>
                  <form className="space-y-4" onSubmit={form.handleSubmit(onSubmitNote)}>
                    <DynamicFormField
                      required
                      control={form.control}
                      description="Give your note a descriptive title"
                      label="Note Title"
                      name="title"
                      placeholder="e.g., Cardiovascular System - Chapter 5"
                      type="text"
                    />

                    <DynamicFormField
                      required
                      control={form.control}
                      description="Choose the medical subject category"
                      label="Subject"
                      name="subject"
                      options={subjects.slice(1).map((subject) => ({
                        value: subject.toLowerCase(),
                        label: subject,
                      }))}
                      placeholder="Select subject..."
                      type="select"
                    />

                    <DynamicFormField
                      required
                      control={form.control}
                      description="Add your study notes or paste content from other sources"
                      label="Note Content"
                      name="content"
                      placeholder="Paste your notes here for AI summarization..."
                      rows={6}
                      type="textarea"
                    />

                    <DynamicFormField
                      control={form.control}
                      description="Add comma-separated tags to help organize your notes"
                      label="Tags (Optional)"
                      name="tags"
                      placeholder="e.g., anatomy, physiology, cardiology"
                      type="text"
                    />

                    <Button className="w-full" disabled={isProcessingNote} size="lg" type="submit">
                      {isProcessingNote ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Generate Summary
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
                <StandaloneFormField
                  inputClassName="pl-10"
                  label="Search Notes"
                  placeholder="Search notes by title or content..."
                  showLabel={false}
                  type="search"
                  value={searchTerm}
                  onChange={setSearchTerm}
                />
              </div>
              <div className="flex items-center space-x-2">
                <StandaloneFormField
                  className="min-w-[150px]"
                  label="Filter by Subject"
                  options={subjects.map((subject) => ({
                    value: subject,
                    label: subject === "all" ? "All Subjects" : subject,
                  }))}
                  showLabel={false}
                  type="select"
                  value={selectedSubject}
                  onChange={setSelectedSubject}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Card key={note.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {note.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge className="text-xs" variant="secondary">
                        {note.subject}
                      </Badge>
                      <Badge className="text-xs" variant="outline">
                        {note.fileType}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {note.status === "completed" && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                    {note.status === "processing" && (
                      <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                    )}
                    {note.status === "failed" && <AlertCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-2">{note.content}</p>

                {note.summary && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-blue-900">AI Summary</span>
                    </div>
                    <div className="text-sm text-blue-800 whitespace-pre-line">{note.summary}</div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {note.tags.map((tag, index) => (
                    <Badge key={index} className="text-xs" variant="outline">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{note.title}</DialogTitle>
                        <DialogDescription>
                          {note.subject} • Uploaded {new Date(note.uploadDate).toLocaleDateString()}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Original Content:</h4>
                          <div className="bg-gray-50 p-4 rounded-lg text-sm">{note.content}</div>
                        </div>
                        {note.summary && (
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Brain className="w-4 h-4 mr-2 text-blue-500" />
                              AI Summary:
                            </h4>
                            <div className="bg-blue-50 p-4 rounded-lg text-sm whitespace-pre-line border border-blue-200">
                              {note.summary}
                            </div>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button size="icon" variant="outline">
                    <Edit />
                  </Button>

                  {note.summary && (
                    <Button size="icon" variant="outline">
                      <Download />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <Card className="border-0 shadow-lg">
            <CardContent className="py-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
              <p className="text-gray-500">
                {searchTerm || selectedSubject !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Upload your first notes to get started with AI-powered summaries"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
