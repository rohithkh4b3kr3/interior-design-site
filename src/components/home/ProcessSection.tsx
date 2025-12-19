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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Our Process
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 text-gray-900">
            Structured Delivery Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ensuring predictability and accountability at every stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#8ca77c] via-[#8ca77c]/50 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative flex items-start gap-6 md:gap-8 group"
              >
                {/* Circle indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#8ca77c] text-white flex items-center justify-center font-medium text-sm group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <p className="text-lg md:text-xl text-gray-900 font-[var(--font-inter-tight)] font-medium">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

