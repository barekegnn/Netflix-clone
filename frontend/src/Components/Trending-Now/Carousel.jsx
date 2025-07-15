import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ title, fetchFunction }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFunction()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [fetchFunction]);

  if (loading) return <div className="carousel__loading">Loading...</div>;
  if (error) return <div className="carousel__error">Error: {error}</div>;

  return (
    <section className="carousel">
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__row">
        {items.map((item) => (
          <div className="carousel__item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="carousel__image"
            />
            <div className="carousel__caption">{item.title || item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
