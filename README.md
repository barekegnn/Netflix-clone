# Netflix-clone
# 🎬 Netflix Clone (Frontend Only)

A modern **Netflix Clone Web App** built with **React.js**, powered by the **TMDB API** to display trending movies and trailers, and integrated with **Stripe Checkout** for a simulated subscription experience — all done using only **frontend technologies** and deployed on **GitHub Pages**.

> 💡 Built for learning, showcasing, and improving frontend skills — no backend required!

---

## 🔥 Features

- 🎞️ Browse trending movies and series (via TMDB API)
- 🎥 Watch trailers using YouTube iframe
- 🔎 Search for any movie or show
- 💳 Simulated premium subscription with Stripe hosted checkout
- 🛑 Protect content based on subscription status
- 🚀 Fully deployed on GitHub Pages

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React.js | Frontend UI framework |
| Axios | API requests |
| TMDB API | Movie & trailer data |
| Stripe | Payment simulation (hosted checkout) |
| React Router | Page routing |
| Tailwind CSS | UI styling |
| GitHub Pages | Deployment |

----

## 📁 Folder Structure

netflix-clone/
├── public/                   # Static public files (favicon, index.html)
├── src/                      # All source code lives here
│   ├── api/                  # API functions (TMDB, Stripe)
│   ├── assets/               # Images, icons, logos
│   ├── components/           # Reusable UI components (Navbar, MovieCard)
│   ├── context/              # Global state (if using Context API)
│   ├── pages/                # Route-based pages (Home, MovieDetail, Subscribe)
│   ├── styles/               # Custom CSS or Tailwind configs (optional)
│   ├── App.jsx               # Main App structure & routes
│   ├── index.js              # Entry point
├── .env                      # API keys (TMDB, Stripe)
├── .gitignore                # Ignore sensitive files
├── package.json              # Project metadata and scripts
├── README.md                 # Project documentation

