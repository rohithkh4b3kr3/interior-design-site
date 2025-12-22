"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
  {
    src: "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
    alt: "Ashok Leyland Auditorium - Commercial Interior Project",
  },
  {
    src: "/images/Commercial or Corporate Clients/ashok leyland patent gallery/ashok leyland patent gallery-2.jpg",
    alt: "Ashok Leyland Patent Gallery - Modern Display Systems",
  },
  {
    src: "/images/Residential/Kalpatharu Villa/kalpatharu villa-1.jpg",
    alt: "Kalpatharu Villa - Luxury Residential Interior",
  },
  {
    src: "/images/Residential/Avighna/avighna-1.jpg",
    alt: "Avighna - Premium Villa Design",
  },
  {
    src: "/images/Residential/Mandhralaya/mandhralaya-1.jpg",
    alt: "Mandhralaya - Elegant Residential Interior",
  },
  {
    src: "/images/Residential/The Crest Luxurious Villa/the crest, luxurious villa-1.jpg",
    alt: "The Crest Luxurious Villa - Ultra-Luxury Residential Design",
  },
  {
    src: "/images/Residential/Classy Bungalow/classy bungalow-1.jpg",
    alt: "Classy Bungalow - Luxury Residential Design",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Overline */}
          <p className="text-sm uppercase tracking-[0.25em] text-[#8ca77c] mb-6">
            Design • Build • Maintain
          </p>

          {/* Headline */}
          <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Engineering spaces <br className="hidden sm:block" />
            that businesses rely on.
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            We deliver commercial interiors, civil construction, architectural
            planning, and facility maintenance for enterprises across South India —
            with precision, accountability, and long-term support.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-12">
            {[
              { value: "30+", label: "Years of Expertise" },
              { value: "500+", label: "Projects Delivered" },
              { value: "12+", label: "Operational Cities" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold text-[#8ca77c]">
                  {item.value}
                </div>
                <div className="text-sm text-white/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact-us">
              <button className="px-7 py-3 bg-[#8ca77c] text-black font-medium rounded-md hover:bg-[#9bb88b] transition">
                Speak with our team
              </button>
            </Link>

            <Link href="/our-works">
              <button className="px-7 py-3 border border-white/30 text-white rounded-md hover:border-white hover:bg-white/5 transition">
                View our work
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Image indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
