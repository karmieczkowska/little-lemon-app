import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservation";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/little-lemon-app" element={<Home />} />
          <Route path="/little-lemon-app/about" element={<About />} />
          <Route path="/little-lemon-app/menu" element={<Menu />} />
          <Route path="/little-lemon-app/reservations" element={<Reservations />} />
          <Route path="/little-lemon-app/login" element={<Login />} />
        </Routes>
         <Footer />
       </div>
     </Router>
  );
}

export default App;