# 🎬 Movie Catalog Using React

A responsive, lightning-fast web application built with **React 18**, **Vite**, and **React Router v7** that allows users to explore popular movies, search the global catalog in real-time, and curate a personalized list of favorite movies that persists across sessions.

## 🚀 Live Demo

**Experience the app live on Vercel:** 🔗 **[https://movie-catalog-using-react.vercel.app/](https://movie-catalog-using-react.vercel.app/)**

---

## ✨ Features

* **🔥 Discover Popular Movies:** Automatically fetches and displays trending and popular movies from The Movie Database (TMDB) API upon landing.
* **🔍 Instant Title Search:** Search for any movie by title with built-in loading states and error handling for a seamless user experience.
* **❤️ Persistent Favorites System:** Add or remove movies from your favorites with a single click. State is managed globally via React Context (`MovieContext`) and synced to browser `localStorage` so your favorites are saved even after closing the tab.
* **📱 Responsive Grid Layout:** Styled with modern CSS Grid and Flexbox, featuring smooth hover animations, dark-mode styling, and interactive poster overlays.
* **⚡ Client-Side Routing:** Fast, reload-free navigation between the **Home** feed and **Favorites** collection using React Router.

---

## 🛠️ Tech Stack

* **Frontend Framework:** [React 18](https://react.dev/) (Functional Components & Hooks)
* **Build Tool & Dev Server:** [Vite 6](https://vite.dev/)
* **Routing:** [React Router DOM v7](https://reactrouter.com/)
* **State Management:** React Context API (`useContext`, `useState`, `useEffect`)
* **Styling:** Custom CSS3 (Variables, Grid, Flexbox, Animations)
* **Data Source:** [TMDB REST API v3](https://developer.themoviedb.org/reference/intro/getting-started)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
shubhammakhija-movie-catalog-using-react/
├── README.md
└── frontend/
    ├── index.html                # Application entry HTML
    ├── package.json              # Dependencies and scripts
    ├── vite.config.js            # Vite bundler configuration
    ├── eslint.config.js          # ESLint rules and setup
    └── src/
        ├── main.jsx              # React root rendering & Router wrapper
        ├── App.jsx               # Main layout and route definitions
        ├── index.css             # Global reset and CSS variables
        ├── components/           # Reusable UI components
        │   ├── MovieCard.jsx     # Individual movie poster/info card
        │   └── Navbar.jsx        # Top navigation bar
        ├── contexts/             # Global state management
        │   └── MovieContext.jsx  # Favorites state & localStorage sync
        ├── css/                  # Component-specific stylesheets
        │   ├── App.css
        │   ├── Favorites.css
        │   ├── Home.css
        │   ├── MovieCard.css
        │   └── Navbar.css
        ├── pages/                # Route views
        │   ├── Home.jsx          # Popular movies feed & search interface
        │   └── Favorites.jsx     # Saved favorites view
        └── services/             # External API integrations
            └── api.js            # TMDB fetch methods (popular & search)
