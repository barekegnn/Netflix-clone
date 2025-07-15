import React from "react";
import "./Trending-Now.css";

const MOCK_MOVIES = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    id: 2,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    id: 3,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    id: 4,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 5,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: 6,
    title: "Bridgerton",
    image: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0Uu6HwBvA.jpg",
  },
  {
    id: 7,
    title: "Lupin",
    image: "https://image.tmdb.org/t/p/w500/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg",
  },
  {
    id: 8,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
];

function TrendingNow() {
  return (
    <section className="trending">
      <h2 className="trending__title">Trending Now</h2>
      <div className="trending__carousel">
        {MOCK_MOVIES.map((movie) => (
          <div className="trending__item" key={movie.id}>
            <img
              src={movie.image}
              alt={movie.title}
              className="trending__image"
            />
            <div className="trending__caption">{movie.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingNow;
