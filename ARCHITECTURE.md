# 🏗️ MedAIst Frontend Architecture

This documentation explains the architectural structure, design principles, and technical details of the MedAIst Frontend application.

## 📋 Table of Contents

1. [General Architecture](#-general-architecture)
2. [Folder Structure](#-folder-structure)
3. [Route Organization](#-route-organization)
4. [Component Architecture](#-component-architecture)
5. [State Management](#-state-management)
6. [Data Flow](#-data-flow)
7. [Styling Strategy](#-styling-strategy)
8. [Performance Optimizations](#-performance-optimizations)
9. [Security Considerations](#-security-considerations)
10. [Development Guidelines](#-development-guidelines)

## 🎯 General Architecture

MedAIst Frontend uses a **monolithic frontend** architecture following modern web application principles. Core principles:

### Architectural Patterns

- **Feature-Based Architecture**: Modular structure with each feature in its own folder
- **Component-Driven Development**: Reusable, testable components
- **Layered Architecture**: Presentation → Business Logic → Data Access
- **Atomic Design**: Hierarchical structure for UI components

### Core Principles

```
🎨 UI/UX First        → User experience-focused design
⚡ Performance        → Core Web Vitals optimization
🔒 Security          → XSS, CSRF, data validation
♿ Accessibility      → WCAG 2.1 AA compliance
📱 Mobile First       → Progressive enhancement
🔧 Developer Experience → Hot reload, type safety, tooling
```

## 📁 Folder Structure

### High-Level Structure

```
src/
├── 📁 app/              # Next.js App Router (Route definitions)
├── 📁 components/       # Reusable UI components
├── 📁 features/         # Feature-based modules
├── 📁 hooks/           # Custom React hooks
├── 📁 lib/             # Utility libraries & configurations
├── 📁 providers/       # React Context providers
└── 📁 types/           # Global TypeScript definitions
```

### Detailed Folder Descriptions

#### 🗂️ `/src/app` - Next.js App Router

```
app/
├── 📁 (marketing)/     # Marketing site (/, /about, /contact, /pricing)
│   ├── layout.tsx      # Marketing-specific layout (header/footer)
│   ├── page.tsx        # Landing page (/)
│   ├── about/          # About page (/about)
│   ├── contact/        # Contact page (/contact)
│   └── pricing/        # Pricing page (/pricing)
├── 📁 (auth)/          # Authentication pages
│   ├── layout.tsx      # Auth layout (centered, minimal)
│   ├── login/          # Login page (/login)
│   ├── signup/         # Registration (/signup)
│   ├── forgot-password/ # Password reset (/forgot-password)
│   └── verify-email/   # Email verification (/verify-email)
├── 📁 (app)/           # Main application (protected routes)
│   ├── layout.tsx      # App layout (sidebar, header, navigation)
│   ├── chat/           # AI Chat interface (/chat)
│   ├── notes/          # Notes management (/notes)
│   ├── quiz/           # Quiz system (/quiz)
│   └── settings/       # User settings (/settings)
├── 📁 (onboarding)/    # New user onboarding flow
│   └── onboarding/     # Step-by-step setup (/onboarding)
├── layout.tsx          # Root layout (global providers, metadata)
└── globals.css         # Global CSS (Tailwind base, custom styles)
```

**Route Groups Explanation:**

- `(marketing)`: SEO-friendly, public pages
- `(auth)`: Authentication flow, minimal layout
- `(app)`: Main app for authenticated users
- `(onboarding)`: First-time user setup flow

#### 🧩 `/src/components` - UI Components

```
components/
├── 📁 ui/              # Shadcn UI primitive components
│   ├── button.tsx      # Button variants (primary, secondary, ghost, etc.)
│   ├── input.tsx       # Form input with validation states
│   ├── card.tsx        # Container component with variants
│   ├── dialog.tsx      # Modal and popup system
│   ├── form.tsx        # Form wrapper with validation
│   └── ...             # 20+ production-ready components
├── 📁 shared/          # Cross-feature shared components
│   ├── MaxWidthWrapper.tsx    # Layout container with responsive max-width
│   ├── MarketingHeader.tsx    # Marketing site navigation
│   ├── MarketingFooter.tsx    # Marketing site footer
│   ├── DashboardHeader.tsx    # App header with user menu
│   ├── BottomBar.tsx          # Mobile navigation bar
│   └── index.ts              # Barrel exports
└── 📁 landing/         # Landing page specific components
    ├── HeroSection.tsx         # Hero with video demo
    ├── ProblemSolutionSection.tsx # Problem/solution comparison
    ├── HowItWorksSection.tsx   # Step-by-step process
    ├── TestimonialsSection.tsx # Social proof section
    └── CTASection.tsx          # Final call-to-action
```

**Component Hierarchy:**

```
UI Components (Atomic)
    ↓
Shared Components (Molecular)
    ↓
Feature Components (Organism)
    ↓
Page Components (Template)
```

#### 🎯 `/src/features` - Feature Modules

```
features/
├── 📁 auth/            # Authentication & authorization
│   ├── components/     # Auth-specific UI components
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   └── AuthLayout.tsx
│   ├── hooks/          # Auth-related custom hooks
│   │   ├── useAuth.ts
│   │   └── useSession.ts
│   ├── types/          # Auth type definitions
│   │   └── index.ts
│   ├── utils/          # Auth utility functions
│   │   └── validation.ts
│   ├── api/            # Auth API calls
│   │   └── index.ts
│   └── index.ts        # Feature barrel export
├── 📁 chat/            # AI Chat system
│   ├── components/
│   │   ├── ChatInterface.tsx
│   │   ├── MessageBubble.tsx
│   │   └── ChatHistory.tsx
│   ├── hooks/
│   │   ├── useChat.ts
│   │   └── useChatHistory.ts
│   └── types/
│       └── chat.types.ts
├── 📁 notes/           # Note management system
├── 📁 quiz/            # Quiz generation & taking
└── 📁 settings/        # User preferences & account
```

**Feature Structure Pattern:**
Each feature is organized as a complete module:

- `components/`: Feature-specific UI components
- `hooks/`: Business logic and state management
- `types/`: TypeScript type definitions
- `utils/`: Pure functions and helpers
- `api/`: HTTP requests and data fetching

#### 🪝 `/src/hooks` - Global Custom Hooks

```
hooks/
├── use-mobile.ts       # Mobile device detection
├── use-theme.ts        # Dark/light mode management
├── use-api.ts          # Global API request handler
├── use-debounce.ts     # Input debouncing
└── use-intersection.ts # Intersection Observer wrapper
```

#### 🔧 `/src/lib` - Utilities & Configuration

```
lib/
├── api.ts              # Axios instance & interceptors
├── utils.ts            # General utility functions (cn, formatDate, etc.)
├── validation.ts       # Zod schemas for form validation
├── logger.ts           # Logging utility
├── types.ts            # Global type definitions
└── constants.ts        # Application constants
```

#### 🌐 `/src/providers` - React Context Providers

```
providers/
├── theme-provider.tsx  # Next-themes provider for dark/light mode
├── auth-provider.tsx   # Authentication context (when implemented)
├── api-provider.tsx    # TanStack Query client
└── toast-provider.tsx  # Global notification system
```

## 🛣️ Route Organization

### Route Groups Strategy

Logical separation using Next.js 13+ App Router's route groups feature:

```
app/
├── (marketing)/        # Public marketing site
│   ├── layout.tsx      # Marketing layout (header + footer)
│   └── */              # Marketing pages
├── (auth)/             # Authentication flow
│   ├── layout.tsx      # Minimal auth layout
│   └── */              # Auth pages
├── (app)/              # Protected application
│   ├── layout.tsx      # Full app layout (sidebar + nav)
│   └── */              # App pages
└── (onboarding)/       # User onboarding
    └── */              # Onboarding steps
```

### Layout Hierarchy

```
Root Layout (app/layout.tsx)
├── Marketing Layout ((marketing)/layout.tsx)
├── Auth Layout ((auth)/layout.tsx)
├── App Layout ((app)/layout.tsx)
└── Onboarding Layout ((onboarding)/layout.tsx)
```

### Route Protection Strategy

```typescript
// Middleware-based protection
export function middleware(request: NextRequest) {
  // Protected routes: /app/*
  if (request.nextUrl.pathname.startsWith("/app")) {
    // Check authentication
    const token = request.cookies.get("auth-token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Auth routes: redirect if already logged in
  if (request.nextUrl.pathname.startsWith("/auth")) {
    const token = request.cookies.get("auth-token");
    if (token) {
      return NextResponse.redirect(new URL("/app", request.url));
    }
  }
}
```

## 🧩 Component Architecture

### Component Classification

#### 1. **UI Components** (Atomic Level)

**Location**: `/src/components/ui/`
**Purpose**: Primitive, reusable building blocks

```typescript
// Example: Button component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

const Button = ({ variant, size, loading, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      disabled={loading}
      {...props}
    >
      {loading && <Loader className="mr-2" />}
      {children}
    </button>
  )
}
```

**Features:**

- Zero business logic
- Pure presentation layer
- CVA (Class Variance Authority) for variant management
- Full TypeScript support
- Accessibility built-in

#### 2. **Shared Components** (Molecular Level)

**Location**: `/src/components/shared/`
**Purpose**: Cross-feature functionality

```typescript
// Example: MaxWidthWrapper
interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 lg:px-20", className)}>
      {children}
    </div>
  )
}
```

#### 3. **Feature Components** (Organism Level)

**Location**: `/src/features/{feature}/components/`
**Purpose**: Feature-specific business logic

```typescript
// Example: ChatInterface
const ChatInterface = () => {
  const { messages, sendMessage, isLoading } = useChat()
  const [input, setInput] = useState('')

  return (
    <Card className="flex flex-col h-full">
      <ChatHistory messages={messages} />
      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={sendMessage}
        loading={isLoading}
      />
    </Card>
  )
}
```

### Component Patterns

#### 1. **Compound Components**

```typescript
// Usage
<Card>
  <Card.Header>
    <Card.Title>Chat History</Card.Title>
  </Card.Header>
  <Card.Content>
    <MessageList messages={messages} />
  </Card.Content>
</Card>
```

#### 2. **Render Props Pattern**

```typescript
<IntersectionObserver>
  {({ isIntersecting, ref }) => (
    <div ref={ref}>
      {isIntersecting && <LazyComponent />}
    </div>
  )}
</IntersectionObserver>
```

#### 3. **Higher-Order Components**

```typescript
const withAuth = <T extends object>(Component: ComponentType<T>) => {
  return (props: T) => {
    const { user, isLoading } = useAuth()

    if (isLoading) return <LoadingSpinner />
    if (!user) return <LoginPrompt />

    return <Component {...props} />
  }
}
```

## 🏪 State Management

### State Classification

#### 1. **Server State** (TanStack Query)

**Usage**: API data, cache management

```typescript
// Custom hook for server state
const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: () => api.getNotes(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Usage in component
const NotesPage = () => {
  const { data: notes, isLoading, error } = useNotes()

  if (isLoading) return <LoadingSkeleton />
  if (error) return <ErrorBoundary />

  return <NotesList notes={notes} />
}
```

#### 2. **Client State** (React useState/useReducer)

**Usage**: Form state, UI state, temporary data

```typescript
// Form state management
const useSignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({...prev, [field]: value}));
  };

  return {formData, updateField};
};
```

#### 3. **Global State** (React Context)

**Usage**: Theme, authentication, global UI state

```typescript
// Theme context
const ThemeContext = createContext<{
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
} | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### State Management Strategy

```
UI State (useState)
    ↓
Business Logic (Custom Hooks)
    ↓
Server State (TanStack Query)
    ↓
Global State (Context/Zustand)
```

## 📊 Data Flow

### API Integration Pattern

#### 1. **API Layer** (`/src/lib/api.ts`)

```typescript
// Axios instance configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// Request interceptor for auth
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      redirectToLogin();
    }
    throw error;
  },
);
```

#### 2. **Feature API** (`/src/features/{feature}/api/`)

```typescript
// Feature-specific API calls
export const chatApi = {
  sendMessage: (message: string, documentId: string) =>
    api.post("/chat/send", {message, documentId}),

  getChatHistory: (documentId: string) => api.get(`/chat/history/${documentId}`),

  createNewChat: (documentId: string) => api.post("/chat/create", {documentId}),
};
```

#### 3. **Custom Hook Integration**

```typescript
// Business logic hook
const useChat = (documentId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const {data: history} = useQuery({
    queryKey: ["chat-history", documentId],
    queryFn: () => chatApi.getChatHistory(documentId),
  });

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => chatApi.sendMessage(message, documentId),
    onSuccess: (response) => {
      setMessages((prev) => [...prev, response.message]);
    },
  });

  return {
    messages,
    sendMessage: sendMessageMutation.mutate,
    isLoading: sendMessageMutation.isPending,
  };
};
```

### Data Flow Architecture

```
User Interaction
    ↓
Component Event Handler
    ↓
Custom Hook (Business Logic)
    ↓
API Call (TanStack Query)
    ↓
Server Response
    ↓
Cache Update
    ↓
UI Re-render
```

## 🎨 Styling Strategy

### CSS Architecture

#### 1. **Tailwind CSS** (Utility-First)

```typescript
// Component styling with Tailwind
const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
)
```

#### 2. **CSS Custom Properties** (Design Tokens)

```css
/* globals.css - Design system variables */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... */
}

[data-theme="dark"] {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```

#### 3. **Component Variants** (CVA)

```typescript
// Button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
```

### Animation Strategy

#### 1. **Framer Motion Integration**

```typescript
// Page transitions
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

// Component animations
const MessageBubble = ({ message }: { message: Message }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className="message-bubble"
  >
    {message.content}
  </motion.div>
)
```

#### 2. **Scroll-Based Animations**

```typescript
const useScrollAnimation = () => {
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return {opacity, scale};
};
```

## ⚡ Performance Optimizations

### Code Splitting & Lazy Loading

#### 1. **Route-Based Code Splitting** (Automatic)

```typescript
// Next.js automatically creates separate bundles for each route
// app/chat/page.tsx → chat.js bundle
// app/notes/page.tsx → notes.js bundle
```

#### 2. **Component-Based Lazy Loading**

```typescript
// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'))

const Dashboard = () => (
  <Suspense fallback={<ChartSkeleton />}>
    <HeavyChart />
  </Suspense>
)
```

#### 3. **Dynamic Imports**

```typescript
// Load features on demand
const loadChatFeature = async () => {
  const {ChatInterface} = await import("@/features/chat");
  return ChatInterface;
};
```

### Image Optimization

#### 1. **Next.js Image Component**

```typescript
import Image from 'next/image'

const OptimizedImage = () => (
  <Image
    src="/hero-image.jpg"
    alt="MedAIst Hero"
    width={1200}
    height={600}
    priority // For above-the-fold content
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
  />
)
```

#### 2. **Responsive Images**

```typescript
const ResponsiveImage = () => (
  <Image
    src="/hero.jpg"
    alt="Hero"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    fill
    className="object-cover"
  />
)
```

### Bundle Optimization

#### 1. **Tree Shaking**

```typescript
// ❌ Entire library import
import * as lodash from "lodash";

// ✅ Specific function import
import {debounce} from "lodash";

// ✅ Even better: native alternatives
const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
```

#### 2. **Bundle Analysis**

```bash
# Analyze bundle size
npm run build -- --analyze

# Check specific chunks
npx @next/bundle-analyzer .next
```

### Caching Strategy

#### 1. **HTTP Caching**

```typescript
// API responses with cache headers
export async function GET() {
  return NextResponse.json(
    {data: "cached response"},
    {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
      },
    },
  );
}
```

#### 2. **Client-Side Caching**

```typescript
// TanStack Query configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});
```

## 🔒 Security Considerations

### Input Validation

#### 1. **Zod Schema Validation**

```typescript
// Form validation schema
const signupSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase and numbers",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Runtime validation
const validateInput = (input: unknown) => {
  try {
    return signupSchema.parse(input);
  } catch (error) {
    throw new ValidationError(error.errors);
  }
};
```

#### 2. **Server-Side Validation**

```typescript
// API route validation
export async function POST(request: Request) {
  const body = await request.json();

  // Validate input
  const validatedData = signupSchema.parse(body);

  // Process request
  return NextResponse.json({success: true});
}
```

### XSS Prevention

#### 1. **Content Sanitization**

```typescript
import DOMPurify from 'dompurify'

const SafeHTML = ({ content }: { content: string }) => {
  const sanitized = DOMPurify.sanitize(content)
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />
}
```

#### 2. **CSP Headers**

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
];

export default {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
```

### Authentication Security

#### 1. **JWT Token Management**

```typescript
// Secure token storage
const tokenManager = {
  setToken: (token: string) => {
    // HTTP-only cookies for security
    document.cookie = `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`;
  },

  getToken: () => {
    return cookies().get("auth-token")?.value;
  },

  removeToken: () => {
    document.cookie = "auth-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
};
```

#### 2. **Route Protection**

```typescript
// Middleware for protected routes
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/app");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
```

## 🛠️ Development Guidelines

### Code Style & Standards

#### 1. **TypeScript Configuration**

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### 2. **ESLint Rules**

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended", "prettier"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

#### 3. **Prettier Configuration**

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### Git Workflow

#### 1. **Branch Naming Convention**

```bash
feature/auth-login-page      # New feature
bugfix/chat-message-styling  # Bug fix
hotfix/security-patch        # Critical fix
refactor/component-structure # Code refactoring
docs/update-readme          # Documentation
```

#### 2. **Commit Message Convention**

```bash
feat(auth): add login form validation
fix(chat): resolve message ordering issue
docs(readme): update installation guide
style(ui): improve button hover states
refactor(api): simplify error handling
test(utils): add validation helper tests
```

### Testing Strategy

#### 1. **Unit Testing** (Jest + Testing Library)

```typescript
// Component testing
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles loading state', () => {
    render(<Button loading>Submit</Button>)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
```

#### 2. **Integration Testing**

```typescript
// API integration tests
import {chatApi} from "@/features/chat/api";

describe("Chat API", () => {
  it("sends message successfully", async () => {
    const response = await chatApi.sendMessage("Hello", "doc-123");
    expect(response.message).toBeDefined();
    expect(response.status).toBe("success");
  });
});
```

### Performance Monitoring

#### 1. **Core Web Vitals**

```typescript
// Performance monitoring
export function reportWebVitals(metric: any) {
  switch (metric.name) {
    case "FCP":
      console.log("First Contentful Paint:", metric.value);
      break;
    case "LCP":
      console.log("Largest Contentful Paint:", metric.value);
      break;
    case "CLS":
      console.log("Cumulative Layout Shift:", metric.value);
      break;
  }
}
```

#### 2. **Bundle Size Monitoring**

```bash
# Bundle analysis
npm run build -- --analyze

# Performance budgets
echo "Main bundle should be < 200kb"
echo "Page bundles should be < 50kb"
```

### Documentation Standards

#### 1. **Component Documentation**

````typescript
/**
 * Primary UI component for user interaction
 *
 * @param variant - Button style variant
 * @param size - Button size
 * @param loading - Loading state
 * @param children - Button content
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" loading={isSubmitting}>
 *   Submit Form
 * </Button>
 * ```
 */
export const Button = ({variant, size, loading, children}: ButtonProps) => {
  // Implementation
};
````

#### 2. **API Documentation**

```typescript
/**
 * Send a message to AI chat
 *
 * @param message - User message text
 * @param documentId - Target document ID
 * @returns Promise<ChatResponse> - AI response with message and metadata
 *
 * @throws {ValidationError} When message is empty or too long
 * @throws {AuthError} When user is not authenticated
 * @throws {RateLimitError} When rate limit is exceeded
 */
export const sendChatMessage = async (
  message: string,
  documentId: string,
): Promise<ChatResponse> => {
  // Implementation
};
```

---

This documentation comprehensively explains the technical architecture and development standards of the MedAIst Frontend project. As the project grows and new features are added, this document should be updated accordingly.
