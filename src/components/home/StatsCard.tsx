"use client";

import { motion } from "framer-motion";

export default function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="relative rounded-3xl bg-gradient-to-br from-[#8ca77c] via-[#9cb38c] to-[#8ca77c] p-10 lg:p-12 overflow-hidden shadow-xl"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
        >
          Trusted by over{" "}
          <span className="text-white/95">3,500+ satisfied clients</span>{" "}
          worldwide
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/90 text-base md:text-lg leading-relaxed max-w-md mb-8"
        >
          From luxury penthouses to modern family homes, we&apos;ve transformed
          spaces across 12 countries, delivering exceptional results on time and
          within budget.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-white mb-1">$2.5M+</div>
            <div className="text-sm text-white/80">Average Project Value</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                className="w-12 h-12 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-white font-semibold text-sm"
              >
                {i}
              </motion.div>
            ))}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-white/80">4.9/5 from 850+ reviews</p>
          </div>
        </motion.div>

        {/* Arrow CTA */}
        <motion.div
          whileHover={{ x: 5, y: -5 }}
          className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-white"
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
    </motion.div>
  );
}
