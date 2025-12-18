"use client";

import { motion } from "framer-motion";

const processSteps = [
  "Requirement Study & Site Assessment",
  "Concept Development & Feasibility Review",
  "Technical Detailing & BOQ Finalisation",
  "Procurement & Mobilisation",
  "Execution & Quality Governance",
  "Testing, Commissioning & Handover",
  "Post-Handover Maintenance & Support",
];

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Our Process
          </h2>
          <p className="text-base text-gray-700 mb-8">
            A structured delivery framework ensuring predictability and accountability.
          </p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </div>
              <p className="text-lg text-gray-900 pt-1">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

