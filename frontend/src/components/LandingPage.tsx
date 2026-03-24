import React from 'react'
import Navbar from './Navbar'
import HeroSection from './LandingPage/HeroSection'
import FeaturesSection from './LandingPage/FeatureSection'
import ArchitectureSection from './LandingPage/ArchitectureSection'
import DashboardPreview from './LandingPage/DashboardPreview'

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#F6F6F4]'>
        <Navbar />
        <HeroSection />
        {/* <div className="bg-transparent w-full h-screen"></div> */}
        <FeaturesSection />
        <ArchitectureSection />
        <DashboardPreview />
    </div>
  )
}

export default LandingPage