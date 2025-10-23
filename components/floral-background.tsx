"use client"

export default function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* TOP BORDER - Soft pink florals flowing inward */}
      {/* Top left rose cluster */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-50 animate-float" style={{ animationDelay: "0s" }}>
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 10px 20px rgba(244, 194, 194, 0.08))" }}
        >
          {/* Large rose */}
          <defs>
            <filter id="watercolor">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
          </defs>

          {/* Rose petals - layered for watercolor effect */}
          <circle cx="150" cy="120" r="55" fill="#f4c2c2" opacity="0.4" filter="url(#watercolor)" />
          <circle cx="130" cy="100" r="50" fill="#f8d4d4" opacity="0.5" filter="url(#watercolor)" />
          <circle cx="170" cy="100" r="50" fill="#f8d4d4" opacity="0.5" filter="url(#watercolor)" />
          <circle cx="150" cy="80" r="45" fill="#fce4e4" opacity="0.6" filter="url(#watercolor)" />
          <circle cx="150" cy="120" r="30" fill="#f4c2c2" opacity="0.7" />

          {/* Eucalyptus leaves */}
          <path
            d="M 80 150 Q 70 170 85 190"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M 220 150 Q 230 170 215 190"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <ellipse cx="75" cy="160" rx="8" ry="12" fill="#a8b89a" opacity="0.4" transform="rotate(-30 75 160)" />
          <ellipse cx="225" cy="160" rx="8" ry="12" fill="#a8b89a" opacity="0.4" transform="rotate(30 225 160)" />
        </svg>
      </div>

      {/* Top center peony */}
      <div
        className="absolute top-5 left-1/2 transform -translate-x-1/2 w-72 h-72 opacity-45 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 8px 16px rgba(248, 232, 243, 0.12))" }}
        >
          {/* Peony petals */}
          <circle cx="150" cy="130" r="60" fill="#f8e8f3" opacity="0.5" />
          <circle cx="120" cy="110" r="55" fill="#fce4f0" opacity="0.5" />
          <circle cx="180" cy="110" r="55" fill="#fce4f0" opacity="0.5" />
          <circle cx="150" cy="85" r="50" fill="#f8d4e8" opacity="0.6" />
          <circle cx="130" cy="140" r="45" fill="#f8d4e8" opacity="0.5" />
          <circle cx="170" cy="140" r="45" fill="#f8d4e8" opacity="0.5" />
          <circle cx="150" cy="130" r="35" fill="#f4c2dc" opacity="0.7" />
        </svg>
      </div>

      {/* Top right lavender */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-45 animate-float" style={{ animationDelay: "0.8s" }}>
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 10px 20px rgba(212, 165, 212, 0.08))" }}
        >
          {/* Lavender stems */}
          <line
            x1="150"
            y1="250"
            x2="150"
            y2="30"
            stroke="#d4a5d4"
            strokeWidth="2"
            opacity="0.5"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="250"
            x2="120"
            y2="50"
            stroke="#d4a5d4"
            strokeWidth="1.5"
            opacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="250"
            x2="180"
            y2="50"
            stroke="#d4a5d4"
            strokeWidth="1.5"
            opacity="0.4"
            strokeLinecap="round"
          />

          {/* Lavender flower buds */}
          <circle cx="150" cy="60" r="10" fill="#d4a5d4" opacity="0.6" />
          <circle cx="145" cy="80" r="8" fill="#d4a5d4" opacity="0.5" />
          <circle cx="155" cy="80" r="8" fill="#d4a5d4" opacity="0.5" />
          <circle cx="140" cy="100" r="7" fill="#d4a5d4" opacity="0.5" />
          <circle cx="160" cy="100" r="7" fill="#d4a5d4" opacity="0.5" />
          <circle cx="150" cy="120" r="8" fill="#d4a5d4" opacity="0.5" />
        </svg>
      </div>

      {/* BOTTOM BORDER - Greens and lavender hints */}
      {/* Bottom left eucalyptus and roses */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-45 animate-float" style={{ animationDelay: "1.5s" }}>
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 -10px 20px rgba(168, 184, 154, 0.08))" }}
        >
          {/* Eucalyptus leaves cluster */}
          <path
            d="M 100 80 Q 90 120 100 200"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M 100 80 Q 110 120 100 200"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <ellipse cx="75" cy="120" rx="10" ry="15" fill="#a8b89a" opacity="0.4" transform="rotate(-40 75 120)" />
          <ellipse cx="125" cy="120" rx="10" ry="15" fill="#a8b89a" opacity="0.4" transform="rotate(40 125 120)" />
          <ellipse cx="70" cy="160" rx="10" ry="15" fill="#a8b89a" opacity="0.35" transform="rotate(-40 70 160)" />
          <ellipse cx="130" cy="160" rx="10" ry="15" fill="#a8b89a" opacity="0.35" transform="rotate(40 130 160)" />

          {/* Small rose accent */}
          <circle cx="150" cy="150" r="35" fill="#f4c2c2" opacity="0.3" />
          <circle cx="140" cy="140" r="30" fill="#f8d4d4" opacity="0.4" />
          <circle cx="160" cy="140" r="30" fill="#f8d4d4" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom center lavender and leaves */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 opacity-40 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 -8px 16px rgba(212, 165, 212, 0.08))" }}
        >
          {/* Lavender stems */}
          <line
            x1="150"
            y1="50"
            x2="150"
            y2="250"
            stroke="#d4a5d4"
            strokeWidth="2"
            opacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="50"
            x2="120"
            y2="230"
            stroke="#d4a5d4"
            strokeWidth="1.5"
            opacity="0.35"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="50"
            x2="180"
            y2="230"
            stroke="#d4a5d4"
            strokeWidth="1.5"
            opacity="0.35"
            strokeLinecap="round"
          />

          {/* Lavender buds */}
          <circle cx="150" cy="220" r="9" fill="#d4a5d4" opacity="0.5" />
          <circle cx="145" cy="200" r="7" fill="#d4a5d4" opacity="0.45" />
          <circle cx="155" cy="200" r="7" fill="#d4a5d4" opacity="0.45" />
          <circle cx="140" cy="180" r="6" fill="#d4a5d4" opacity="0.4" />
          <circle cx="160" cy="180" r="6" fill="#d4a5d4" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom right roses and leaves */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-45 animate-float" style={{ animationDelay: "0.5s" }}>
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 -10px 20px rgba(244, 194, 194, 0.08))" }}
        >
          {/* Rose petals */}
          <circle cx="150" cy="150" r="55" fill="#f4c2c2" opacity="0.4" />
          <circle cx="125" cy="130" r="50" fill="#f8d4d4" opacity="0.5" />
          <circle cx="175" cy="130" r="50" fill="#f8d4d4" opacity="0.5" />
          <circle cx="150" cy="105" r="45" fill="#fce4e4" opacity="0.6" />
          <circle cx="150" cy="150" r="30" fill="#f4c2c2" opacity="0.7" />

          {/* Eucalyptus leaves */}
          <path
            d="M 200 180 Q 210 200 195 220"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <path
            d="M 100 180 Q 90 200 105 220"
            stroke="#a8b89a"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          <ellipse cx="210" cy="190" rx="8" ry="12" fill="#a8b89a" opacity="0.4" transform="rotate(30 210 190)" />
          <ellipse cx="90" cy="190" rx="8" ry="12" fill="#a8b89a" opacity="0.4" transform="rotate(-30 90 190)" />
        </svg>
      </div>

      {/* MIDDLE AREA - Subtle decorative elements */}
      {/* Left side subtle accent */}
      <div className="absolute top-1/3 left-10 w-56 h-56 opacity-20 animate-float" style={{ animationDelay: "1.8s" }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="40" fill="none" stroke="#f4c2c2" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="100" r="25" fill="none" stroke="#d4a5d4" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Right side subtle accent */}
      <div className="absolute top-2/3 right-10 w-56 h-56 opacity-20 animate-float" style={{ animationDelay: "2.3s" }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="35" fill="none" stroke="#a8b89a" strokeWidth="1" opacity="0.25" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#d4a5d4" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Tiny floral accents - top area */}
      <div className="absolute top-20 left-1/4 w-20 h-20 opacity-30 animate-twinkle" style={{ animationDelay: "0.5s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="8" fill="#f4c2c2" opacity="0.6" />
          <circle cx="40" cy="45" r="5" fill="#f8d4d4" opacity="0.5" />
          <circle cx="60" cy="45" r="5" fill="#f8d4d4" opacity="0.5" />
          <circle cx="45" cy="60" r="4" fill="#fce4e4" opacity="0.5" />
          <circle cx="55" cy="60" r="4" fill="#fce4e4" opacity="0.5" />
        </svg>
      </div>

      {/* Tiny lavender accent - top right */}
      <div className="absolute top-32 right-1/4 w-16 h-16 opacity-25 animate-sway" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="50" y1="80" x2="50" y2="20" stroke="#d4a5d4" strokeWidth="1.5" opacity="0.5" />
          <circle cx="50" cy="25" r="4" fill="#d4a5d4" opacity="0.6" />
          <circle cx="45" cy="35" r="3" fill="#d4a5d4" opacity="0.5" />
          <circle cx="55" cy="35" r="3" fill="#d4a5d4" opacity="0.5" />
          <circle cx="50" cy="50" r="3" fill="#d4a5d4" opacity="0.4" />
        </svg>
      </div>

      {/* Tiny leaf accent - left side middle */}
      <div className="absolute top-1/2 left-5 w-14 h-14 opacity-20 animate-float" style={{ animationDelay: "2.5s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="15" ry="25" fill="#a8b89a" opacity="0.4" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="12" ry="20" fill="#b8c8aa" opacity="0.3" transform="rotate(-30 50 50)" />
        </svg>
      </div>

      {/* Tiny rose accent - right side middle */}
      <div className="absolute top-1/2 right-8 w-16 h-16 opacity-25 animate-twinkle" style={{ animationDelay: "1.5s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="12" fill="#f4c2c2" opacity="0.5" />
          <circle cx="42" cy="45" r="9" fill="#f8d4d4" opacity="0.4" />
          <circle cx="58" cy="45" r="9" fill="#f8d4d4" opacity="0.4" />
          <circle cx="50" cy="35" r="8" fill="#fce4e4" opacity="0.5" />
        </svg>
      </div>

      {/* Tiny decorative dots - scattered for premium feel */}
      <div
        className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-pink-100 opacity-30 animate-twinkle"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-cyan-100 opacity-25 animate-twinkle"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-teal-100 opacity-20 animate-twinkle"
        style={{ animationDelay: "1.8s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-100 opacity-25 animate-twinkle"
        style={{ animationDelay: "2.2s" }}
      />

      {/* Tiny leaf sprigs - bottom area */}
      <div
        className="absolute bottom-1/4 left-1/3 w-12 h-12 opacity-20 animate-sway"
        style={{ animationDelay: "1.3s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 50 80 Q 40 60 50 20" stroke="#a8b89a" strokeWidth="1" fill="none" opacity="0.5" />
          <ellipse cx="40" cy="50" rx="6" ry="10" fill="#a8b89a" opacity="0.3" transform="rotate(-30 40 50)" />
          <ellipse cx="60" cy="50" rx="6" ry="10" fill="#a8b89a" opacity="0.3" transform="rotate(30 60 50)" />
        </svg>
      </div>

      {/* Tiny peony accent - bottom right area */}
      <div
        className="absolute bottom-1/3 right-1/3 w-20 h-20 opacity-25 animate-float"
        style={{ animationDelay: "0.3s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="10" fill="#f8e8f3" opacity="0.5" />
          <circle cx="42" cy="45" r="8" fill="#fce4f0" opacity="0.4" />
          <circle cx="58" cy="45" r="8" fill="#fce4f0" opacity="0.4" />
          <circle cx="50" cy="38" r="7" fill="#f8d4e8" opacity="0.4" />
        </svg>
      </div>

      {/* Tiny botanical line art - top left corner */}
      <div className="absolute top-10 left-20 w-10 h-10 opacity-15 animate-sway" style={{ animationDelay: "2.8s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 50 80 L 50 20" stroke="#d4a5d4" strokeWidth="0.8" opacity="0.6" />
          <path d="M 50 40 L 35 50" stroke="#d4a5d4" strokeWidth="0.8" opacity="0.5" />
          <path d="M 50 40 L 65 50" stroke="#d4a5d4" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* Tiny botanical line art - bottom right corner */}
      <div className="absolute bottom-10 right-20 w-10 h-10 opacity-15 animate-sway" style={{ animationDelay: "3.2s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 50 20 L 50 80" stroke="#a8b89a" strokeWidth="0.8" opacity="0.6" />
          <path d="M 50 60 L 35 50" stroke="#a8b89a" strokeWidth="0.8" opacity="0.5" />
          <path d="M 50 60 L 65 50" stroke="#a8b89a" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* Tiny teal dot accent - middle left */}
      <div
        className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-teal-200 opacity-20 animate-twinkle"
        style={{ animationDelay: "0.3s" }}
      />

      {/* Tiny sea blue dot accent - middle right */}
      <div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-100 opacity-15 animate-twinkle"
        style={{ animationDelay: "1.6s" }}
      />

      {/* Tiny mint accent - bottom left */}
      <div
        className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-emerald-100 opacity-20 animate-twinkle"
        style={{ animationDelay: "2.4s" }}
      />
    </div>
  )
}
