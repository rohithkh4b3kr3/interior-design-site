"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Who We Are
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          A multidisciplinary Design + Build + Maintenance firm delivering execution-driven solutions for corporate, institutional, healthcare, industrial, residential, and sports infrastructure projects across South India.
        </p>
      </motion.div>
    </section>
  );
}

