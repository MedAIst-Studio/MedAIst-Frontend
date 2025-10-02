"use client";

import {BookOpen, Upload} from "lucide-react";
import {useState} from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
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
    <div className="p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-primary" />
              <span>Çalışma Materyalleri Yükle</span>
            </CardTitle>
            <CardDescription>
              PDF, DOCX veya metin dosyalarını yükleyin ve Quiz oluşturma, özetleme ve daha fazlası
              için notlar oluşturun
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload onFileUpload={handleFileUpload} />
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Manual Note Creation */}
        <NoteForm isSubmitting={isProcessingNote} onSubmit={handleNoteSubmit} />

        <Separator className="my-8" />

        {/* Notes List */}
        <div className="text-center mb-6">
          <BookOpen className="mx-auto mb-2 h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold">Çalışma Notlarınız</h2>
          <p className="text-muted-foreground">
            Yüklediğiniz notlar arasında gezinmek ve arama yapmak için aşağıdaki filtreleri
            kullanın.
          </p>
        </div>

        <NotesList loading={loading} notes={notes} onDeleteNote={deleteNote} />
      </div>
    </div>
  );
}
