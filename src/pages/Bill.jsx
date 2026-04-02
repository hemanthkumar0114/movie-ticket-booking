import { useLocation, Link } from "react-router-dom";

function Bill() {

  const location = useLocation();

  const data = location.state;

  if (!data) {
    return <h2>No Booking Found</h2>;
  }

  return (
    <div className="bill-container">

      <h1>🎬 Movie Ticket Bill</h1>

      <img src={data.movie.image} width="200" />

      <h2>{data.movie.name}</h2>

      <p>Booking ID: {data.bookingId}</p>
      <p>Name: {data.name}</p>
      <p>Phone: {data.phone}</p>
      <p>Date: {data.date}</p>
      <p>Time: {data.time}</p>
      <p>Payment: {data.payment}</p>
      <p>Tickets: {data.tickets}</p>

      <h2>Total: ₹{data.total}</h2>

      <Link to="/">
        <button>Go Home</button>
      </Link>

    </div>
  );
}

export default Bill;