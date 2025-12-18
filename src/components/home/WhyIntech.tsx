"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const advantages = [
  {
    title: "Design + Build + Maintenance Under One Accountable Structure",
    description: "Most failures happen in the handover between designers, contractors, and maintenance teams. At Intech, these are not separate silos. We integrate planning, execution, and post-handover support into one continuous system — ensuring clarity from day one and accountability beyond completion.",
    benefits: ["Fewer coordination gaps", "Faster decisions", "Clear responsibility", "Predictable outcomes"],
  },
  {
    title: "Engineering Discipline, Not Improvisation",
    description: "We do not rely on last-minute fixes or site-level guesswork. Our projects are driven by defined scopes and BOQs, execution sequencing before work begins, supervisor-led site control, stage-wise quality inspections, and written approvals for variations.",
  },
  {
    title: "We Build for Real-World Use, Not Just Handover Day",
    description: "A space is successful only if it performs months and years after completion. Because we also manage facility maintenance and AMC services, we understand how materials age, how systems fail, and where shortcuts become costly later. This feedback directly influences how we design and execute.",
  },
  {
    title: "Budget-Aligned Residential Solutions Without Compromise",
    description: "Affordability does not mean cutting corners. For residential interiors and construction, we specialise in cost-controlled, value-engineered solutions that respect defined budgets while protecting structural integrity, essential finishes, and long-term usability.",
  },
  {
    title: "Pan-Regional Capability With Centralised Control",
    description: "We execute projects across South India and major metropolitan cities, supported by mobile site teams and centralised project governance. Distance does not dilute our standards. Every project follows the same execution framework, documentation discipline, and quality benchmarks.",
  },
  {
    title: "Transparency Is Built Into How We Work",
    description: "Trust is not created by words — it is created by systems. At Intech, clients experience clear scope definitions, transparent costing, documented changes, milestone-based billing, and honest communication, even when answers are inconvenient.",
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

export default function WhyIntech() {
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
          Why Intech
        </motion.span>
        <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Because Execution, Not Promises,{" "}
          <span className="text-[#8ca77c]">Determines Outcomes</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Choosing a design–build partner is not about visuals alone. It is about risk, responsibility, and reliability. At Intech, we operate where most projects fail — execution, coordination, and continuity.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 md:space-y-12"
      >
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 hover:border-[#8ca77c]/30 transition-all duration-300 shadow-sm"
          >
            <h3 className="font-[var(--font-inter-tight)] text-xl md:text-2xl font-bold mb-4 text-gray-900">
              {advantage.title}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              {advantage.description}
            </p>
            {advantage.benefits && (
              <ul className="space-y-2 mt-4">
                {advantage.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Differentiator Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 md:mt-20 bg-gradient-to-br from-[#8ca77c]/10 to-[#8ca77c]/5 rounded-3xl p-8 md:p-12 border border-[#8ca77c]/20"
      >
        <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          What Happens After Handover — And Why It Matters
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Most contractors consider a project complete on handover day. We consider it the beginning of real performance.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Because Intech actively manages post-handover maintenance for corporate, healthcare, and institutional clients, we see firsthand what succeeds — and what fails — over time. This gives us a unique advantage:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "We know which materials age poorly",
            "Which detailing fails under daily use",
            "Which execution shortcuts create future costs",
            "Which systems need early attention",
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] flex-shrink-0 mt-2"></div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed">
          As a result, we design and build differently from the start. Our projects are informed not just by drawings, but by years of real-world performance data. This continuity — from concept to maintenance — is what allows us to deliver spaces that remain functional, safe, and reliable long after completion.
        </p>
        <p className="text-base md:text-lg text-[#8ca77c] font-semibold mt-4">
          That is not a service feature. That is a structural advantage.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-12 text-center"
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
      </motion.div>
    </section>
  );
}

