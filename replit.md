# Bella Illingworth — Personal Landing Page

## Project Overview

A personal professional landing page for Bella Illingworth, a Business Analytics and Information Systems student at the University of Iowa (graduating May 2026). Designed for recruiters and hiring managers to quickly understand her background, skills, and projects.

## Architecture

- **Type:** Static site — no framework, no backend, no database
- **Languages:** HTML5, CSS3, vanilla JavaScript
- **Folder structure:**
  ```
  /
  ├── index.html              # Single-page site
  ├── css/stylesheet.css      # All styles (no inline styles)
  ├── js/scripts.js           # Nav active-state highlight
  └── images/headshot.jpg     # Professional headshot
  ```

## Running the Project

Served via `npx serve . -l 5000` on port 5000.

- **Workflow:** "Start application" → `npx serve . -l 5000`
- **Deployment:** Static site, `publicDir: "."`

## Standards (per STANDARDS.md)

- No inline `style=""` attributes, no `<style>` tags
- All styles in `css/stylesheet.css`
- All images in `images/` referenced by relative path
- No resume links anywhere on the site
- WCAG 2.2 Level AA accessibility compliance
- Color palette: teal accent `#0D6E6E`, bg `#F8F9FA`, text `#212529`, alt bg `#E9ECEF`
- Font: Inter (Google Fonts), 16px body, 1.6 line height

## Content (Real — sourced from resume and PRD)

- **Education:** B.B.A., Business Analytics & Information Systems, U of Iowa, May 2026, GPA 3.70
- **Contact:** qben1410@gmail.com | linkedin.com/in/bella-illingworth | github.com/bellaillingworth
- **Sections:** Hero → About → Experience → Skills → Projects → Contact
- **Experience:** ICAN Full-Stack App Developer (Aug 2025–present), Tippie Analytics Cooperative BA Internship (Jun–Jul 2025), Etsy Poster Shop Owner (2021–2024)
- **Projects:** ICAN Mobile App, Real Estate Market Analysis (Python/Pandas), Movie Revenue Modeling (Orange/Regression)
