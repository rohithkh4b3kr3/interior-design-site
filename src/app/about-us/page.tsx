"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectManagers = [
  {
    name: "Mr. Nithish Kumaran S B",
    role: "Senior Project Manager – Corporate & Institutional",
    expertise: "Corporate interiors, hospitals, institutions, industrial facilities, civil coordination",
    phone: "+91 97106 27033",
    whatsapp: "https://wa.me/+919710627033",
    description: "Primary contact for corporate offices, hospitals, institutions, factories, and large-scale projects.",
  },
  {
    name: "Mr. Kalaiselvan S",
    role: "Project Manager – Civil Works & Construction",
    expertise: "Civil works, RCC structures, villas, independent houses, budget-aligned execution",
    phone: "+91 63799 61771",
    whatsapp: "https://wa.me/+916379961771",
    description: "Primary contact for residential interiors and home construction projects.",
  },
  {
    name: "Mr. Kamalanathan",
    role: "Project Manager – Residential Interiors & Sports Projects",
    expertise: "Residential interiors, villas, independent houses, sports courts, external development",
    phone: "+91 90802 06833",
    whatsapp: "https://wa.me/+919080206833",
    description: "Primary contact for civil works and sports infrastructure projects.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#efefec]">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#8ca77c]/10 text-[#8ca77c] text-sm font-medium mb-4"
          >
            About Us
          </motion.span>
          <h1 className="font-[var(--font-inter-tight)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            About{" "}
            <span className="text-[#8ca77c]">Intech</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Built on Experience. Driven by Execution. Trusted for Outcomes.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            INTECH DESIGNERS AND PLANNERS
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Intech Designers and Planners is a multidisciplinary Design + Build company delivering
              interiors, civil works, architectural planning, residential construction, corporate civil
              projects, and sports infrastructure across South India and major metropolitan cities.
            </p>
            <div className="bg-[#8ca77c]/5 rounded-xl p-6 border-l-4 border-[#8ca77c]">
              <p className="text-lg font-semibold text-gray-900 italic">
                Our work is guided by a simple principle: design has value only when it is executed
                reliably and performs well in real-world conditions.
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              Founded and led by <strong>Mr. S. Shankaran</strong>, Managing Director, Intech is built on
              more than three decades of hands-on experience across civil contracting, project management,
              real estate development, and interior execution. A graduate of the Government Technical
              Institute, Chennai, with formal training in Interior Design, he brings together engineering
              discipline and design understanding—a combination that defines how every project is planned
              and delivered.
            </p>
            <p className="text-lg leading-relaxed">
              From our early work in small-scale residential projects, Intech has grown into a trusted
              execution partner for corporate offices, hospitals, educational institutions, manufacturing
              facilities, showrooms, restaurants, villas, residential developments, and sports courts,
              while maintaining the same focus on execution control, quality, and accountability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How We Work */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We operate as a single accountable partner, integrating design coordination and on-site
            execution into one structured system. Our approach focuses on:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Clearly defined scope and transparent costing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Engineering-led execution and site supervision</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Coordinated sequencing of all trades</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Stage-wise quality checks</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Predictable timelines and disciplined delivery</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 mt-8 leading-relaxed">
            For residential clients, we specialise in budget-aligned solutions, ensuring cost-controlled
            execution without compromising essential quality, safety, or durability.
          </p>
        </motion.div>
      </section>

      {/* Our Commitment */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-br from-[#8ca77c] to-[#7a9570] rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-white/95 mb-6 leading-relaxed">
            We commit to delivering projects that:
          </p>
          <ul className="space-y-4 text-lg text-white/95 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>Are executed with technical clarity and discipline</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>Respect defined budgets and timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>Retain quality and usability long after completion</span>
            </li>
          </ul>
          <p className="text-xl font-semibold text-white">
            At Intech Designers and Planners, integrity is not a statement — it is how projects are delivered.
          </p>
        </motion.div>
      </section>

      {/* Project Managers Section */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Project Managers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Direct Access. Clear Communication. Accountable Delivery.
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Every project at Intech is handled by a dedicated Project Manager who serves as the single
            point of contact throughout planning and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectManagers.map((pm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pm.name}</h3>
                <p className="text-sm font-semibold text-[#8ca77c] mb-3">{pm.role}</p>
                <p className="text-sm text-gray-600 mb-4">{pm.expertise}</p>
                <p className="text-xs text-gray-500 italic">{pm.description}</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${pm.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#8ca77c] transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{pm.phone}</span>
                </a>
                <motion.a
                  href={pm.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-[#20BA5A] transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PM Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Our Project Managers are responsible for:
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Understanding client requirements and constraints</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Coordinating design, site execution, and vendors</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Managing timelines, quality standards, and site discipline</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Resolving issues proactively</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0" />
              <span>Ensuring clear, transparent communication</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            To ensure faster coordination, we provide direct WhatsApp access to the responsible Project Manager.
          </p>
        </motion.div>

        {/* Why We Share Direct Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-[#8ca77c]/5 rounded-2xl p-8 border-l-4 border-[#8ca77c]"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Why We Share Direct Contacts
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We believe clear and direct communication prevents delays and misunderstandings. Providing access
            to the responsible Project Manager ensures quicker decisions, smoother execution, and complete
            transparency.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-br from-[#8ca77c] to-[#7a9570] rounded-3xl p-8 md:p-12 text-center shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure whom to contact?
          </h2>
          <p className="text-lg text-white/95 mb-6">
            Speak with our team and we'll connect you to the right Project Manager
          </p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#8ca77c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

