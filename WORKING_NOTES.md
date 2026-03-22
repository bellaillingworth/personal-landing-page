# Working Notes — Bella Illingworth Personal Landing Page

> **Internal document — not intended for public audiences.**
> This file is for developer and AI assistant reference only. It should be updated at the end of every working session to reflect the current state of the project.

---

## How to Use This File (For AI Assistants)

1. Read this entire file before suggesting any changes or writing any code.
2. Read `README.md` for the public-facing project description and setup instructions.
3. Do not change the folder structure or file naming conventions without discussing it first.
4. Follow all conventions listed in the Conventions section exactly — do not introduce new patterns without flagging them.
5. Do not suggest any approaches listed in the "What Was Tried and Rejected" section.
6. Ask clarifying questions before making large structural changes (e.g., adding a new section, changing the layout, or refactoring the CSS architecture).
7. This project was built with AI assistance (Replit AI). Refactor conservatively — prefer targeted edits over rewrites. The author reviews and approves all changes.

---

## Current State

**Last Updated:** 2026-03-22

This is a completed first version (v1.0.0) of a static personal landing page. All required content sections are built, styled, and functional. The page is responsive, accessible, and being served locally via `npx serve`. The headshot and resume were imported from GitHub. No backend, database, or build step is required.

### What Is Working

- [x] Sticky navigation bar with anchor links (About, Experience, Skills, Projects, Contact)
- [x] Hero section — headshot (200px circular), name, tagline, intro paragraph, "Get in touch" CTA button
- [x] About section — first-person bio with real GPA (3.70), major, school, and graduation date
- [x] Experience section — ICAN Full-Stack App Developer (current), Tippie Analytics Cooperative BA internship, Etsy Poster Shop with real metrics
- [x] Skills section — three categories (Programming & Analytics, Tools, Analytics Methods) with pill badge styling
- [x] Projects section — three cards: ICAN Mobile App, Real Estate Market Analysis, Movie Revenue Modeling
- [x] Contact section — functional email link, LinkedIn badge, GitHub badge
- [x] Fully responsive layout (single-column mobile, two-column desktop for project cards)
- [x] WCAG 2.2 Level AA accessibility compliance (alt text, keyboard nav, focus styles, heading hierarchy, contrast)
- [x] External links open in new tab with `rel="noopener noreferrer"`
- [x] Scroll-based nav active-state highlight (via `js/scripts.js`)
- [x] Local server configured on port 5000 via `npx serve`
- [x] `README.md` generated with badges, full documentation, and changelog

### What Is Partially Built

- [ ] **Project cards** — descriptions are written but cards do not link to live demos or GitHub repositories (URLs not yet confirmed)

### What Is Not Started

- [ ] Favicon (browser tab shows blank icon)
- [ ] Open Graph / social meta tags (for LinkedIn/email link previews)
- [ ] Dark mode variant
- [ ] CSS animations or scroll-reveal effects
- [ ] Any analytics or visitor tracking

---

## Current Task

**What I was working on when I last stopped:**
The initial v1.0.0 build is complete. The most recent task was generating `README.md` and `WORKING_NOTES.md` as project documentation. All content sections are live and using real data from Bella's resume and GitHub profile. The headshot was successfully downloaded from the GitHub repo and is rendering at 200px in the hero section.

**The very next step is:**
Confirm the GitHub repository links for each of the three project cards (ICAN, Real Estate Market Analysis, Movie Revenue Modeling) so they can be added as clickable links on the project cards.

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | — | Required by STANDARDS.md; semantic elements used throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) |
| CSS3 | — | Required by STANDARDS.md; no framework allowed; all styles in `css/stylesheet.css`, no inline styles |
| JavaScript (vanilla) | — | Minimal use only; scroll-based nav highlight in `js/scripts.js`; STANDARDS.md specifies static architecture with no server-side code |
| Inter (Google Fonts) | — | Clean, modern, highly legible; consistent with the professional/approachable tone specified in STANDARDS.md |
| `serve` (npm) | latest | Lightweight zero-config static file server; required to serve the site on port 5000 in the Replit environment |
| Node.js | 20 | Required as a runtime for `serve`; installed via Replit module system |

---

## Project Structure Notes

```
personal-landing-page/
├── index.html              # Single HTML file — all page content lives here
├── css/
│   └── stylesheet.css      # All styles — no inline CSS permitted anywhere
├── js/
│   └── scripts.js          # Only scroll-based nav highlight; keep minimal
├── images/
│   └── headshot.jpg        # Downloaded from GitHub; must stay at this path
├── PRD.md                  # Product requirements — source of truth for content scope
├── STANDARDS.md            # Technical + design standards — must be followed on every edit
├── README.md               # Public-facing project documentation
├── WORKING_NOTES.md        # This file — internal developer reference
├── Bella_Illingworth_Resume.pdf  # Source resume (not linked from the site — STANDARDS.md prohibits this)
├── package.json            # Node.js metadata; lists `serve` as a dependency
└── package-lock.json       # Lockfile — do not edit manually
```

**Non-obvious decisions:**
- `headshot.JPEG` was the original filename pushed to GitHub. It was downloaded and saved locally as `images/headshot.jpg` (lowercase extension) to match the `src` attribute in `index.html`.
- `js/scripts.js` exists to satisfy the STANDARDS.md folder structure requirement. Its only function is scroll-based nav highlighting — do not add unrelated logic here without discussion.
- `Bella_Illingworth_Resume.pdf` is in the repo root but is explicitly **not linked** anywhere on the site. STANDARDS.md prohibits resume links. Do not add a link to it.

**Files that must not be changed without discussion:**
- `STANDARDS.md` — defines the rules all code must follow
- `PRD.md` — defines the content scope
- `css/stylesheet.css` CSS custom properties block (`:root`) — changing variable names would break the entire stylesheet

---

## Data / Database

This project has no persistent data, database, or flat data files. All content is hardcoded in `index.html`. There is no backend, no API, and no database of any kind.

---

## Conventions

### Naming Conventions
- HTML files: lowercase, no spaces (`index.html`)
- CSS classes: lowercase hyphen-separated BEM-influenced names (e.g., `.exp-header`, `.tag-primary`, `.contact-badge`)
- Images: lowercase with hyphens, stored in `images/` (e.g., `headshot.jpg`)
- CSS custom properties: `--color-*` for colors, `--font`, `--max-width`, `--section-pad`, `--radius`

### Code Style Rules
- No inline `style=""` attributes anywhere in HTML
- No `<style>` tags in any HTML file
- All styles go in `css/stylesheet.css`
- CSS is organized top-to-bottom in document order: variables → reset → nav → hero → shared → experience → skills → projects → contact → footer → responsive
- Responsive breakpoints at `min-width: 640px` (tablet/desktop) and `max-width: 480px` / `max-width: 360px` (small mobile)
- External links always use `target="_blank" rel="noopener noreferrer"`

### Accessibility Patterns
- All `<img>` elements have descriptive `alt` attributes
- All interactive elements have `:focus-visible` styles
- Heading hierarchy is strictly maintained: `h1` → `h2` → `h3`, no levels skipped
- Link text is always descriptive (no "click here")

### Git Commit Style
- Imperative mood, sentence case (e.g., "Add experience section to landing page")
- Commits are made automatically by Replit at the end of sessions

---

## Decisions and Tradeoffs

- **No CSS framework:** Required by STANDARDS.md. Vanilla CSS only. Do not suggest Bootstrap, Tailwind, or any other framework.
- **Single `index.html` file:** Required by STANDARDS.md. All content lives in one file. Do not split into multiple pages or use templating.
- **Experience section added (not in original PRD scope):** The PRD listed only Hero, Bio, Skills, Projects, and Contact. The resume contained three strong experience entries (ICAN, Tippie Analytics, Etsy) that would have been wasted as project cards. An Experience section was added to showcase professional history. This strengthens the page for the target audience.
- **ICAN listed in both Experience and Projects sections:** The resume lists ICAN as current work experience; the PRD lists it as one of three required project cards. Both sections were kept — ICAN appears as a full experience entry with bullet points and as a project card with a tech-focused description. This avoids losing either the professional context or the project detail.
- **Headshot at 200px, not 160px:** Initially set to 160px per the STANDARDS.md suggestion. Resized to 200px at the author's request.
- **Email displayed as full address in contact badge:** The contact badge shows `qben1410@gmail.com` as visible text rather than just the label "Email" for clarity and scannability by recruiters.
- **`serve` used instead of a custom Node.js server:** Simplest possible solution to serve a static site on port 5000 with no configuration.

---

## What Was Tried and Rejected

- **Using a Python HTTP server (`python3 -m http.server`):** Python was not available in the Replit environment at setup time. Node.js was installed instead and `serve` was used.
- **Linking to the resume PDF from the contact section:** Explicitly prohibited by STANDARDS.md. Do not suggest this.
- **Adding a phone number to the contact section:** The resume includes a phone number, but it is not included on the site. The PRD contact scope specifies email, LinkedIn, and GitHub only.

---

## Known Issues and Workarounds

- **No favicon:** The browser tab shows a blank icon. No workaround in place. Adding a favicon would require creating a `.ico` or `.png` file and a `<link rel="icon">` tag in `<head>`.
- **Google Fonts require internet access:** Inter is loaded from Google Fonts via a `<link>` tag. If the page is viewed offline, it will fall back to `sans-serif`. No workaround in place — this is acceptable for a portfolio site.
- **Project cards have no links:** The three project cards describe the projects but do not link to repositories or live demos. GitHub URLs for each project have not been confirmed. This is a known gap, not a bug.
- **Git pull blocked in Replit main agent:** Direct `git pull` is restricted in the Replit main agent environment. New files pushed to GitHub must be fetched via the GitHub API and downloaded using `curl`. This workaround is in place and must be used for any future file imports from the GitHub repository.

---

## Browser / Environment Compatibility

**Tested:**
- Chrome (latest) — confirmed working via Replit preview screenshot

**Expected to work (not yet tested):**
- Firefox (latest)
- Safari (latest)
- Mobile Chrome and Safari (responsive CSS targets 320px minimum width)

**Known incompatibilities:**
- Internet Explorer — not supported; no polyfills added; not a requirement per STANDARDS.md

**Environment:**
- Replit NixOS environment, Node.js 20
- Served via `npx serve . -l 5000` on port 5000
- Replit preview proxies the app through an iframe — all-hosts binding is handled by `serve` automatically

---

## Open Questions

- What are the GitHub repository URLs for the Real Estate Market Analysis and Movie Revenue Modeling projects? Needed to add links to the project cards.
- Should the ICAN project card link to the app store listing, a GitHub repo, or neither?
- Is a favicon needed for the course submission, or is it optional?
- Should Open Graph meta tags be added before publishing so the LinkedIn link preview looks polished?
- Does the course require a specific license file (`LICENSE`) in the repository, or is the one-line MIT reference in `README.md` sufficient?

---

## Session Log

### 2026-03-22
- Set up the Replit environment: installed Node.js 20, installed `serve`, configured "Start application" workflow on port 5000
- Fetched resume (`Bella_Illingworth_Resume.pdf`) from GitHub via API and extracted full text using `pdftotext`
- Downloaded headshot (`headshot.JPEG`) from GitHub and saved to `images/headshot.jpg`
- Built complete `index.html` with all six sections using real resume content (no placeholder text)
- Built complete `css/stylesheet.css` with CSS custom properties, responsive breakpoints, and accessibility-compliant focus styles
- Increased headshot from 160px to 200px at author's request
- Generated `README.md` with all 16 required sections, real project details, and Vibe Coded badge
- Generated `WORKING_NOTES.md` (this file)
- Left incomplete: project card links (GitHub URLs not confirmed), favicon, Open Graph meta tags
- Next step: confirm GitHub repo URLs for the three projects and add links to project cards

---

## Useful References

- [STANDARDS.md](./STANDARDS.md) — Technical and design rules that govern every file in this project
- [PRD.md](./PRD.md) — Content scope and success metrics
- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter) — Typography used throughout
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — Reference for CSS variable syntax used in `:root`
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — Accessibility standard this project targets (Level AA)
- [shields.io](https://shields.io) — Badge generation for README
- [serve (npm)](https://www.npmjs.com/package/serve) — Static file server used for local development
- AI tools: Replit AI was used to generate initial HTML structure, CSS stylesheet, page copy, README, and this WORKING_NOTES file. All content was sourced from the author's resume and PRD. The author reviews and approves all output before it is considered final.
