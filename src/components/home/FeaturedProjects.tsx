"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Luxury Residential",
    category: "Residential",
    gradient: "from-purple-500/10 to-pink-500/10",
    icon: "🏡",
  },
  {
    id: 2,
    title: "Corporate Spaces",
    category: "Commercial",
    gradient: "from-blue-500/10 to-cyan-500/10",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Hospitality Design",
    category: "Hospitality",
    gradient: "from-amber-500/10 to-orange-500/10",
    icon: "🍽️",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,#000_1px,transparent_0)] [background-size:40px_40px]"></div>
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-6"
          >
            Our Expertise
          </motion.span>
          <h2 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Design Excellence{" "}
            <span className="text-[#8ca77c]">Across</span> Every Space
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From residential sanctuaries to dynamic commercial environments,
            we craft interiors that elevate your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -16, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${project.gradient} p-10 h-full border border-gray-100 hover:border-[#8ca77c]/30 transition-all duration-500 overflow-hidden`}>
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient.replace('/10', '/20')}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{project.icon}</div>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transforming spaces with sophisticated design solutions
                    tailored to your unique vision and lifestyle
                  </p>
                  <Link href="/our-works">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#8ca77c] font-medium group-hover:text-[#7a9570] transition-colors"
                    >
                      Explore Projects
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8ca77c]/5 rounded-full -mr-16 -mb-16"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href="/our-works">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border-2 border-[#8ca77c] text-[#8ca77c] px-10 py-4 font-medium hover:bg-[#8ca77c] hover:text-white transition-all duration-300"
            >
              View Complete Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
