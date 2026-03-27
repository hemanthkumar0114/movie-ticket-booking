import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <img src={movie.image} alt={movie.name} />

      <h3>{movie.name}</h3>

      <p>Price: ₹{movie.price}</p>

      <p>Time: {movie.time}</p>

      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default MovieCard;