"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#efefec] pt-20 md:pt-0">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#8ca77c] rounded-full blur-3xl"
        />
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
                Premium Interior Design Studio
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="block mb-1">Transform</span>
              <span className="relative inline-block">
                <span className="relative z-10">Your Space</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-2 md:h-3 bg-[#8ca77c]/20 -z-0 rounded-sm"
                />
              </span>
              <span className="block mt-1">Into Art</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Where architectural precision meets curated aesthetics to create
              <span className="text-[#8ca77c] font-medium"> timeless interiors</span> that inspire
            </motion.p>

            {/* Stats - Responsive Grid */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-2"
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "450+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
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

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Link href="/our-works" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-full font-medium text-sm md:text-base overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Our Work
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
                  Schedule Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Creative Light Green Background Element */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] mt-8 lg:mt-0"
          >
            {/* Main Light Green Container */}
            <div className="relative w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#8ca77c] via-[#9cb38c] to-[#8ca77c] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80"
                >
                  <div className="w-full h-full border-2 md:border-3 border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 border-2 md:border-3 border-white/15 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 border-2 md:border-3 border-white/10 rounded-full"></div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Top Content */}
                <div className="space-y-4 md:space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold font-[var(--font-inter-tight)] mb-2 md:mb-3 leading-tight">
                      We&apos;re proud to have served over{" "}
                      <span className="text-white/95">3,500+</span> happy clients
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      From luxury penthouses to modern family homes, we&apos;ve transformed
                      spaces across 12 countries, delivering exceptional results.
                    </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {[
                      { label: "Average Project Value", value: "$2.5M+" },
                      { label: "Support Available", value: "24/7" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20"
                      >
                        <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-white/80 leading-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom Content - Rating & Testimonials */}
                <div className="space-y-4 md:space-y-5 pt-4">
                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.svg
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                          className="w-4 h-4 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">4.9/5</div>
                      <div className="text-white/70 text-xs">from 850+ reviews</div>
                    </div>
                  </motion.div>

                  {/* Customer Avatars */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-white font-semibold text-xs backdrop-blur-sm"
                        >
                          {i}
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-white/80 text-xs leading-tight">
                      Join thousands of satisfied clients
                    </div>
                  </motion.div>

                  {/* Arrow CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    whileHover={{ x: 5, y: -5 }}
                    className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Floating Decorative Shapes */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-8 w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full blur-2xl"
              />
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
