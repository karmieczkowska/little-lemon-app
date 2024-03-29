import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
//import "react-day-picker/dist/style.css"

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservation";
import Login from "./pages/Login";
import ConfirmedBooking from "./pages/ConfirmedBooking";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
         <Footer />
       </div>
     </Router>
  );
}

export default App;