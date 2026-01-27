# AGENTS.md

## Project Overview
Personal portfolio website for Minh Chu - minimalist design built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack
- **Framework:** Next.js 16.1.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x via PostCSS
- **Theme:** next-themes (dark/light mode)
- **Package Manager:** pnpm

## Project Structure
```
src/
├── app/              # Next.js App Router pages & components
│   ├── components/   # Shared UI components
│   ├── experience/   # Experience page
│   ├── globals.css   # Global styles & Tailwind imports
│   ├── layout.tsx    # Root layout with theme provider
│   └── page.tsx      # Home page
└── data/             # Static content/data
```

## Commands
```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm lint     # Run ESLint
```

## Guidelines
- Use App Router conventions (`page.tsx`, `layout.tsx`)
- Tailwind v4 syntax: `@import "tailwindcss"` in CSS
- Keep components minimal and reusable
- Support dark/light themes with `dark:` variants
- Use semantic HTML with proper accessibility
