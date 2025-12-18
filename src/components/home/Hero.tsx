"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const commercialImages = [
  "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
  "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
  "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
  "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
  "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-1.jpg",
  "/images/Commercial or Corporate Clients/jeep show room/jeep show room-1.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % commercialImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 md:pt-0">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {commercialImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.05 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt={`Commercial Project ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              Design + Build + Maintenance Company
            </span>
          </motion.div>

          {/* H1 - Large but not too big */}
          <motion.h1
            variants={itemVariants}
            className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Design. Build. Maintain.
          </motion.h1>

          {/* H2 - Concise */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/90 mb-6 leading-relaxed max-w-3xl"
          >
            Integrated interiors, civil works, architectural planning, and facility maintenance — delivered with engineering discipline across South India.
          </motion.p>

          {/* Stats Row - Compact */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 mb-8"
          >
            {[
              { number: "30+", label: "Years" },
              { number: "500+", label: "Projects" },
              { number: "12+", label: "Cities" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="border-l-2 border-[#8ca77c] pl-3"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#8ca77c] font-[var(--font-inter-tight)]">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-all duration-200 shadow-xl"
              >
                Request Project Consultation
              </motion.button>
            </Link>
            <Link href="/our-works">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-200"
              >
                Explore Capabilities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {commercialImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60 w-1.5"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
