"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import FloralBackground from "@/components/floral-background"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <FloralBackground />
      <main className="min-h-screen">
        <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} onNavClick={handleNavClick} />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
