"use client";

import Link from "next/link";

const corporateBullets = [
  "Office & facility execution",
  "Healthcare & institutional projects",
  "Civil & retrofit works",
  "Long-term maintenance support",
];

const residentialBullets = [
  "Residential interiors",
  "Turnkey home construction",
  "Budget-aligned execution",
  "Clear scope & timelines",
];

export default function ServicesSegmented() {
  return (
    <section 
      className="relative py-24 lg:py-32"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#ffffff',
        backgroundImage: 'none',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {/* Large solid white barrier to completely block backdrop-filter bleed */}
      <div 
        className="absolute inset-x-0 top-0 bg-white"
        style={{
          height: '100px',
          zIndex: 1,
          transform: 'translateY(-100px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      
      {/* Additional solid white overlay at the very top */}
      <div 
        className="absolute inset-x-0 top-0 bg-white"
        style={{
          height: '2px',
          zIndex: 2,
          transform: 'translateY(-2px)',
          boxShadow: '0 -2px 0 0 #ffffff',
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* CORPORATE */}
          <div className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-[#0f1115] to-[#1a1d23] text-white border border-white/10 transition-all duration-300 hover:border-[#8ca77c]/30 hover:-translate-y-1">
            
            {/* Ambient glow (contained) */}
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-[#8ca77c]/10 rounded-full blur-3xl" />

            <h3 className="font-[var(--font-inter-tight)] text-2xl lg:text-3xl font-medium mb-8 relative z-10">
              For Corporates & Institutions
            </h3>

            <ul className="space-y-4 mb-10 relative z-10">
              {corporateBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
                  <span className="text-base text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/our-works"
              className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors group"
            >
              Corporate Solutions
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* RESIDENTIAL */}
          <div className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-white to-gray-50 border border-gray-200 transition-all duration-300 hover:border-[#8ca77c]/30 hover:-translate-y-1">
            
            <h3 className="font-[var(--font-inter-tight)] text-2xl lg:text-3xl font-medium mb-8 text-gray-900">
              For Homes & Developers
            </h3>

            <ul className="space-y-4 mb-10">
              {residentialBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
                  <span className="text-base text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/our-works#residential"
              className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors group"
            >
              Residential Solutions
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
