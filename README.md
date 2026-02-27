# Seniors Fair SG Frontend

A React + Vite frontend for the Seniors Fair SG website.

This project provides a multi-page event website experience for visitors and exhibitors, including event highlights, exhibitor package information, floor plan previews, and a contact form.

## Features

- Home page with promotional carousel and event overview
- Exhibitors page with booth package cards and sales kit section
- Floor plan page with venue stats and layout placeholder
- About page with event mission and organizer information
- Contact page with client-side validated inquiry form
- Shared navigation, countdown bar, and footer across all routes

## Tech Stack

- React 19
- React Router DOM 7
- Vite 7
- ESLint 9

## Routes

- `/` - Home
- `/exhibitors` - Exhibitors
- `/floor-plan` - Floor Plan
- `/about` - About
- `/contact` - Contact

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app runs on the Vite local development server (typically `http://localhost:5173`).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production assets into `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks
  
### One-time GitHub setup for Deploying to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- Builds using a relative base path (`npm run build -- --base=./`) so no app or Vite config changes are needed.
- Publishes the built `dist/` folder with official GitHub Pages actions.
- Copies `index.html` to `404.html` for React Router SPA fallback on refresh/direct URL access.

1. Push to the `main` branch (or run the workflow manually from Actions).
2. In GitHub, go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

After the workflow finishes, your site will be live on the Pages URL shown in the workflow run.

## Project Structure

```text
src/
  components/   Reusable UI blocks (Navbar, Footer, Carousel, etc.)
  pages/        Route-level pages
  App.jsx       Route configuration and shared layout
  main.jsx      Application entry point
public/
  assets/branding/
```

## Current Content State

Some website content is still intentionally marked as "Coming Soon" while final event details, sponsorship information, and downloadable assets are being prepared.
