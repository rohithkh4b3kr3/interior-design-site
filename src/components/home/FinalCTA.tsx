"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/20 text-[#8ca77c] text-sm font-medium mb-6 border border-[#8ca77c]/30"
          >
            Ready to Start?
          </motion.span>

          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let&apos;s Discuss Your{" "}
            <span className="text-[#8ca77c]">Project Requirements</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Speak directly with a team that understands execution, timelines, and accountability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Speak With a Project Manager
              </motion.button>
            </Link>
            <Link href="/contact-us" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/40 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-200"
              >
                Request a Project Consultation
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#8ca77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#8ca77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#8ca77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

