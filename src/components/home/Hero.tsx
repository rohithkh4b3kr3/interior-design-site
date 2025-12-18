"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

// Random commercial project images
const commercialImages = [
  "/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg",
  "/images/Commercial or Corporate Clients/HDB financial services/HDB financial services-1.jpg",
  "/images/Commercial or Corporate Clients/mainetti/mainetti-1.jpg",
  "/images/Commercial or Corporate Clients/Yaskawa-India/Yaskawa-1.jpg",
  "/images/Commercial or Corporate Clients/mahathi software private limited/mahathi software private limited-1.jpg",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#efefec] pt-20 md:pt-0">
      {/* Background Images Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-3 gap-4 h-full p-8">
          {commercialImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              className="relative rounded-lg overflow-hidden"
            >
              <Image
                src={img}
                alt={`Commercial Project ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          {/* LEFT COLUMN - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8ca77c]/10 to-[#8ca77c]/5 border border-[#8ca77c]/20 text-[#8ca77c] text-xs font-medium backdrop-blur-sm"
              >
                Design + Build + Maintenance Company
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="block mb-1">Design.</span>
              <span className="block mb-1">Build.</span>
              <span className="relative inline-block">
                <span className="relative z-10">Maintain.</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-2 md:h-3 bg-[#8ca77c]/20 -z-0 rounded-sm"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Integrated interiors, civil works, architectural planning, sports infrastructure and facility maintenance — delivered with engineering discipline across South India and major metropolitan cities.
            </motion.p>

            {/* Support Line */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              From budget-conscious homes to complex corporate and institutional projects, we deliver predictable outcomes with single-point accountability.
            </motion.p>

            {/* Stats - Responsive Grid */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-2"
            >
              {[
                { number: "30+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "12+", label: "Cities Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="border-l-2 border-[#8ca77c]/30 pl-3 md:pl-4"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8ca77c] font-[var(--font-inter-tight)] mb-0.5">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tiered CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Link href="/contact-us" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-full font-medium text-sm md:text-base overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Speak With a Project Manager
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#8ca77c] to-[#9cb38c]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link href="/contact-us" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-300 text-gray-800 rounded-full font-medium text-sm md:text-base hover:border-[#8ca77c] hover:text-[#8ca77c] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Plan Your Home Within Budget
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Commercial Project Images */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] mt-8 lg:mt-0"
          >
            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              {/* Main Featured Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/Commercial or Corporate Clients/ashok leyland auditorium/ashok leyland-1.jpg"
                  alt="Commercial Project"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Image Grid Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="grid grid-cols-3 gap-2">
                  {commercialImages.slice(1, 4).map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-20 rounded-lg overflow-hidden border-2 border-white/20"
                    >
                      <Image
                        src={img}
                        alt={`Project ${index + 2}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <div className="text-xs text-gray-600 font-medium">Delivered Projects</div>
                <div className="text-lg font-bold text-[#8ca77c]">500+</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
