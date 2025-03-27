"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          // Add a small delay to ensure smooth scrolling after page load
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </motion.div>
    </AnimatePresence>
  )
}

