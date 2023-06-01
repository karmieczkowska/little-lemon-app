import "../styles/HeroSection.css";
import HeroImg from "../assets/restaurantfood.jpg"

import React from 'react'
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero">
      <div className="content">
        <div className="info">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Little Lomon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
          <button className="btn"><Link to="/reservations">Reserve a table</Link></button>
        </div>
        <div className="hero-photo">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection