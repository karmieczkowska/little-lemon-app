import React from 'react'
import ImageGallery from '../components/ImageGallery'
import HeroSectionComponent from '../components/HeroSectionComponent'

function About() {
  return (
    <div>
      <HeroSectionComponent
      heading="About us"
      text="Learn more about us by viewing our photo gallery"
      />
      <ImageGallery />
    </div>
  )
}

export default About