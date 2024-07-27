import React from 'react'
import NavbarSection from '../Components/NavbarSection'
import HeroSection from '../Components/HeroSection'
import ContentSection from '../Components/ContentSection'
import GallerySection from '../Components/GallerySection'
import HoverSection from '../Components/HoverSection'
import Feature from '../Components/Feature'
import PricingSection from '../Components/PricingSection'
import TeamSection from '../Components/TeamSection'
import TestimonialsSection from '../Components/TestimonialsSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'

const LandingPage = ({change}) => {
  return (
    <div>
        <NavbarSection change={change}/>
        <HeroSection/>
        <ContentSection/>
        <GallerySection/>
        <HoverSection/>
        <Feature/>
        <PricingSection/>
        <TeamSection/>
        <TestimonialsSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage