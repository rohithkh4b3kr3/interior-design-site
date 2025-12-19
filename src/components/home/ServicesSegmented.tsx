"use client";

import { motion } from "framer-motion";
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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Corporate Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-[#0f1115] to-[#1a1d23] text-white border border-white/10 hover:border-[#8ca77c]/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8ca77c]/10 rounded-full blur-3xl"></div>
            <h3 className="font-[var(--font-inter-tight)] text-2xl lg:text-3xl font-medium mb-8 relative z-10">
              For Corporates & Institutions
            </h3>
            <ul className="space-y-4 mb-10 relative z-10">
              {corporateBullets.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span className="text-base text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/our-works"
              className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors relative z-10 group/link"
            >
              Corporate Solutions
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Residential Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl p-10 lg:p-12 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#8ca77c]/30 transition-all duration-300"
          >
            <h3 className="font-[var(--font-inter-tight)] text-2xl lg:text-3xl font-medium mb-8 text-gray-900">
              For Homes & Developers
            </h3>
            <ul className="space-y-4 mb-10">
              {residentialBullets.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/interior"
              className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors group/link"
            >
              Residential Solutions
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
