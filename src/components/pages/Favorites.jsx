import '../../css/Favorites.css';
import { useMovieContext } from '../../context/MovieContext';
import MovieCard from '../MovieCard'; // Ensure MovieCard is imported

export default function Favorites() {
  const { favorites = [] } = useMovieContext(); // Ensure favorites is always an array

  if (favorites.length > 0) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
