# 🌐 MedAIst API Client Documentation

This document provides detailed instructions on how to use the API Client in the MedAIst Frontend project.

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Basic Usage](#-basic-usage)
3. [HTTP Methods](#-http-methods)
4. [Type Safety & Validation](#-type-safety--validation)
5. [Error Handling](#-error-handling)
6. [Advanced Features](#-advanced-features)
7. [Best Practices](#-best-practices)
8. [Examples](#-examples)

## 🎯 Overview

MedAIst API Client is a modern HTTP client based on axios that provides the following features:

### ✨ Key Features

- **Type Safety**: Full TypeScript support
- **Automatic Validation**: Request/response validation with Zod
- **Error Handling**: Comprehensive error management
- **Retry Logic**: Automatic retry mechanism
- **Logging**: Development and production logging
- **Interceptors**: Request/response interceptors

### 🏗️ Architecture

```typescript
// API Client structure
ApiClient
├── axiosInstance     # Configured Axios instance
├── interceptors      # Request/Response interceptors
├── validation        # Zod schema validation
├── error handling    # Comprehensive error management
├── retry logic       # Automatic retry on failures
└── logging          # Request/response logging
```

## 🚀 Basic Usage

### Import

```typescript
import {apiClient} from "@/lib/api";
```

### Simple GET Request

```typescript
const fetchUsers = async () => {
  const response = await apiClient.get("/users");

  if (response.success) {
    console.log("Users:", response.data);
  } else {
    console.error("Error:", response.error);
  }
};
```

### Response Pattern

```typescript
interface ApiResponse<T> {
  data: T | null;
  error: ApiError | null;
  success: boolean;
}
```

## 📡 HTTP Methods

### 1. GET Requests

```typescript
// Simple GET
const getUser = async (id: string) => {
  return apiClient.get(`/users/${id}`);
};

// With query parameters
const getUsers = async (params: {page?: number; limit?: number}) => {
  return apiClient.get("/users", params);
};

// With response validation
const getUsersValidated = async () => {
  const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  });

  return apiClient.get("/users", {}, z.array(userSchema));
};
```

### 2. POST Requests

```typescript
// Simple POST
const createUser = async (userData: CreateUserRequest) => {
  return apiClient.post("/users", userData);
};

// With validation schemas
const createUserValidated = async (userData: CreateUserRequest) => {
  const requestSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
  });

  const responseSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  });

  return apiClient.post("/users", userData, {
    request: requestSchema,
    response: responseSchema,
  });
};
```

### 3. PUT Requests

```typescript
const updateUser = async (id: string, userData: UpdateUserRequest) => {
  const requestSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
  });

  return apiClient.put(`/users/${id}`, userData, {
    request: requestSchema,
  });
};
```

### 4. PATCH Requests

```typescript
const patchUser = async (id: string, changes: Partial<User>) => {
  return apiClient.patch(`/users/${id}`, changes);
};
```

### 5. DELETE Requests

```typescript
const deleteUser = async (id: string) => {
  return apiClient.delete(`/users/${id}`);
};
```

## 🛡️ Type Safety & Validation

### TypeScript Types

```typescript
// Request/Response types
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

// Typed API call
const createUser = async (userData: CreateUserRequest): Promise<ApiResponse<UserResponse>> => {
  return apiClient.post<UserResponse, CreateUserRequest>("/users", userData);
};
```

### Zod Validation Schemas

```typescript
// Request validation
const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Response validation
const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().datetime(),
});

// Usage
const createUserWithValidation = async (userData: CreateUserRequest) => {
  return apiClient.post("/users", userData, {
    request: createUserSchema,
    response: userResponseSchema,
  });
};
```

### Validation Error Handling

```typescript
const handleValidationErrors = async (userData: CreateUserRequest) => {
  const response = await createUserWithValidation(userData);

  if (!response.success && response.error?.code === "VALIDATION_ERROR") {
    console.error("Validation failed:", response.error.message);
    // Handle validation errors specifically
  }
};
```

## ❌ Error Handling

### Error Types

```typescript
interface ApiError {
  message: string;
  status?: number; // HTTP status code
  code?: string; // Error code (VALIDATION_ERROR, NETWORK_ERROR, etc.)
  details?: any; // Additional error details
  timestamp: Date; // Error timestamp
  requestId?: string; // Request tracking ID
}
```

### Comprehensive Error Handling

```typescript
const handleApiCall = async () => {
  const response = await apiClient.get("/users");

  if (!response.success) {
    const error = response.error!;

    switch (error.code) {
      case "VALIDATION_ERROR":
        console.error("Validation failed:", error.message);
        break;

      case "NETWORK_ERROR":
        console.error("Network error:", error.message);
        break;

      case "API_RESPONSE_ERROR":
        if (error.status === 401) {
          // Handle unauthorized
          redirectToLogin();
        } else if (error.status === 403) {
          // Handle forbidden
          showAccessDenied();
        } else if (error.status === 404) {
          // Handle not found
          showNotFound();
        } else if (error.status >= 500) {
          // Handle server errors
          showServerError();
        }
        break;

      default:
        console.error("Unknown error:", error.message);
    }
  }
};
```

### Error Recovery Patterns

```typescript
// Retry pattern
const fetchWithRetry = async (url: string, maxAttempts = 3) => {
  let attempt = 0;

  while (attempt < maxAttempts) {
    const response = await apiClient.get(url);

    if (response.success) {
      return response;
    }

    // Only retry on network errors or 5xx status codes
    if (response.error?.status && response.error.status < 500) {
      break;
    }

    attempt++;
    if (attempt < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }

  throw new Error("Max retry attempts exceeded");
};
```

## 🔧 Advanced Features

### 1. Custom Headers

```typescript
const apiCallWithAuth = async () => {
  const token = getAuthToken();

  const response = await apiClient.request({
    url: "/protected-endpoint",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Custom-Header": "custom-value",
    },
  });

  return response;
};
```

### 2. Request Interceptors

```typescript
// Automatic auth token addition (already implemented)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### 3. Response Interceptors

```typescript
// Global error handling (already implemented)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Auto logout on unauthorized
      localStorage.removeItem("auth-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
```

### 4. Request Cancellation

```typescript
const useApiCall = () => {
  const [abortController, setAbortController] = useState<AbortController>();

  const makeRequest = async (url: string) => {
    // Cancel previous request
    if (abortController) {
      abortController.abort();
    }

    const newController = new AbortController();
    setAbortController(newController);

    try {
      const response = await apiClient.request({
        url,
        method: "GET",
        signal: newController.signal,
      });

      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request cancelled");
      }
      throw error;
    }
  };

  const cancelRequest = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  return {makeRequest, cancelRequest};
};
```

## 📝 Best Practices

### 1. Feature-Based API Organization

```typescript
// /src/features/auth/api/index.ts
export const authApi = {
  login: (credentials: LoginRequest) =>
    apiClient.post("/auth/login", credentials, {
      request: loginSchema,
      response: authResponseSchema,
    }),

  logout: () => apiClient.post("/auth/logout"),

  refreshToken: (token: string) => apiClient.post("/auth/refresh", {token}),

  getCurrentUser: () => apiClient.get("/auth/me", {}, userSchema),
};

// /src/features/notes/api/index.ts
export const notesApi = {
  getNotes: (params?: NotesQueryParams) => apiClient.get("/notes", params, z.array(noteSchema)),

  createNote: (note: CreateNoteRequest) =>
    apiClient.post("/notes", note, {
      request: createNoteSchema,
      response: noteSchema,
    }),

  updateNote: (id: string, updates: UpdateNoteRequest) =>
    apiClient.put(`/notes/${id}`, updates, {
      request: updateNoteSchema,
      response: noteSchema,
    }),

  deleteNote: (id: string) => apiClient.delete(`/notes/${id}`),
};
```

### 2. Integration with Custom Hooks

```typescript
// useAuth hook
const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials: LoginRequest) => {
    setLoading(true);
    try {
      const response = await authApi.login(credentials);

      if (response.success) {
        setUser(response.data.user);
        localStorage.setItem("auth-token", response.data.token);
        return {success: true};
      } else {
        return {
          success: false,
          error: response.error?.message || "Login failed",
        };
      }
    } finally {
      setLoading(false);
    }
  };

  return {user, login, loading};
};
```

### 3. TanStack Query Integration

```typescript
// React Query with API integration
const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const response = await notesApi.getNotes();
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch notes");
      }
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: notesApi.createNote,
    onSuccess: (response) => {
      if (response.success) {
        // Invalidate notes cache
        queryClient.invalidateQueries({queryKey: ["notes"]});
        toast.success("Note created successfully");
      } else {
        toast.error(response.error?.message || "Failed to create note");
      }
    },
  });
};
```

### 4. Environment-Based Configuration

```typescript
// /src/lib/api-config.ts
const getApiConfig = (): ApiConfig => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return {
    enableValidation: true,
    enableLogging: isDevelopment,
    enableRetry: true,
    maxRetries: isDevelopment ? 1 : 3,
    retryDelay: 1000,
    timeout: isDevelopment ? 30000 : 10000,
  };
};
```

## 🛠️ Examples

### 1. Authentication Flow

```typescript
// Login implementation
const loginUser = async (email: string, password: string) => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  const response = await apiClient.post("/auth/login", {email, password}, {request: loginSchema});

  if (response.success) {
    // Store token
    localStorage.setItem("auth-token", response.data.token);

    // Redirect to dashboard
    router.push("/dashboard");
  } else {
    // Show error message
    setError(response.error?.message || "Login failed");
  }
};
```

### 2. File Upload

```typescript
const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await apiClient.request({
    url: "/upload",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    skipValidation: true, // Skip FormData validation
  });

  return response;
};
```

### 3. Pagination

```typescript
const fetchPaginatedNotes = async (page = 1, limit = 10) => {
  const paginationSchema = z.object({
    data: z.array(noteSchema),
    meta: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  });

  return apiClient.get("/notes", {page, limit}, paginationSchema);
};
```

### 4. Search Implementation

```typescript
const searchNotes = async (query: string, filters?: SearchFilters) => {
  const searchParams = {
    q: query,
    ...filters,
  };

  const response = await apiClient.get("/notes/search", searchParams);

  if (response.success) {
    return response.data;
  } else {
    throw new Error(response.error?.message || "Search failed");
  }
};

// Usage with debouncing
const useNotesSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      searchNotes(debouncedQuery)
        .then(setResults)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [debouncedQuery]);

  return {query, setQuery, results, loading};
};
```

### 5. Real-time Updates

```typescript
// WebSocket integration with API
const useRealtimeNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001/notes");

    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);

      switch (update.type) {
        case "NOTE_CREATED":
          setNotes((prev) => [...prev, update.note]);
          break;
        case "NOTE_UPDATED":
          setNotes((prev) => prev.map((note) => (note.id === update.note.id ? update.note : note)));
          break;
        case "NOTE_DELETED":
          setNotes((prev) => prev.filter((note) => note.id !== update.noteId));
          break;
      }
    };

    return () => ws.close();
  }, []);

  return notes;
};
```

## 🔍 Debugging & Monitoring

### 1. Request/Response Logging

```typescript
// Automatic logging in development environment
// Only error logging in production

// Manual logging
const debugApiCall = async () => {
  console.time("API Call");

  const response = await apiClient.get("/users");

  console.timeEnd("API Call");
  console.log("Response:", response);

  return response;
};
```

### 2. Performance Monitoring

```typescript
const monitorApiPerformance = () => {
  let requestCount = 0;
  let totalTime = 0;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name.includes("api-call")) {
        requestCount++;
        totalTime += entry.duration;

        console.log(
          `API Performance: ${requestCount} requests, avg: ${totalTime / requestCount}ms`,
        );
      }
    });
  });

  observer.observe({entryTypes: ["measure"]});
};
```

## 🎯 Conclusion

MedAIst API Client is a powerful HTTP client that provides all the features needed for modern web applications. With its focus on type safety, validation, error handling, and developer experience, it enables you to build production-ready applications.

### Key Points:

- **Always use type safety**
- **Define validation schemas**
- **Don't neglect error handling**
- **Adopt feature-based API organization**
- **Use custom hooks for API integration**
- **Configure based on environment**

This documentation contains all the information needed to effectively use the API Client. For questions, please contact the development team.
