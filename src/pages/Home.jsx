import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { movies as movieData } from "../api/movies";

function Home() {

  const [movies, setMovies] = useState(movieData);

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div>

      <h1>🎬 Movies</h1>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;