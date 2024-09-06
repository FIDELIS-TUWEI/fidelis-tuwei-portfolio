import React from 'react'
import Navbar from './(home)/components/Navbar';
import HeroSection from './(home)/components/HeroSection';

const page = () => {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default page;