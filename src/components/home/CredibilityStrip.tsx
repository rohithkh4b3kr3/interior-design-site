"use client";

import { motion } from "framer-motion";

const credibilityItems = [
  { label: "30+ Years", sublabel: "Leadership Experience" },
  { label: "Multi-City", sublabel: "Project Execution" },
  { label: "Corporate & Institutional", sublabel: "Expertise" },
  { label: "Dedicated", sublabel: "Maintenance Support" },
];

const trustedClients = [
  "TVS",
  "EMR Tapper",
  "Sringeri Sarada Equitas Hospital",
  "Rajiv Gandhi Engineering College",
  "Madras Auto Service",
];

export default function CredibilityStrip() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Trusted By Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-600 mb-6">
            Trusted by corporates, institutions, and healthcare facilities across South India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-sm text-gray-600">
            {trustedClients.map((client, index) => (
              <span key={index}>
                {client}
                {index < trustedClients.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {credibilityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {item.label}
              </div>
              <div className="text-sm text-gray-600">{item.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

