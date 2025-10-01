export interface Note {
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

export interface NoteFormData {
  title: string;
  subject: string;
  content: string;
  tags?: string;
}

export interface NoteFilters {
  searchTerm: string;
  selectedSubject: string;
}

export interface FileUploadState {
  files: File[];
  isUploading: boolean;
  progress: number;
}
