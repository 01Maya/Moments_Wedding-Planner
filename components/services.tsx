"use client";

import React, { useState } from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: "rose" | "amber" | "sky" | "emerald";
}

export default function Services() {
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false, false]);

  const services: Service[] = [
    {
      icon: "🏛️",
      title: "Venue & Décor",
      description: "Curated venue selection and stunning décor design that reflects your style.",
      features: ["Custom themes", "Lighting & setup", "Furniture arrangement"],
      color: "rose",
    },
    {
      icon: "🍽️",
      title: "Catering & Bar",
      description: "Exceptional culinary experiences and beverage selections for your guests.",
      features: ["Menu customization", "Premium bar", "Dessert station"],
      color: "amber",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Professional photography capturing every precious moment.",
      features: ["Pre-wedding shoots", "Drone coverage", "Album design"],
      color: "sky",
    },
    {
      icon: "✓",
      title: "Coordination",
      description: "Complete day-of coordination ensuring everything runs seamlessly.",
      features: ["Timeline planning", "Vendor coordination", "Guest management"],
      color: "emerald",
    },
  ];

  const colorMap = {
    rose: { bg: "bg-rose-50/60", text: "text-rose-600", dot: "bg-rose-600", gradient: "from-rose-200/20 to-rose-100/20" },
    amber: { bg: "bg-amber-50/60", text: "text-amber-600", dot: "bg-amber-600", gradient: "from-amber-200/20 to-amber-100/20" },
    sky: { bg: "bg-sky-50/60", text: "text-sky-600", dot: "bg-sky-600", gradient: "from-sky-200/20 to-sky-100/20" },
    emerald: { bg: "bg-emerald-50/60", text: "text-emerald-600", dot: "bg-emerald-600", gradient: "from-emerald-200/20 to-emerald-100/20" },
  };

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle individual card
      return newState;
    });
  };

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50/20 via-purple-50/20 to-blue-50/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Comprehensive wedding planning services designed to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const color = colorMap[service.color];
            const isExpanded = expandedCards[index];

            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border border-gray-200 shadow-lg backdrop-blur-md ${color.bg} cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
                onClick={() => toggleCard(index)}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.gradient} opacity-0 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl shadow-md ${color.text}`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${color.text}`}>{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">{service.description}</p>

                  {/* Features with colored bullets & smooth expand */}
                  <ul
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 py-1">
                        <span className={`mt-2 w-2 h-2 ${color.dot} rounded-full flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand/Collapse Arrow */}
                  <div
                    className={`absolute top-4 right-4 transform transition-transform duration-300 text-xl text-[rgba(248,48,137,1)] ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                  🔻
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
