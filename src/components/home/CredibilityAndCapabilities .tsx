"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const credibilityMetrics = [
  { value: "30+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "12+", label: "Cities" },
  { value: "100%", label: "Execution Focus" },
];

const services = [
  {
    title: "Corporate Interiors",
    description: "Office spaces, facilities, and institutional interiors with engineering discipline.",
    link: "/our-works",
  },
  {
    title: "Residential Interiors",
    description: "Thoughtful design aligned to real usage, materials, and durability.",
    link: "/interior",
  },
  {
    title: "Civil Construction",
    description: "Complete construction with engineering control and quality systems.",
    link: "/construction-package",
  },
  {
    title: "Architectural Planning",
    description: "Buildable, compliant planning focused on execution clarity.",
    link: "/design-package",
  },
  {
    title: "Sports Infrastructure",
    description: "Engineering-led design and construction of performance facilities.",
    link: "/our-works",
  },
  {
    title: "Facility Maintenance",
    description: "AMC and maintenance for corporates, hospitals, and institutions.",
    link: "/our-works",
  },
];

export default function CredibilityAndCapabilities() {
  return (
    <section className="bg-[#0f1115] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 space-y-24">

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {credibilityMetrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-[var(--font-inter-tight)] font-medium text-[#8ca77c] mb-2">
                {item.value}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            About Us
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-white">
            A design, build, and maintenance firm where execution comes first.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Multidisciplinary interiors and construction delivering corporate, institutional, 
            healthcare, and residential projects across South India.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-4">
              Our Capabilities
            </p>
            <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-medium text-white">
              What We Deliver
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-8 hover:border-[#8ca77c]/30 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="font-[var(--font-inter-tight)] text-xl font-medium text-white mb-3 group-hover:text-[#8ca77c] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-sm font-medium text-[#8ca77c] hover:text-[#9bb88b] inline-flex items-center gap-2 transition-colors"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
