"use client";

import { motion } from "framer-motion";

const executionPoints = [
  {
    title: "Single-Point Ownership",
    description: "One accountable project manager oversees your entire project from start to finish.",
  },
  {
    title: "Defined Scope & BOQs",
    description: "Clear scope definitions and Bill of Quantities upfront, preventing scope creep.",
  },
  {
    title: "Supervisor-Led Control",
    description: "Experienced supervisors ensure quality and discipline at all stages.",
  },
  {
    title: "Stage-Wise Quality Checks",
    description: "Quality inspections built into execution framework at defined milestones.",
  },
  {
    title: "Coordinated Trade Sequencing",
    description: "All trades sequenced to avoid conflicts and delays.",
  },
  {
    title: "Post-Handover Support",
    description: "Maintenance support and AMC services for long-term performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowWeExecute() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Execution Excellence
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            How We Execute Projects
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Execution is where most projects fail. At Intech, execution is engineered — not improvised.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {executionPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "rgba(140, 167, 124, 0.5)" }}
              className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-[#8ca77c]/20 flex items-center justify-center">
                <span className="text-lg font-medium text-[#8ca77c]">{index + 1}</span>
              </div>
              <h3 className="font-[var(--font-inter-tight)] text-xl font-medium mb-3 pr-14 text-white">
                {point.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

