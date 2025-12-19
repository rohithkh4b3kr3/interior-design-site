"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#0f1115] text-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            Ready to Start?
          </p>

          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Let&apos;s Discuss Your{" "}
            <span className="text-[#8ca77c]">Project Requirements</span>
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Speak directly with a team that understands execution, timelines, and accountability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#8ca77c] text-black font-medium text-sm tracking-wide hover:bg-[#9bb88b] transition-all duration-200"
              >
                Speak With a Project Manager
              </motion.button>
            </Link>
            <Link href="/contact-us" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Request Consultation
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c]"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c]"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c]"></div>
              <span>30+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

