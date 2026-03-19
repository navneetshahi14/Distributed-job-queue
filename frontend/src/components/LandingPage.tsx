import React from 'react'
import Navbar from './Navbar'
import HeroSection from './LandingPage/HeroSection'

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#F6F6F4]'>
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default LandingPage