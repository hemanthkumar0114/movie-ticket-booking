import { useParams } from "react-router-dom";
import { movies } from "../api/movies";
import { useState } from "react";
import { motion } from "framer-motion";

function Booking() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id == id);

  const [tickets, setTickets] = useState(1);

  const total = tickets * movie.price;

  return (
    <div className="booking-container">
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      style={{
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h2>Booking for {movie.name}</h2>

      <img src={movie.image} width="200" />

      <h3>Price: ₹{movie.price}</h3>

      <input
        type="number"
        value={tickets}
        onChange={(e) => setTickets(Number(e.target.value))}
        style={{
          padding: "5px",
          margin: "10px"
        }}
      />

      <h2>Total: ₹{total}</h2>

      <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={() =>  {
          if (total<=0){

            alert("no tickets booked");
        }
          else{
            alert(`${tickets} Ticket Booked Successfully`);
          }
          }
        }
        
      >
        Confirm Booking
      </button>
    </motion.div>
    </div>
  );
}

export default Booking;