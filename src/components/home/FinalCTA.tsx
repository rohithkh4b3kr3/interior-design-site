"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Let&apos;s Discuss Your Project Requirements
        </h2>
        <p className="text-lg text-white/90 mb-10">
          Speak directly with a team that understands execution, timelines, and accountability.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-200 shadow-xl"
            >
              Speak With a Project Manager
            </motion.button>
          </Link>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Request a Project Consultation
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

