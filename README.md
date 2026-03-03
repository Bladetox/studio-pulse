# StudioPulse

**The performance dashboard for barbers, beauticians, photographers, tattoo artists, and creative pros who turn talent into predictable income.**

## 🎯 Project Overview

StudioPulse is a high-performance, modern landing page built with React 19, Vite, GSAP, and TailwindCSS. It showcases a premium dashboard platform designed for creative professionals and service-based businesses.

## ✨ Features

- **React 19** with TypeScript for type-safe development
- **Vite** for blazing-fast development and optimized production builds
- **GSAP & Lenis** for smooth scroll animations and transitions
- **TailwindCSS** with custom design system
- **Radix UI** for accessible, headless UI components
- **Content Security Policy (CSP)** and security-hardened headers
- **Full TypeScript strict mode** with comprehensive type safety
- **Manual code chunking** for optimal bundle size

## 🏗️ Architecture

This project follows enterprise-grade architecture standards:

- **Zero-Trust Security** with OWASP Top 10 compliance
- **Performance-First** with P99 latency targets < 200ms
- **Accessibility (A11y)** with Radix UI primitives
- **Strict Content Security Policy** to prevent XSS attacks
- **Tree-shaking optimized** dependencies
- **React 19 Compiler** ready (auto-memoization)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bladetox/studio-pulse.git
cd studio-pulse

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
studio-pulse/
├── src/
│   ├── components/      # React components
│   ├── lib/             # Utility functions
│   ├── config.ts        # App configuration
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🎨 Design System

- **Colors**: Brand gradient (pink, purple, teal, orange, blue)
- **Typography**: Inter (body), Montserrat (headings)
- **Animations**: Fade-in, slide-up, pulse-glow
- **Theme**: Dark mode with glass morphism effects

## 🔒 Security Features

- Content Security Policy (CSP) with strict directives
- HSTS enforcement
- X-Content-Type-Options: nosniff
- Subresource Integrity (SRI) for CDN resources
- Input validation with Zod
- No inline scripts or styles (CSP-compliant)

## 📊 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | Lighthouse |
| CLS | < 0.1 | GSAP + CSS |
| FID | < 100ms | Vite Code Splitting |
| A11y Score | 100 | Radix UI + Axe |

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 5
- **Language**: TypeScript 5.4
- **Styling**: TailwindCSS 3.4
- **Animation**: GSAP 3.12, Lenis 1.1
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Carousel**: Embla Carousel

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributors

Built by **Arshad** for StudioPulse

## 🌐 Deployment

Ready for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

**StudioPulse** - Turn talent into predictable income. 💼✨
