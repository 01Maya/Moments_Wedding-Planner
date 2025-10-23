"use client"

import { useEffect, useRef, useState } from "react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-50/40 to-purple-100/50 pointer-events-none"></div>

      <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-rose-300/20 to-transparent blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-gradient-to-br from-purple-300/15 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-6 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
        >
          Let's Create Magic
        </h2>
        <p
          className={`text-lg text-gray-600 mb-12 leading-relaxed transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Ready to plan your dream wedding? Get in touch for a free consultation.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1">
            Schedule Consultation
          </button>
          <button className="px-8 py-3 border-2 border-rose-300 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 ease-out hover:scale-105 hover:border-rose-500">
            Contact via Email
          </button>
        </div>
      </div>
    </section>
  )
}
