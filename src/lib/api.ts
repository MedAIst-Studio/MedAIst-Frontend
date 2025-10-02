import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import {z} from "zod";

import {logger} from "./logger";
import {ApiConfig, ApiError, ApiRequestConfig, RequestLog, ResponseLog} from "./types";
import {validateApiResponse, ValidationError} from "./validation";

// API Response type for destructuring pattern
export interface ApiResponse<T = any> {
  data: T | null;
  error: ApiError | null;
  success: boolean;
}

const defaultApiConfig: ApiConfig = {
  enableValidation: true,
  enableLogging: process.env.NODE_ENV !== "production",
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000,
  timeout: 10000,
};

const generateRequestId = () => Math.random().toString(36).substring(2, 15);

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: defaultApiConfig.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const createApiError = (error: any, code?: string): ApiError => {
  let message = "Unknown API error";

  if (error?.response?.data) {
    const responseData = error.response.data;

    message =
      responseData.message || responseData.error || responseData.error_description || message;
  } else if (error?.message) {
    message = error.message;
  }

  return {
    message,
    status: error?.response?.status,
    code: code || error?.code || error?.response?.data?.code,
    details: error?.response?.data,
    timestamp: new Date(),
    requestId: error?.config?.requestId,
  };
};

const shouldRetry = (error: AxiosError, config: any): boolean => {
  const retryCount = config.retryCount || 0;
  const maxRetries = config.maxRetries || defaultApiConfig.maxRetries;

  if (retryCount >= maxRetries) return false;

  if (!error.response) return true;
  if (error.response.status >= 500) return true;

  return false;
};

const retryRequest = async (error: AxiosError): Promise<AxiosResponse> => {
  const config = error.config as any;

  config.retryCount = (config.retryCount || 0) + 1;

  await new Promise((resolve) =>
    setTimeout(resolve, defaultApiConfig.retryDelay * config.retryCount),
  );

  logger.info(`Retrying request (attempt ${config.retryCount})`, {
    url: config.url,
    method: config.method,
  });

  return axiosInstance.request(config);
};

axiosInstance.interceptors.request.use(
  (config: any) => {
    const requestId = generateRequestId();

    config.requestId = requestId;
    config.startTime = Date.now();

    if (defaultApiConfig.enableLogging) {
      const requestLog: RequestLog = {
        id: requestId,
        method: (config.method?.toUpperCase() as any) || "GET",
        url: `${config.baseURL}${config.url}`,
        headers: config.headers as Record<string, string>,
        data: config.data,
        timestamp: new Date(),
      };

      logger.debug("API Request", requestLog);
    }

    return config;
  },
  (error: any) => {
    logger.error("Request interceptor error", error);

    return Promise.reject(createApiError(error, "REQUEST_INTERCEPTOR_ERROR"));
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as any;
    const duration = config.startTime ? Date.now() - config.startTime : 0;

    if (defaultApiConfig.enableLogging) {
      const responseLog: ResponseLog = {
        requestId: config.requestId,
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        duration,
        timestamp: new Date(),
      };

      logger.debug("API Response", responseLog);
    }

    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as any;
    const duration = config?.startTime ? Date.now() - config.startTime : 0;

    if (defaultApiConfig.enableLogging) {
      const responseLog: ResponseLog = {
        requestId: config?.requestId,
        status: error.response?.status || 0,
        statusText: error.response?.statusText || "Network Error",
        data: error.response?.data,
        duration,
        timestamp: new Date(),
        errors: [error.message],
      };

      logger.error("API Error Response", responseLog);
    }

    if (defaultApiConfig.enableRetry && config && shouldRetry(error, config)) {
      return retryRequest(error);
    }

    const apiError = createApiError(error, "API_RESPONSE_ERROR");

    logger.error("API Error", apiError);

    return Promise.reject(apiError);
  },
);

class ApiClient {
  private instance: AxiosInstance;
  private config: ApiConfig;

  constructor(instance: AxiosInstance, config: ApiConfig) {
    this.instance = instance;
    this.config = config;
  }

  async request<TResponse = any, TRequest = any>(
    requestConfig: ApiRequestConfig<TRequest>,
  ): Promise<ApiResponse<TResponse>> {
    const {
      url,
      method,
      data,
      params,
      headers,
      validationSchema,
      responseSchema,
      skipValidation = false,
    } = requestConfig;

    // Request validation
    if (this.config.enableValidation && !skipValidation && validationSchema && data) {
      const validation = validationSchema.safeParse(data);

      if (!validation.success) {
        const errors = validation.error.issues.map(
          (err: any) => `${err.path.join(".")}: ${err.message}`,
        );

        const validationError = new ValidationError("Request validation failed", errors, {
          url,
          method,
        });

        return {
          data: null,
          error: createApiError(validationError, "VALIDATION_ERROR"),
          success: false,
        };
      }
    }

    try {
      const axiosConfig: AxiosRequestConfig = {
        url,
        method: method.toLowerCase() as any,
        data,
        params,
        headers,
      };

      const response = await this.instance.request(axiosConfig);

      // Response validation
      if (this.config.enableValidation && !skipValidation && responseSchema) {
        const validation = validateApiResponse(responseSchema, response.data, {
          endpoint: url,
          method,
        });

        if (!validation.isValid) {
          const validationError = new ValidationError(
            "Response validation failed",
            validation.errors,
            {
              url,
              method,
              response: response.data,
            },
          );

          return {
            data: null,
            error: createApiError(validationError, "RESPONSE_VALIDATION_ERROR"),
            success: false,
          };
        }

        return {
          data: validation.data as TResponse,
          error: null,
          success: true,
        };
      }

      return {
        data: response.data,
        error: null,
        success: true,
      };
    } catch (error) {
      const apiError =
        error instanceof ValidationError
          ? createApiError(error, "VALIDATION_ERROR")
          : createApiError(error, "API_CLIENT_ERROR");

      return {
        data: null,
        error: apiError,
        success: false,
      };
    }
  }

  // Convenience methods
  async get<TResponse = any>(
    url: string,
    params?: object,
    responseSchema?: z.ZodSchema<TResponse>,
  ): Promise<ApiResponse<TResponse>> {
    return this.request<TResponse>({
      url,
      method: "GET",
      params,
      responseSchema,
    });
  }

  async post<TResponse = any, TRequest = any>(
    url: string,
    data?: TRequest,
    schemas?: {
      request?: z.ZodSchema<TRequest>;
      response?: z.ZodSchema<TResponse>;
    },
  ): Promise<ApiResponse<TResponse>> {
    return this.request<TResponse, TRequest>({
      url,
      method: "POST",
      data,
      validationSchema: schemas?.request,
      responseSchema: schemas?.response,
    });
  }

  async put<TResponse = any, TRequest = any>(
    url: string,
    data?: TRequest,
    schemas?: {
      request?: z.ZodSchema<TRequest>;
      response?: z.ZodSchema<TResponse>;
    },
  ): Promise<ApiResponse<TResponse>> {
    return this.request<TResponse, TRequest>({
      url,
      method: "PUT",
      data,
      validationSchema: schemas?.request,
      responseSchema: schemas?.response,
    });
  }

  async patch<TResponse = any, TRequest = any>(
    url: string,
    data?: TRequest,
    schemas?: {
      request?: z.ZodSchema<TRequest>;
      response?: z.ZodSchema<TResponse>;
    },
  ): Promise<ApiResponse<TResponse>> {
    return this.request<TResponse, TRequest>({
      url,
      method: "PATCH",
      data,
      validationSchema: schemas?.request,
      responseSchema: schemas?.response,
    });
  }

  async delete<TResponse = any>(
    url: string,
    responseSchema?: z.ZodSchema<TResponse>,
  ): Promise<ApiResponse<TResponse>> {
    return this.request<TResponse>({
      url,
      method: "DELETE",
      responseSchema,
    });
  }
}

export const apiClient = new ApiClient(axiosInstance, defaultApiConfig);
