# 🏥 MedAIst - AI-Powered Medical Education Platform

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff69b4?style=flat&logo=framer)](https://www.framer.com/motion/)

[🚀 Live Demo](https://medaist.com) • [📚 Documentation](./ARCHITECTURE.md) • [🐛 Bug Reports](https://github.com/MedAIst-Studio/MedAIst-Frontend/issues) • [💬 Support](mailto:destek@medaist.com)

</div>

## 🎯 About the Project

MedAIst is a modern web platform that analyzes medical students' lecture notes using artificial intelligence to provide an interactive learning experience. Students can upload their PDF notes and:

- 🤖 **AI Chat**: Converse with your notes in natural language
- 📝 **Smart Notes**: AI-powered note-taking and editing
- 🎯 **Auto Quiz**: Generate instant exams from topics
- 📊 **Progress Tracking**: Detailed performance analysis

## ✨ Key Features

### 🎨 Modern UI/UX

- **Responsive Design**: Perfect experience on all devices with mobile-first approach
- **Dark/Light Mode**: User-friendly interface with system theme support
- **Framer Motion**: Buttery-smooth animations and micro-interactions
- **Shadcn UI**: Consistent and accessible component library

### 🚀 Performance Optimization

- **Next.js 15**: Latest App Router and React Server Components
- **Turbopack**: Lightning-fast bundling and hot reload
- **Code Splitting**: Automatic route-based lazy loading
- **Image Optimization**: Next.js built-in image optimization

### 🛡️ Security & Quality

- **TypeScript**: 100% type safety to minimize runtime errors
- **ESLint + Prettier**: Automatic code formatting and quality control
- **Husky**: Code quality guarantee with pre-commit hooks
- **Zod**: Runtime type validation and form validation

## 🏗️ Technology Stack

### **Frontend Core**

```
Next.js 15.5.4     - React framework with App Router
React 19.1.0       - Latest React with concurrent features
TypeScript 5.0     - Static typing and enhanced DX
```

### **Styling & Animation**

```
Tailwind CSS 4.0   - Utility-first CSS framework
Shadcn UI          - High-quality React components
Framer Motion      - Production-ready motion library
CVA                - Class variance authority for component variants
```

### **State & Data Management**

```
TanStack Query     - Server state management and caching
React Hook Form    - Performant form library with validation
Zod               - TypeScript-first schema declaration and validation
Axios             - HTTP client with interceptors
```

## 🚀 Quick Start

### Requirements

```bash
Node.js >= 18.17.0
npm >= 9.0.0
Git >= 2.34.0
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MedAIst-Studio/MedAIst-Frontend.git
cd MedAIst-Frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Development Server

```bash
npm run dev
```

🎉 Open [http://localhost:8000](http://localhost:8000) in your browser!

## 📁 Project Structure

```
MedAIst-Frontend/
├── 📁 public/                    # Static assets
│   ├── 🖼️ images/              # Image files
│   ├── 🎬 videos/              # Video demos
│   └── 📄 icons/               # SVG icons
├── 📁 src/
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── 📁 (marketing)/     # Marketing pages (landing, about, etc.)
│   │   ├── 📁 (auth)/          # Authentication pages
│   │   ├── 📁 (app)/           # Main application pages
│   │   ├── 📁 (onboarding)/    # User onboarding flow
│   │   └── 📄 layout.tsx       # Root layout
│   ├── 📁 components/          # Reusable React components
│   │   ├── 📁 ui/              # Shadcn UI components
│   │   ├── 📁 shared/          # Shared utility components
│   │   └── 📁 landing/         # Landing page specific components
│   ├── 📁 features/            # Feature-based modules
│   │   ├── 📁 auth/            # Authentication logic
│   │   ├── 📁 chat/            # AI chat functionality
│   │   ├── 📁 notes/           # Note-taking system
│   │   ├── 📁 quiz/            # Quiz generation system
│   │   └── 📁 settings/        # User settings
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 lib/                 # Utility libraries
│   ├── 📁 providers/           # React context providers
│   └── 📁 types/               # TypeScript type definitions
├── 📄 package.json             # Dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 next.config.ts          # Next.js configuration
```

## 🔥 Development Commands

```bash
npm run dev          # Development server (port 8000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run format       # Prettier formatting
```

## 🤝 Contributing

1. **Fork & Clone**: Fork the repository
2. **Branch**: Create a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit**: Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push**: Push your branch (`git push origin feature/amazing-feature`)
5. **PR**: Open a Pull Request

### Commit Convention

```
feat:     ✨ New feature
fix:      🐛 Bug fix
docs:     📚 Documentation
style:    💎 Code formatting
refactor: ♻️ Code refactoring
test:     ✅ Add/fix tests
```

## 📞 Support & Contact

- **GitHub Issues**: [Bug Reports & Feature Requests](https://github.com/MedAIst-Studio/MedAIst-Frontend/issues)
- **Email**: [support@medaist.com](mailto:support@medaist.com)
- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Made with ❤️ by MedAIst Team**

[🌟 Star us on GitHub](https://github.com/MedAIst-Studio/MedAIst-Frontend) • [💼 LinkedIn](https://linkedin.com/company/medaist)

</div>
