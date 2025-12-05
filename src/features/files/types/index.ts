export type File = {
  id: string;
  title: string;
  created_at: string;
  size: number;
};

export interface FileUploadProgress {
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
  error?: string;
}
