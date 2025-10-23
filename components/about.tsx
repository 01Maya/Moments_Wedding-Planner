"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CounterState {
  experience: number
  clients: number
  events: number
}

export default function About() {
  const [counters, setCounters] = useState<CounterState>({
    experience: 0,
    clients: 0,
    events: 0,
  })
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const targets = { experience: 7, clients: 300, events: 250 }
    const duration = 2000
    const startTime = Date.now()

    const animateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounters({
        experience: Math.floor(targets.experience * progress),
        clients: Math.floor(targets.clients * progress),
        events: Math.floor(targets.events * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animateCounters)
      }
    }

    animateCounters()
  }, [hasStarted])

  return (
    <section id="about" ref={sectionRef} className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 via-pink-50/30 to-purple-50/40 pointer-events-none"></div>

      {/* Floral decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-rose-200/15 to-transparent blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-purple-200/10 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src="/wedding-planner-team-founder.jpg"
                  alt="Wedding planner team"
                  width={350}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">Crafting Your Perfect Day</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Moments, we believe every wedding tells a unique love story. With over 15 years of experience in
                  the wedding industry, our dedicated team is passionate about transforming your vision into reality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in creating elegant, personalized celebrations that reflect your style and values. From
                  intimate ceremonies to grand receptions, we handle every detail with meticulous care and creativity.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">Our Values:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-1">✓</span>
                    <span>Personalized attention to every detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-1">✓</span>
                    <span>Creative excellence and innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-1">✓</span>
                    <span>Stress-free planning experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-1">✓</span>
                    <span>Timeless elegance and sophistication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Counters section */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {[
            { label: "Years of Experience", value: counters.experience, suffix: "+" },
            { label: "Happy Clients", value: counters.clients, suffix: "+" },
            { label: "Events Planned", value: counters.events, suffix: "+" },
          ].map((counter, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-rose-200/30 hover:border-rose-300/60 transition-all duration-500 hover:shadow-xl hover:bg-white/70 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-pink-100/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                  {counter.value}
                  {counter.suffix}
                </div>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {counter.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
