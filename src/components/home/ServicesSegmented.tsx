"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const corporateBullets = [
  "Corporate Interiors",
  "Corporate Civil Works",
  "Facility Maintenance (AMC)",
  "Sports Infrastructure",
];

const residentialBullets = [
  "Residential Interiors",
  "Residential Construction",
  "Architectural Planning",
];

export default function ServicesSegmented() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {/* Corporate Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300"
        >
          <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            For Corporates & Institutions
          </h3>
          <ul className="space-y-4 mb-8">
            {corporateBullets.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                <span className="text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/our-works"
            className="inline-flex items-center text-gray-900 font-medium hover:text-[#8ca77c] transition-colors"
          >
            Corporate Solutions →
          </Link>
        </motion.div>

        {/* Residential Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300"
        >
          <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            For Homes & Developers
          </h3>
          <ul className="space-y-4 mb-8">
            {residentialBullets.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0"></div>
                <span className="text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/interior"
            className="inline-flex items-center text-gray-900 font-medium hover:text-[#8ca77c] transition-colors"
          >
            Residential Solutions →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
