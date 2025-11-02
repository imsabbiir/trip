import AboutSection from '@/components/AboutSection'
import Blogs from '@/components/Blog/Blogs'
import Guide from '@/components/Guide'
import HeroSection from '@/components/HeroSection'
import Plans from '@/components/plans/Plans'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import TravelSlider from '@/components/TravelSlider'
import React from 'react'

function Home() {
  return (
    <div>
      {/* <TravelSlider /> */}
      <HeroSection />
      <Services />
      <AboutSection />
      <Plans />
      <Guide />
      <Testimonials />
      <Blogs />
    </div>
  )
}

export default Home



