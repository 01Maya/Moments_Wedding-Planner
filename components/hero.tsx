"use client"

import { useEffect, useState } from "react"


export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Your Love Story, Beautifully Planned with Elegance 💕"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-36 pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/40 via-pink-50/30 to-purple-100/40 pointer-events-none"></div>

      {/* Floral decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-300/20 to-transparent blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-300/15 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-pink-200/10 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight animate-fade-in-down">
          {displayText}
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Crafting elegant, personalized weddings tailored to your vision. From intimate gatherings to grand celebrations, we handle every detail with care.
        </p>
        <p className="text-2xl text-gray-600 leading-relaxed animate-fade-in-up mt-6" style={{ animationDelay: "0.2s" }}>
          <span className="relative font-normal bg-gradient-to-r from-rose-400 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-shiny">
            <i><b>Turning your dreams into cherished memories.</b></i>
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1">
            Book Free Consultation
          </button>
          <a href="#gallery">
           <button className="px-8 py-3 border-2 border-rose-300 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 ease-out hover:scale-105 hover:border-rose-500">
            View Our Work
           </button>
          </a>
        </div>
      </div>
    </section>
  )
}
