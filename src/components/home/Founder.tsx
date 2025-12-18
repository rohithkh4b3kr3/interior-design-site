"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-[#efefec] to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-6"
        >
          Founder-Led Execution
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-gray-900"
        >
          Founder & Managing Director — Mr. S. Shankaran
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Mr. S. Shankaran brings over three decades of hands-on experience across civil contracting, project management, real estate development, and interior execution.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            A graduate of the <strong className="text-gray-900">Government Technical Institute, Chennai</strong>, with formal training in Interior Design, he combines engineering rigour with design understanding — a foundation that defines Intech&apos;s execution philosophy.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center text-gray-900 font-medium hover:text-[#8ca77c] transition-colors"
          >
            Read more about our leadership →
          </Link>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            { label: "Years of Experience", value: "30+" },
            { label: "Projects Led", value: "500+" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-[#8ca77c] mb-2 font-[var(--font-inter-tight)]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

