"use client";

import {BookOpen, Upload} from "lucide-react";
import {useState} from "react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
  FileUpload,
  NoteForm,
  NotesList,
  useFileUpload,
  useNotes,
  type NoteFormData,
} from "@/features/notes";

export default function NotesPage() {
  const {notes, loading, addNote, deleteNote} = useNotes();
  const {uploadFiles} = useFileUpload();
  const [isProcessingNote, setIsProcessingNote] = useState(false);

  const handleNoteSubmit = async (data: NoteFormData) => {
    setIsProcessingNote(true);
    try {
      await addNote(data);
    } catch {
      // Handle error appropriately
    } finally {
      setIsProcessingNote(false);
    }
  };

  const handleFileUpload = (files: FileList) => {
    uploadFiles(files);
  };

  return (
    <div className="p-4">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upload Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Upload className="h-4 w-4" />
                Dosya Yükle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload onFileUpload={handleFileUpload} />
            </CardContent>
          </Card>

          {/* Manual Note Creation */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-4 w-4" />
                Yeni Not
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NoteForm isSubmitting={isProcessingNote} onSubmit={handleNoteSubmit} />
            </CardContent>
          </Card>
        </div>

        {/* Notes List */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Çalışma Notlarınız</h2>
          </div>
          <NotesList loading={loading} notes={notes} onDeleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}
