# Bella Illingworth — Personal Landing Page

## Project Overview

A personal professional landing page for Bella Illingworth, a Business Analytics and Information Systems student at the University of Iowa (graduating May 2026). Designed for recruiters and hiring managers to quickly understand her background, skills, and projects.

## Architecture

- **Type:** Static site — no framework, no backend, no database
- **Languages:** HTML5, CSS3, vanilla JavaScript
- **Folder structure:**
  ```
  /
  ├── index.html          # Single-page site
  ├── css/stylesheet.css  # All styles (no inline styles permitted)
  ├── js/scripts.js       # Minimal JS (nav highlight only)
  └── images/             # Headshot and any local images
  ```

## Running the Project

The site is served via `npx serve . -l 5000` on port 5000.

- **Workflow:** "Start application" → `npx serve . -l 5000`
- **Deployment:** Static site, `publicDir: "."`

## Standards

See `STANDARDS.md` for full coding and design standards. Key rules:
- No inline `style=""` attributes, no `<style>` tags
- All styles in `css/stylesheet.css`
- All images in `images/` referenced by relative path
- No resume links anywhere on the site
- WCAG 2.2 Level AA accessibility compliance
- Color palette: teal accent `#0D6E6E`, bg `#F8F9FA`, text `#212529`
- Font: Inter (Google Fonts)

## Content

- **Hero:** Name, tagline, intro, "Get in touch" CTA
- **About:** Bio + University of Iowa, BAIS, May 2026
- **Skills:** Programming & Analytics / Tools / Analytics Methods
- **Projects:** ICAN Mobile App, Real Estate Market Analysis, Movie Revenue Modeling
- **Contact:** Email, LinkedIn, GitHub badges

## Notes

- `images/headshot.jpg` is a placeholder path — Bella needs to upload her actual headshot
- Update email and social links in `index.html` before publishing
