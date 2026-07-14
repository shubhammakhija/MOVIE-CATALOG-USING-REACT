# Movie Catalog Using React

A React + Vite movie catalog app that lets users discover popular movies, search by title, and save favorites in local storage.

## Live Demo

https://movie-catalog-using-react.vercel.app/

## Features

- Browse popular movies from TMDB
- Search movies by title
- Add/remove favorites
- Favorites persist using browser localStorage
- Simple routing between Home and Favorites pages

## Tech Stack

- React 18
- React Router
- Vite
- CSS
- TMDB API

## Project Structure

```text
frontend/
  src/
    components/   # Reusable UI components (MovieCard, Navbar)
    contexts/     # App state with MovieContext
    pages/        # Route pages (Home, Favorites)
    services/     # API calls
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
cd frontend
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Notes

- The app currently uses TMDB API endpoints for popular and search results.
- Favorites are stored locally in the browser and are not synced across devices.
