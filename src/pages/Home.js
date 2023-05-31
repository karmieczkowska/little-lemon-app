import React from 'react'
import HeroSection from '../components/menu/MenuHeroSection'
import FoodCard from '../components/FoodCard'


function Home() {
  return (
    <div className="home">
      <HeroSection />
      <FoodCard />
    </div>
  )
}

export default Home