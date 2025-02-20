import '../css/MovieCard.css';
import { useMovieContext } from '../context/MovieContext';

export default function MovieCard({ movie = {} }) {  
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite?.(movie?.id); 

  function onFavoriteClick(e) {
    e.stopPropagation(); 
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/fallback-poster.png"; 

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie?.title || "No Title Available"} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            {favorite ? "❤️" : "🤍"}  {/* Change heart color */}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie?.title || "Unknown Title"}</h3>
        <p>{movie?.release_date?.split('-')[0] || "N/A"}</p>
      </div>
    </div>
  );
}
