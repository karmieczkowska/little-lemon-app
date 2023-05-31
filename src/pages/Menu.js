import React from 'react';
import HeroSection from '../components/menu/MenuHeroSection';

import '../styles/Menu.css';
import MenuOfTheDay from '../components/menu/MenuOfTheDay';
import Starters from '../components/menu/Starters';
import Pasta from '../components/menu/Pasta';
import Pizza from '../components/menu/Pizza';
import Beverages from '../components/menu/Beverages';

function Menu () {
  return (
    <div className="menu">
      <HeroSection />
      <MenuOfTheDay />
      <Starters />
      <Pasta />
      <Pizza />
      <Beverages />
    </div>
  )
};

export default Menu;