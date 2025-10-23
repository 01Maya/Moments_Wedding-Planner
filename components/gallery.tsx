"use client"

import { useEffect, useRef, useState } from "react"

export default function Gallery() {
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

  const images = [
    {
      src: "/elegant-outdoor-wedding-ceremony-with-flowers.jpg",
      alt: "Outdoor wedding ceremony",
    },
    {
      src: "/romantic-wedding-portrait.png",
      alt: "Bride and groom portrait",
    },
    {
      src: "/wedding-reception-dinner-elegant-setup.jpg",
      alt: "Wedding reception",
    },
    {
      src: "/bride-getting-ready-wedding-morning.jpg",
      alt: "Bride getting ready",
    },
    {
      src: "/wedding-ceremony-arch-flowers-decoration.jpg",
      alt: "Wedding ceremony arch",
    },
    {
      src: "/couple-dancing-at-wedding-reception.jpg",
      alt: "First dance",
    },
  ]

  return (
    <section id="gallery" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/40 to-rose-100/50 pointer-events-none"></div>

      <div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-gradient-to-br from-purple-300/15 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
          >
            Our Gallery
          </h2>
          <p
            className={`text-gray-600 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            A glimpse into the beautiful moments we've created.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`aspect-square overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 border border-rose-200/30 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
