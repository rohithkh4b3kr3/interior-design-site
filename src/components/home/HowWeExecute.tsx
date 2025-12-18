"use client";

import { motion } from "framer-motion";

const executionPoints = [
  {
    title: "Single-Point Project Ownership",
    description: "One accountable project manager oversees your entire project from start to finish, eliminating coordination gaps.",
  },
  {
    title: "Defined Scope & BOQs Before Execution",
    description: "We establish clear scope definitions and Bill of Quantities upfront, preventing scope creep and cost overruns.",
  },
  {
    title: "Supervisor-Led Site Control",
    description: "Every project site is managed by experienced supervisors who ensure quality and discipline at all stages.",
  },
  {
    title: "Stage-Wise Quality Checks",
    description: "Quality inspections are built into our execution framework at defined milestones, not after completion.",
  },
  {
    title: "Coordinated Trade Sequencing",
    description: "We sequence all trades (civil, electrical, plumbing, interiors) to avoid conflicts and delays.",
  },
  {
    title: "Post-Handover Maintenance Support",
    description: "Our commitment extends beyond handover with maintenance support and AMC services for long-term performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HowWeExecute() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
        >
          Execution Excellence
        </motion.span>
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          How We <span className="text-[#8ca77c]">Execute</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Execution is where most projects fail. At Intech, execution is engineered — not improvised.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {executionPoints.map((point, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#8ca77c]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-[#8ca77c]/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#8ca77c]">{index + 1}</span>
            </div>
            <h3 className="font-[var(--font-inter-tight)] text-xl md:text-2xl font-bold mb-3 pr-16 text-gray-900">
              {point.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 md:mt-16 text-center"
      >
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          This structure reduces rework, prevents cost overruns, and protects timelines — converting skeptical visitors into confident prospects.
        </p>
      </motion.div>
    </section>
  );
}

