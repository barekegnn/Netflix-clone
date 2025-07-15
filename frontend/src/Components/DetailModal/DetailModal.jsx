import React, { useEffect, useState } from "react";
import { fetchMovieDetails, fetchTVDetails } from "../../Api/tmdb";
import "./DetailModal.css";

function DetailModal({ id, type, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchDetails = type === "movie" ? fetchMovieDetails : fetchTVDetails;
    fetchDetails(id)
      .then(setDetails)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, type]);

  if (!id) return null;

  return (
    <div className="detail-modal__overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-modal__close" onClick={onClose}>
          &times;
        </button>
        {loading && <div className="detail-modal__loading">Loading...</div>}
        {error && <div className="detail-modal__error">Error: {error}</div>}
        {details && (
          <>
            <img
              className="detail-modal__poster"
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={details.title || details.name}
            />
            <div className="detail-modal__info">
              <h2 className="detail-modal__title">
                {details.title || details.name}
              </h2>
              <div className="detail-modal__genres">
                {details.genres &&
                  details.genres.map((g) => (
                    <span key={g.id} className="detail-modal__genre">
                      {g.name}
                    </span>
                  ))}
              </div>
              <p className="detail-modal__overview">{details.overview}</p>
              <div className="detail-modal__meta">
                {type === "movie" && details.release_date && (
                  <span>Release: {details.release_date}</span>
                )}
                {type === "tv" && details.first_air_date && (
                  <span>First Air: {details.first_air_date}</span>
                )}
                {details.vote_average && (
                  <span>Rating: {details.vote_average.toFixed(1)} ⭐</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailModal;
