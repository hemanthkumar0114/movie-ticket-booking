import { useState } from "react";

function SeatSelection({ price, onSeatSelect }) {

  const seats = [
    "A1","A2","A3",
    "B1","B2","B3",
    "C1","C2","C3"
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {

    let updated;

    if (selectedSeats.includes(seat)) {
      updated = selectedSeats.filter(s => s !== seat);
    } 
    else {
      updated = [...selectedSeats, seat];
    }

    setSelectedSeats(updated);
    onSeatSelect(updated);
  };

  return (
    <div className="seat-selection-box">

      <h3>Select Seats</h3>

      <div className="seat-grid">

        {seats.map((seat) => (

          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={
              selectedSeats.includes(seat)
                ? "seat selected"
                : "seat"
            }
          >
            {seat}
          </button>

        ))}

      </div>

      <div className="seat-info">

        <h4>Total Seats: {selectedSeats.length}</h4>

        <h4>
          Total Price: ₹{selectedSeats.length * price}
        </h4>

      </div>

    </div>
  );
}

export default SeatSelection;