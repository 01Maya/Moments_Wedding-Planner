"use client"

import { useEffect, useRef, useState } from "react"

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah & James",
      text: "Moments made our wedding day absolutely perfect. Every detail was thoughtfully executed.",
      rating: 5,
    },
    {
      name: "Emma & Michael",
      text: "Professional, creative, and genuinely caring. They understood our vision completely.",
      rating: 5,
    },
    {
      name: "Jessica & David",
      text: "From planning to execution, everything was seamless. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-purple-50/40 to-pink-100/50 pointer-events-none"></div>

      <div
        className="absolute top-10 right-20 w-52 h-52 rounded-full bg-gradient-to-br from-pink-300/20 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
          >
            Loved by Couples
          </h2>
          <p
            className={`text-gray-600 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Real stories from couples we've had the honor to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-white/60 backdrop-blur-sm border border-rose-200/40 rounded-xl hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:bg-white/80 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-rose-400 animate-fade-in text-lg"
                    style={{ animationDelay: `${0.1 * i}s` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <p className="font-serif font-bold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
