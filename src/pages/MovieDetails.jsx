import { useParams, Link } from "react-router-dom";
import { movies } from "../api/movies";
import { motion } from "framer-motion";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id == id);

  return (
    <div className="movie-details">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>{movie.name}</h2>

      <img
        src={movie.image}
        width="250"
        style={{ borderRadius: "10px" }}
      />

      <p>Price: ₹{movie.price}</p>
      <p>Time: {movie.time}</p>

      <Link to={`/booking/${movie.id}`}>
        <button
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Book Ticket
        </button>
      </Link>
    </motion.div>
    </div>
  );
}

export default MovieDetails;