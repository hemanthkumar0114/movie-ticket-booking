import { useNavigate, useParams } from "react-router-dom";
import { movies } from "../api/movies";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import SeatSelection from "../Components/SeatSelection";

function Booking() {

  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id == id);

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  // Booking details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(movie.time);
  const [payment, setPayment] = useState("UPI");

  // Seat selection state
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Booking ID
  const bookingId = Math.floor(Math.random() * 100000);

  // Total calculation
  const total = selectedSeats.length * movie.price;

  // Confirm Booking
  const confirmBooking = () => {

    if (!name || !phone || !date || selectedSeats.length === 0) {
      Swal.fire("Please fill all details and select seats");
      return;
    }

    const bookingData = {
      bookingId,
      movie,
      name,
      phone,
      date,
      time,
      payment,
      seats: selectedSeats,
      total
    };

    // Save to localStorage
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(bookingData);
    localStorage.setItem("history", JSON.stringify(history));

    // Success alert
    Swal.fire(
      "Booking Successful!",
      "Your ticket is confirmed",
      "success"
    );

    // Navigate to bill page
    navigate("/bill", {
      state: bookingData
    });
  };

  return (
    <div className="booking-container">

      <motion.div className="booking-card"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        // style={{
        //   textAlign: "center",
        //   padding: "20px"
        // }}
      >

        <h2>Booking for {movie.name}</h2>

        <img src={movie.image} width="200" />

        <h3>Price per seat: ₹{movie.price}</h3>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        {/* Phone */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br />

        {/* Time */}
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option>10:00 AM</option>
          <option>1:00 PM</option>
          <option>6:00 PM</option>
        </select>

        <br />

        {/* Seat Selection Component */}
        <SeatSelection
          price={movie.price}
          onSeatSelect={(seats) => setSelectedSeats(seats)}
        />

        <br />

        {/* Payment */}
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>UPI</option>
          <option>Card</option>
          <option>Net Banking</option>
          <option>Cash</option>
        </select>

        <h2>Total: ₹{total}</h2>

        <button
          onClick={confirmBooking}
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px"
          }}
        >
          Confirm Booking
        </button>

      </motion.div>

    </div>
  );
}

export default Booking;