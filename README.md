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

## Run With Docker

### Build the image

```bash
docker build -t seniorfair-frontend:local .
```

### Run the container

```bash
docker run --rm -p 8080:80 seniorfair-frontend:local
```

The production build will be available at `http://localhost:8080`.

### Run with Docker Compose

```bash
docker compose up --build
```

This setup uses a multi-stage build:

- `node:20-alpine` builds the Vite app
- `nginx:alpine` serves the compiled `dist/` output
- `docker/nginx/default.conf` enables React Router SPA fallback via `try_files`

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
