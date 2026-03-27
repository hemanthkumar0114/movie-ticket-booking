import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "15px",
        background: "linear-gradient(90deg, black, #1a1a1a)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ letterSpacing: "2px" }}>🎬 MOVIE BOOKING</h2>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        Home
      </Link>
    </motion.nav>
  );
}

export default NavBar;