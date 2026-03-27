import MovieCard from "../Components/MovieCard";
import { movies } from "../api/movies";

function Home() {
  return (
    <div>

      <h1>🎬 Movies</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default Home;