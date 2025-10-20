/* eslint-disable no-console */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  data?: any;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  stack?: string;
}

export interface RequestLog {
  id: string;
  method: string;
  url: string;
  headers?: Record<string, string>;
  data?: any;
  timestamp: Date;
}

export interface ResponseLog {
  requestId: string;
  status: number;
  statusText: string;
  data?: any;
  duration: number;
  timestamp: Date;
  errors?: string[];
}

export interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  bufferSize: number;
  flushInterval: number;
}

class Logger {
  private config: LoggerConfig;
  private buffer: LogEntry[] = [];
  private flushTimer?: NodeJS.Timeout;

  constructor(config: LoggerConfig) {
    this.config = config;
    this.startFlushTimer();
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private createLogEntry(level: LogLevel, message: string, data?: any, error?: Error): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date(),
      userId: this.getCurrentUserId(),
      sessionId: this.getSessionId(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      stack: error?.stack,
    };
  }

  private log(level: LogLevel, message: string, data?: any, error?: Error) {
    if (!this.shouldLog(level)) return;

    const entry = this.createLogEntry(level, message, data, error);

    if (this.config.enableConsole) {
      this.logToConsole(entry);
    }

    if (this.config.enableRemote) {
      this.buffer.push(entry);
      if (this.buffer.length >= this.config.bufferSize) {
        this.flush();
      }
    }
  }

  private logToConsole(entry: LogEntry) {
    const {level, message, data} = entry;

    const isDev = process.env.NODE_ENV !== "production";

    switch (level) {
      case LogLevel.DEBUG:
        if (isDev) {
          if (data && Object.keys(data).length > 0) {
            console.debug(`🔍 ${message}`, data);
          } else {
            console.debug(`🔍 ${message}`);
          }
        }
        break;
      case LogLevel.INFO:
        if (data && Object.keys(data).length > 0) {
          console.info(`ℹ️  ${message}`, data);
        } else {
          console.info(`ℹ️  ${message}`);
        }
        break;
      case LogLevel.WARN:
        if (data && Object.keys(data).length > 0) {
          console.warn(`⚠️  ${message}`, data);
        } else {
          console.warn(`⚠️  ${message}`);
        }
        break;
      case LogLevel.ERROR:
        if (data && Object.keys(data).length > 0) {
          console.error(`❌ ${message}`, data);
        } else {
          console.error(`❌ ${message}`);
        }
        break;
    }
  }

  private async flush() {
    if (this.buffer.length === 0) return;

    const logs = [...this.buffer];

    this.buffer = [];

    try {
      if (this.config.remoteEndpoint) {
        await fetch(this.config.remoteEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({logs}),
        });
      }
    } catch (error) {
      console.error("Failed to send logs to remote endpoint:", error);
      // Re-add logs to buffer if failed
      this.buffer.unshift(...logs);
    }
  }

  private startFlushTimer() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }

    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private getCurrentUserId(): string | undefined {
    // Get from your auth store
    try {
      if (typeof window === "undefined") return undefined;
      const userStore = localStorage.getItem("user-store");

      if (userStore) {
        const parsed = JSON.parse(userStore);

        return parsed?.state?.currentUser?.id;
      }
    } catch {
      return undefined;
    }
  }

  private getSessionId(): string {
    if (typeof window === "undefined") return "server";

    let sessionId = sessionStorage.getItem("session-id");

    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem("session-id", sessionId);
    }

    return sessionId;
  }

  debug(message: string, data?: any) {
    this.log(LogLevel.DEBUG, message, data);
  }

  info(message: string, data?: any) {
    this.log(LogLevel.INFO, message, data);
  }

  warn(message: string, data?: any) {
    this.log(LogLevel.WARN, message, data);
  }

  error(message: string, error?: Error | any) {
    const errorObj = error instanceof Error ? error : new Error(String(error));

    this.log(LogLevel.ERROR, message, error, errorObj);
  }

  generateRequestId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  logApiRequest(request: RequestLog) {
    this.debug(`→ ${request.method} ${request.url}`);
  }

  logApiResponse(response: ResponseLog) {
    if (response.errors && response.errors.length > 0) {
      this.error(`← ${response.status} (${response.duration}ms)`, {
        errors: response.errors,
      });
    } else {
      this.debug(`← ${response.status} (${response.duration}ms)`);
    }
  }

  // Performance logging
  time(label: string) {
    if (typeof performance !== "undefined") {
      performance.mark(`${label}-start`);
    }
  }

  timeEnd(label: string) {
    if (typeof performance !== "undefined") {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);

      const measures = performance.getEntriesByName(label);
      const duration = measures[measures.length - 1]?.duration;

      // Sadece yavaş işlemleri logla (>1000ms)
      if (duration && duration > 1000) {
        this.warn(`Slow Performance: ${label}`, {
          duration: `${duration?.toFixed(2)}ms`,
        });
      } else if (duration) {
        this.debug(`⚡ ${label}: ${duration?.toFixed(2)}ms`);
      }

      // Cleanup
      performance.clearMarks(`${label}-start`);
      performance.clearMarks(`${label}-end`);
      performance.clearMeasures(label);
    }
  }

  // Cleanup
  destroy() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush();
  }
}

const loggerConfig: LoggerConfig = {
  level: process.env.NODE_ENV === "production" ? LogLevel.WARN : LogLevel.DEBUG,
  enableConsole: true,
  enableRemote: process.env.NODE_ENV === "production",
  remoteEndpoint: process.env.NEXT_PUBLIC_LOG_ENDPOINT,
  bufferSize: 10,
  flushInterval: 30000, // 30 seconds
};

export const logger = new Logger(loggerConfig);

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    logger.destroy();
  });
}
