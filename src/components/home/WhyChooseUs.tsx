"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "15+ Years Experience",
    description: "Proven track record in interior design and construction with over 450 successful projects",
    stat: "450+",
    statLabel: "Projects",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    description: "Professional project management ensures timely completion with transparent communication",
    stat: "98%",
    statLabel: "On Time",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "Only the finest materials and craftsmanship, sourced from trusted partners worldwide",
    stat: "100%",
    statLabel: "Quality",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden costs, clear and upfront pricing with detailed breakdowns for every project",
    stat: "0%",
    statLabel: "Hidden Fees",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(140,167,124,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-6"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Excellence in{" "}
            <span className="text-[#8ca77c]">Every Detail</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine expertise, quality, and passion to deliver exceptional
            interior design solutions that exceed expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 h-full border border-gray-100 hover:border-[#8ca77c]/30 transition-all duration-500 hover:shadow-2xl">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8ca77c]/20 to-[#8ca77c]/10 flex items-center justify-center text-[#8ca77c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-[#8ca77c] font-[var(--font-inter-tight)] mb-1">
                    {feature.stat}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {feature.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#8ca77c]/5 rounded-full -mr-12 -mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
