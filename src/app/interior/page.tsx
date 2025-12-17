"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const interiorServices = [
  {
    id: 1,
    title: "Residential Interior Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description: "Transform your home into a beautiful, functional space that reflects your personality and lifestyle.",
    features: [
      "Space Planning & Layout Design",
      "Color Scheme & Material Selection",
      "Custom Furniture Design",
      "Lighting Design",
      "Complete Project Execution",
    ],
  },
  {
    id: 2,
    title: "Commercial Interior Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: "Create inspiring work environments that enhance productivity and reflect your brand identity.",
    features: [
      "Office Space Planning",
      "Reception & Lobby Design",
      "Conference Room Design",
      "Cafeteria & Break Areas",
      "Brand Identity Integration",
    ],
  },
  {
    id: 3,
    title: "Modular Kitchen Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: "Design functional and stylish kitchens with premium modular solutions tailored to your needs.",
    features: [
      "Custom Modular Kitchen",
      "Premium Hardware & Fittings",
      "Appliance Integration",
      "Storage Solutions",
      "Work Triangle Optimization",
    ],
  },
  {
    id: 4,
    title: "False Ceiling Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    description: "Elevate your spaces with innovative false ceiling designs that enhance aesthetics and functionality.",
    features: [
      "POP Ceiling Design",
      "Gypsum Board Ceilings",
      "Acoustic Ceiling Solutions",
      "Lighting Integration",
      "3D Ceiling Designs",
    ],
  },
  {
    id: 5,
    title: "Wardrobe & Storage Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    description: "Maximize storage efficiency with custom wardrobe solutions designed for your space and needs.",
    features: [
      "Custom Wardrobe Design",
      "Space Optimization",
      "Premium Hardware",
      "Interior Organizers",
      "Sliding & Hinged Options",
    ],
  },
  {
    id: 6,
    title: "Complete Interior Turnkey",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "End-to-end interior design and execution service for complete home or office transformation.",
    features: [
      "Complete Design Package",
      "Material Procurement",
      "Project Management",
      "Quality Assurance",
      "Timely Delivery",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Planning",
    description: "Understanding your requirements, lifestyle, and budget to create a personalized design plan.",
  },
  {
    step: "02",
    title: "Design Development",
    description: "Creating detailed 3D designs, material selections, and layout plans for your approval.",
  },
  {
    step: "03",
    title: "Material Selection",
    description: "Helping you choose the right materials, finishes, and furnishings that match your vision and budget.",
  },
  {
    step: "04",
    title: "Execution & Installation",
    description: "Professional execution with regular site supervision ensuring quality and timely completion.",
  },
  {
    step: "05",
    title: "Handover & Support",
    description: "Final inspection, handover, and ongoing support for any adjustments or maintenance needs.",
  },
];

export default function InteriorPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#efefec]">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
          >
            Interior Design Services
          </motion.span>
          <h1 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Transform Your{" "}
            <span className="text-[#8ca77c]">Interior Spaces</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complete interior design solutions for residential and commercial spaces.
            From concept to completion, we create beautiful, functional interiors that
            reflect your style and enhance your lifestyle.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#8ca77c]/10 flex items-center justify-center text-[#8ca77c] mb-6">
                {service.icon}
              </div>
              <h3 className="font-[var(--font-inter-tight)] text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-[#8ca77c] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-xs text-gray-500">
                    +{service.features.length - 3} more services
                  </li>
                )}
              </ul>
              <Link
                href="/contact-us"
                className="text-sm text-[#8ca77c] font-medium hover:text-[#7a9570] transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-sm"
        >
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
              Our Interior Design Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring your vision becomes reality with precision
              and attention to detail at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8ca77c]"></div>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#8ca77c]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#8ca77c]">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#8ca77c] to-[#9cb38c] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a free consultation and let our interior design experts bring
            your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white text-[#8ca77c] px-10 py-4 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}

