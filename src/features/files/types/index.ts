import z from "zod";

import {filesResponseSchema} from "../validation";

export type File = z.infer<typeof filesResponseSchema.element>;

export interface FileUploadProgress {
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
  error?: string;
}
