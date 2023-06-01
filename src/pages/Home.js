import React from 'react';
import HeroSection from '../components/HeroSection';
import FoodCard from '../components/FoodCard';


function Home() {
  return (
    <div className="home">
      <HeroSection />
      <FoodCard />
    </div>
  )
}

export default Home