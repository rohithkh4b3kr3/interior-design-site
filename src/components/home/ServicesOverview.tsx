"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Corporate Interiors",
    description: "Execution-led corporate interior solutions designed for operational efficiency, brand alignment, and long-term usability.",
    link: "/our-works",
  },
  {
    title: "Residential Interiors",
    description: "Functional, durable, and well-planned interiors tailored to how homes are actually used.",
    link: "/interior",
  },
  {
    title: "Residential Construction",
    description: "End-to-end residential construction delivered with structural discipline and quality control.",
    link: "/construction-package",
  },
  {
    title: "Corporate Civil Works",
    description: "Civil and structural works for industrial, institutional, and commercial environments.",
    link: "/our-works",
  },
  {
    title: "Architectural Planning",
    description: "Practical planning focused on buildability, compliance, and usability.",
    link: "/design-package",
  },
  {
    title: "Sports Infrastructure",
    description: "Design and execution of sports courts with performance-oriented engineering.",
    link: "/our-works",
  },
  {
    title: "Facility Maintenance (AMC & On-Call)",
    description: "Long-term maintenance support for corporates, hospitals, institutions, and commercial facilities with preventive maintenance and rapid response.",
    link: "/our-works",
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

export default function ServicesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">
          Our Services
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <h3 className="font-[var(--font-inter-tight)] text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              {service.description}
            </p>
            <Link
              href={service.link}
              className="text-gray-900 font-medium text-sm hover:text-[#8ca77c] transition-colors inline-flex items-center gap-2"
            >
              Learn more →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

