"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Founder-Led Execution
          </p>

          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-8 text-white">
            Founder & Managing Director
            <br />
            <span className="text-[#8ca77c]">Mr. S. Shankaran</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-lg text-white/80 leading-relaxed">
              Over three decades of hands-on experience across civil contracting, project management, 
              real estate development, and interior execution.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              A graduate of the <strong className="text-white">Government Technical Institute, Chennai</strong>, 
              with formal training in Interior Design, combining engineering rigour with design understanding — 
              a foundation that defines Intech&apos;s execution philosophy.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-[#8ca77c] font-medium hover:text-[#9bb88b] transition-colors group"
          >
            Read more about our leadership
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 gap-6 pt-16 border-t border-white/10"
          >
            {[
              { label: "Years of Experience", value: "30+" },
              { label: "Projects Led", value: "500+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-[var(--font-inter-tight)] font-medium text-[#8ca77c] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

