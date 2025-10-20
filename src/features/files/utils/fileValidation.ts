/**
 * File validation utilities
 * Handles file size, type, and count validation
 */

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FileValidationOptions {
  maxFileSize?: number; // in bytes
  maxFiles?: number;
  acceptedTypes?: string[]; // e.g., ['.pdf', '.docx']
}

const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const DEFAULT_MAX_FILES = 10;
const DEFAULT_ACCEPTED_TYPES = [".pdf"];

/**
 * Validates a single file against size and type constraints
 */
export const validateFile = (
  file: File,
  options: FileValidationOptions = {},
): FileValidationResult => {
  const {maxFileSize = DEFAULT_MAX_FILE_SIZE, acceptedTypes = DEFAULT_ACCEPTED_TYPES} = options;

  // Check file size
  if (file.size > maxFileSize) {
    return {
      isValid: false,
      error: `Dosya boyutu ${formatFileSize(maxFileSize)} limitini aşıyor. Dosya: ${formatFileSize(file.size)}`,
    };
  }

  // Check file type
  const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
  const isAcceptedType = acceptedTypes.some((type) => fileExtension.includes(type.toLowerCase()));

  if (!isAcceptedType) {
    return {
      isValid: false,
      error: `Geçersiz dosya türü. Kabul edilen türler: ${acceptedTypes.join(", ")}`,
    };
  }

  return {isValid: true};
};

/**
 * Validates a FileList against all constraints
 */
export const validateFiles = (
  files: FileList | File[],
  options: FileValidationOptions = {},
): FileValidationResult => {
  const {maxFiles = DEFAULT_MAX_FILES} = options;

  const fileArray = Array.from(files);

  // Check number of files
  if (fileArray.length > maxFiles) {
    return {
      isValid: false,
      error: `En fazla ${maxFiles} dosya yükleyebilirsiniz. Seçilen: ${fileArray.length}`,
    };
  }

  // Validate each file
  for (const file of fileArray) {
    const result = validateFile(file, options);

    if (!result.isValid) {
      return result;
    }
  }

  return {isValid: true};
};

/**
 * Formats bytes to human-readable file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

/**
 * Gets file extension from filename
 */
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};

/**
 * Checks if file is a valid PDF
 */
export const isPdfFile = (file: File): boolean => {
  return file.type === "application/pdf" || getFileExtension(file.name).toLowerCase() === "pdf";
};

/**
 * Gets MIME type from file extension
 */
export const getMimeType = (extension: string): string => {
  const mimeTypes: Record<string, string> = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    txt: "text/plain",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
  };

  return mimeTypes[extension.toLowerCase()] || "application/octet-stream";
};
