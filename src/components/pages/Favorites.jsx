import '../../css/Favorites.css';
import { useMovieContext } from '../../context/MovieContext';

export default function Favorites() {
  const {favorites} = useMovieContext();

  if (favorites) {
    return (
    <div className="movies-grid">
        {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
    </div>
    )
  }

  return (
    <>
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they appear here</p>
      </div>
    </>
  )
}