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
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white overflow-hidden"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* CORPORATE */}
          <div className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-[#1a1d23] to-[#0f1115] text-white border border-white/10 transition-all duration-300 hover:border-[#8ca77c]/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8ca77c]/10">
            
            {/* Ambient glow (contained) */}
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-[#8ca77c]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
          <div className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-[#1a1d23] to-[#0f1115] text-white border border-white/10 transition-all duration-300 hover:border-[#8ca77c]/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8ca77c]/10">
            
            {/* Ambient glow (contained) */}
            <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 bg-[#8ca77c]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <h3 className="font-[var(--font-inter-tight)] text-2xl lg:text-3xl font-medium mb-8 relative z-10">
              For Homes & Developers
            </h3>

            <ul className="space-y-4 mb-10 relative z-10">
              {residentialBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
                  <span className="text-base text-white/80">
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
