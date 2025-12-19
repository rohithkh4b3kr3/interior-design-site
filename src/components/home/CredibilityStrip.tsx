"use client";

import { motion } from "framer-motion";

const credibilityItems = [
  { value: "30+", label: "Years of Leadership Experience" },
  { value: "Pan-South India", label: "Multi-City Project Execution" },
  { value: "Corporate & Institutional", label: "Sector Expertise" },
  { value: "End-to-End", label: "Maintenance & Support" },
];

const trustedClients = [
  "TVS",
  "EMR Tapper",
  "Sri Sarada Equitas Hospital",
  "Rajiv Gandhi Engineering College",
  "Madras Auto Service",
];

export default function CredibilityStrip() {
  return (
    <section className="bg-[#fafafa] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TRUSTED BY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">
            Trusted Relationships
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Long-standing partnerships with corporates, institutions, and
            healthcare organizations across South India.
          </p>
        </motion.div>

        {/* CLIENT NAMES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm md:text-base text-gray-600 mb-20"
        >
          {trustedClients.map((client, index) => (
            <span
              key={index}
              className="tracking-wide whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="h-px bg-gray-200 mb-16" />

        {/* CREDIBILITY METRICS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8"
        >
          {credibilityItems.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
