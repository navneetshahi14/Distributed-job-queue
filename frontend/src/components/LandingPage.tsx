import React from 'react'
import Navbar from './Navbar'
import HeroSection from './LandingPage/HeroSection'
import FeaturesSection from './LandingPage/FeatureSection'

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#F6F6F4]'>
        <Navbar />
        <HeroSection />
        {/* <div className="bg-transparent w-full h-screen"></div> */}
        <FeaturesSection />
    </div>
  )
}

export default LandingPage