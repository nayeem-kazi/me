# 🚀 Md. Nayeem Kazi — Portfolio Website

A modern, premium portfolio built with **Angular 17 standalone components**, featuring a Microsoft Fluent / Glassmorphism design system.

**Stack:** Java · Spring Boot · Angular | Dark/Light mode | Fully responsive

---

## 📁 Project Structure

```
nayeem-portfolio/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/         # TypeScript interfaces (portfolio.model.ts)
│   │   │   └── services/       # PortfolioService, ThemeService
│   │   ├── shared/
│   │   │   ├── components/     # Navbar, Footer
│   │   │   └── directives/     # ScrollRevealDirective
│   │   └── features/
│   │       ├── home/           # HomeComponent (page shell)
│   │       ├── hero/           # Hero section with typewriter
│   │       ├── about/          # About section
│   │       ├── skills/         # Skills with animated bars
│   │       ├── experience/     # Timeline experience
│   │       ├── projects/       # Filterable project cards
│   │       ├── education/      # Education timeline
│   │       ├── certifications/ # Certification cards
│   │       └── contact/        # Contact form
│   ├── assets/
│   │   ├── data/
│   │   │   └── portfolio-data.json   ⭐ EDIT THIS FILE
│   │   └── resume/
│   │       └── nayeem-kazi-resume.pdf
│   ├── styles.css              # Global CSS variables & design tokens
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- Angular CLI 17+

```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Clone / navigate to project
cd nayeem-portfolio

# Install dependencies
npm install

# Start dev server
ng serve

# Open browser
# http://localhost:4200
```

### Production Build
```bash
ng build --configuration production
# Output: dist/nayeem-portfolio/
```

---

## ✏️ Personalizing Your Portfolio

**All content lives in one file:**

```
src/assets/data/portfolio-data.json
```

### What to update:
| Section | Key | Notes |
|---------|-----|-------|
| Personal info | `personal` | Name, email, phone, LinkedIn, GitHub |
| About bio | `about.bio` | Your story in 2 paragraphs |
| Highlights | `about.highlights` | 4 stat cards |
| Skills | `skills[]` | Categories with proficiency % |
| Experience | `experience[]` | Jobs with achievements & tech stack |
| Projects | `projects[]` | GitHub links, descriptions, tech |
| Education | `education[]` | Degree, institution, activities |
| Certifications | `certifications[]` | Name, issuer, date, badge emoji |

### Add your resume:
```
src/assets/resume/nayeem-kazi-resume.pdf
```

---

## 🎨 Theme Customization

Edit CSS variables in `src/styles.css`:

```css
:root {            /* Light theme */
  --accent-blue: #0078d4;
  --gradient-primary: linear-gradient(135deg, #0078d4, #1a5fb4);
}

[data-theme="dark"] {   /* Dark theme */
  --accent-blue: #4da6ff;
}
```

---

## 🔧 Architecture

| Pattern | Implementation |
|---------|---------------|
| Standalone Components | All components use `standalone: true` |
| Reactive State | Angular Signals (`signal()`) for theme & UI state |
| Data Loading | `PortfolioService` with `shareReplay(1)` caching |
| Animations | CSS `IntersectionObserver` via `ScrollRevealDirective` |
| Routing | Single page with anchor scroll navigation |
| Type Safety | Full TypeScript interfaces in `portfolio.model.ts` |

---

## 📦 Key Features

- ✅ **Dark / Light mode** — persisted in localStorage
- ✅ **Typewriter hero** — animated role cycling
- ✅ **Scroll reveal** — intersection observer animations
- ✅ **Filterable projects** — by category tabs
- ✅ **Experience timeline** — with live pulse indicator
- ✅ **Skill progress bars** — animated on scroll
- ✅ **Contact form** — with validation & success state
- ✅ **Glassmorphism cards** — backdrop-filter + gradient borders
- ✅ **Fully responsive** — mobile-first design
- ✅ **SEO-ready** — meta tags, OG tags, semantic HTML

---

## 🚀 Deployment

### Netlify
```bash
ng build
# Drag dist/nayeem-portfolio/ to netlify.com/drop
```

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/your-repo-name/
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## 📝 License
MIT — Free to use and customize.

---

*Built with ❤️ using Angular 17, TypeScript, and a passion for clean code.*
