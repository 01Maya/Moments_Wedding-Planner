"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavClick?: () => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, onNavClick }: NavigationProps) {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    onNavClick?.()
  }

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-rose-50/95 to-pink-50/95 backdrop-blur-md border-b border-rose-200/30 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"
          >
            Moments
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-rose-600 transition-colors duration-300 ease-out font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">
            Book Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-rose-100/50 rounded-lg transition-colors duration-200"
          >
            {mobileMenuOpen ? <X size={24} className="text-rose-600" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-sm text-gray-700 hover:text-rose-600 transition-colors duration-300 py-2 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 ease-out">
              Book Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
