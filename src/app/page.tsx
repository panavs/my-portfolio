// app/page.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.9])
  
  return (
    <main ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* Full-screen hero section */}
      <motion.div 
        style={{ opacity, scale }}
        className="h-screen sticky top-0 overflow-hidden"
      >
        <HeroSection />
      </motion.div>
      
      {/* Content sections - these will scroll over the hero */}
      <div className="relative z-10">
        {/* Projects section with curved top */}
        <section id="projects" className="bg-white bg-opacity-95 pt-24 relative shadow-xl rounded-t-3xl">
          <ProjectsSection />
        </section>
        
        {/* Skills section */}
        <section id="skills">
          <SkillsSection />
        </section>
        
        {/* Contact section */}
        <section id="contact">
          <ContactSection />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </main>
  )
}