# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Instituto Semiguini — a Brazilian consulting and training institute website. Fully static site with hardcoded content (no database or CMS).

## Commands

```bash
npm run dev      # Dev server on http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

## Tech Stack

- **Next.js 14** (App Router) with **TypeScript** (strict mode)
- **Tailwind CSS** with custom theme (colors: primary `#595a3a`, accent `#e6ff00`, olive palette)
- **Framer Motion** for all animations
- Custom **Degular** font loaded via `@font-face` in `globals.css`
- Path alias: `@/*` → `./src/*`

## Architecture

### Pages (App Router)

All pages live in `src/app/`. The homepage (`page.tsx`) composes 8 section components. Inner pages (`/cursos`, `/essencia-e-plenitude`, `/adilson-semiguini`, `/tecnicas`, `/beneficios-empresa`, `/beneficios-colaboradores`, `/por-que-investir`) are self-contained page files.

### Components

- `src/components/layout/` — Header (fixed, with scroll detection + mobile menu) and Footer
- `src/components/sections/` — Homepage sections: Hero, QuemSomos, Diferencial, Missao, Modulos, Tecnicas, Programas, CTA
- `src/components/ui/` — WhatsAppButton (floating, always visible)

### Key Patterns

- **Client components**: Any component using Framer Motion or browser APIs must have `'use client'` directive.
- **Animation convention**: Use Framer Motion consistently (`initial`/`animate`/`whileInView` props). Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`.
- **Mobile menu**: Rendered **outside** the `<header>` element in Header.tsx to avoid stacking context/z-index issues. This was a deliberate fix — do not move it back inside.
- **Content data**: Courses, programs, navigation links, and footer data are hardcoded arrays/objects within their respective component files.
- **CSS utilities**: `globals.css` defines reusable classes (`.btn-primary`, `.btn-accent`, `.btn-outline`, `.card-glass`, `.section-padding`, `.container-custom`, `.heading-1/2/3`, `.text-gradient`).

## Conventions

- **Language**: All UI text, commit messages, and route names are in Portuguese.
- **Commits**: Conventional commits in Portuguese (`feat:`, `fix:`, `refactor:`).
- **Responsive**: Mobile-first with Tailwind breakpoints. Always test at sm/md/lg/xl.
- **Navigation sync**: When adding a new page, update both the Header nav array and the Footer links object.
