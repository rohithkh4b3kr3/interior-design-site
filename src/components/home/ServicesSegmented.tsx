"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const corporateServices = [
  {
    title: "Corporate Interiors",
    description: "Professional workspace design and execution for offices, banks, and commercial spaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Corporate Civil Works",
    description: "End-to-end civil construction and infrastructure development for corporate facilities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Facility Maintenance (AMC)",
    description: "Annual Maintenance Contracts and ongoing facility management services.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Sports Infrastructure",
    description: "Design and construction of sports facilities, stadiums, and athletic infrastructure.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
];

const residentialServices = [
  {
    title: "Residential Interiors",
    description: "Thoughtfully designed and well-executed residential interiors that balance quality, durability, and cost — making them genuinely budget-friendly without compromising essentials.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Residential Construction",
    description: "Cost-controlled execution and budget-aligned planning for homes and residential developments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Architectural Planning",
    description: "Comprehensive architectural design and planning services for residential projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
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

export default function ServicesSegmented() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-[#efefec]/50">
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
          Our Services
        </motion.span>
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          What We <span className="text-[#8ca77c]">Do</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive design, build, and maintenance services segmented by your needs
        </p>
      </motion.div>

      {/* Corporate Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          For <span className="text-[#8ca77c]">Corporates & Institutions</span>
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {corporateServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#8ca77c]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="text-[#8ca77c] mb-4">{service.icon}</div>
              <h4 className="font-[var(--font-inter-tight)] text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Residential Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          For <span className="text-[#8ca77c]">Homes & Developers</span>
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {residentialServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#8ca77c]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="text-[#8ca77c] mb-4">{service.icon}</div>
              <h4 className="font-[var(--font-inter-tight)] text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#8ca77c]/10 rounded-2xl p-6 md:p-8 border border-[#8ca77c]/20"
        >
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
            We specialise in delivering residential interiors and construction that are carefully planned to suit defined budgets, ensuring value for money, durability, and clean execution — without unnecessary cost escalation.
          </p>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center flex flex-wrap justify-center gap-4"
      >
        <Link href="/contact-us">
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-black text-white rounded-full font-medium text-base hover:bg-[#8ca77c] transition-colors duration-300 shadow-lg"
          >
            Speak With a Project Manager
          </motion.button>
        </Link>
        <Link href="/contact-us">
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-full font-medium text-base hover:border-[#8ca77c] hover:text-[#8ca77c] transition-all duration-300 shadow-sm"
          >
            Plan Your Home Within Budget
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

