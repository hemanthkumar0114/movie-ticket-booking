import { Link } from "react-router-dom";

function MovieCard({ movie, deleteMovie }) {
  return (
    <div className="movie-card">

      <img src={movie.image} alt={movie.name} />

      <h3>{movie.name}</h3>

      <p>Price: ₹{movie.price}</p>

      <p>Time: {movie.time}</p>

      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>

      <button
        className="delete-btn"
        onClick={() => deleteMovie(movie.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default MovieCard;