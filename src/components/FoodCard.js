import React from 'react';
import "../styles/FoodCard.css";

import Bruchetta from "../assets/bruchetta.jpg"
import GreekSalad from "../assets/greek salad.jpg";
import LemonDessert from "../assets/lemon-dessert.jpg"
import { Link } from 'react-router-dom';

function FoodCard() {
  return (
    <div className="specials">
      <div className="heading">
        <h1>Our specials</h1>
        <button className="btn"><Link to="/menu">Our Menu</Link></button>
      </div>
      <div className="specials-container">
        <div className="card">
          <img src={Bruchetta} alt="Bruchetta" />
          <h3>Bruchetta</h3>
          <p>Grilled bread with garlic and topped with olive oil</p>
        </div>
        <div className="card">
          <img src={GreekSalad} alt="Greek salad" />
          <h3>Greek Salad</h3>
          <p>Fresh salad, onion, olives, feta cheese, dressing</p>
        </div>
        <div className="card">
          <img src={LemonDessert} alt="Lemon Dessert"/>
          <h3>Lemon Dessert</h3>
          <p>Freshly baked. Light, fluffy, and deliciously tangy</p>
        </div>
      </div>
    </div>
  )
}

export default FoodCard