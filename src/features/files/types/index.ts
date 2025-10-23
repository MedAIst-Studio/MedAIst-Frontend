export interface Document {
  id: string;
  title: string;
  fileName: string;
  uploadDate: string;
  size: string;
  status: "processed" | "processing" | "error";
  messageCount: number;
  fileType?: string;
  tags?: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
  documentId: string;
  sources?: {
    page?: number;
    excerpt: string;
  }[];
}

export interface ChatSession {
  id: string;
  documentId: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface FileUploadProgress {
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
  error?: string;
}

export type DocumentStatus = Document["status"];
export type MessageRole = ChatMessage["role"];

export interface NoteFilters {
  searchTerm: string;
  selectedSubject: string;
}

export interface FileUploadState {
  files: File[];
  isUploading: boolean;
  progress: number;
}
