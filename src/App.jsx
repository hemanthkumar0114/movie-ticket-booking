import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import Bill from "./pages/Bill";
import History from "./pages/History";
// import assets from "./assets";
import "./index.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} /> 
        <Route path="/bill" element={<Bill />}/>
        <Route path="/history" element={<History />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

