const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Trending Movies (weekly)
export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return (await res.json()).results;
}

// Trending TV Shows (weekly)
export async function fetchTrendingTV() {
  const res = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch trending TV shows");
  return (await res.json()).results;
}

// Popular Movies
export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return (await res.json()).results;
}

// Popular TV Shows
export async function fetchPopularTV() {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular TV shows");
  return (await res.json()).results;
}

// Movie Details by ID
export async function fetchMovieDetails(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return await res.json();
}

// TV Show Details by ID
export async function fetchTVDetails(tvId) {
  const res = await fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch TV show details");
  return await res.json();
}

// Search Movies
export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return (await res.json()).results;
}

// Search TV Shows
export async function searchTV(query) {
  const res = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if (!res.ok) throw new Error("Failed to search TV shows");
  return (await res.json()).results;
}

// Get Movie Genres
export async function fetchMovieGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movie genres");
  return (await res.json()).genres;
}

// Get TV Genres
export async function fetchTVGenres() {
  const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch TV genres");
  return (await res.json()).genres;
}


