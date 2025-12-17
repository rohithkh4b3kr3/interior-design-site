"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const features = [
  {
    id: 1,
    version: "Premium",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Complete Interior Design",
    description: "Full-service design from concept to installation, including space planning, material selection, and furniture curation.",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: 2,
    version: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Turnkey Solutions",
    description: "End-to-end project management with trusted contractors, ensuring seamless execution and timely delivery.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    badge: "New",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FeatureGrid() {
  // Memoize feature list items
  const featureListItems = useMemo(
    () => [
      "Space planning & layout optimization",
      "Material & furniture sourcing",
      "3D visualizations & renderings",
      "Complete project execution",
    ],
    []
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32 bg-gradient-to-b from-white to-[#efefec]/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="px-3 py-1 rounded-lg bg-gray-100 text-sm text-gray-700 font-medium"
          >
            Hi!
          </motion.div>
        </motion.div>
        <h2 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Why Choose Our{" "}
          <span className="text-[#8ca77c]">Interior Design</span> Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We combine architectural expertise with interior design mastery to deliver
          spaces that are both beautiful and functional.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Large Left Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
          className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-[#8ca77c]/10 to-[#8ca77c]/5 p-12 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group border border-[#8ca77c]/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <h3 className="font-[var(--font-inter-tight)] text-4xl font-bold mb-6">
              Custom Design Packages
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
              Tailored design solutions for every space. From initial consultation
              to final styling, we handle every detail with precision and care.
            </p>
            <ul className="space-y-4 text-gray-600 mb-8">
              {featureListItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c]"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.div
              whileHover={{ x: 5, y: -5 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8ca77c] text-white hover:bg-[#7a9570] transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#8ca77c]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#8ca77c]/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Feature Cards */}
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
            className={`rounded-3xl bg-gradient-to-br ${feature.gradient} p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group border border-gray-100`}
          >
            {feature.badge && (
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                  {feature.badge}
                </span>
              </div>
            )}

            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center gap-3 mb-6">
                {feature.version && (
                  <span className="text-sm text-gray-500 font-medium">
                    {feature.version}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center text-[#8ca77c] shadow-sm">
                  {feature.icon}
                </div>
              </div>

              <h3 className="font-[var(--font-inter-tight)] text-xl md:text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>

              <motion.div
                whileHover={{ x: 5, y: -5 }}
                className="self-end inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 hover:bg-white transition-colors cursor-pointer shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
