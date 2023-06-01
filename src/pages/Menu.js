import React from 'react';

import '../styles/Menu.css';
import MenuOfTheDay from '../components/menu/MenuOfTheDay';
import Starters from '../components/menu/Starters';
import Pasta from '../components/menu/Pasta';
import Pizza from '../components/menu/Pizza';
import Beverages from '../components/menu/Beverages';
import HeroSectionComponent from '../components/HeroSectionComponent';

function Menu () {

  return (
    <div>
      <HeroSectionComponent 
        heading="MENU"
        text="All dishes are freshly prepared with carefully selected ingredients"
      />
      <div className="menu">
        <MenuOfTheDay />
        <Starters />
        <Pasta />
        <Pizza />
        <Beverages />
      </div>
    </div>
  )
};

export default Menu;