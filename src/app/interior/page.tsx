"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const interiorServices = [
  {
    id: 1,
    title: "Corporate Interior Execution",
    description: "Execution-led corporate interior solutions designed for operational efficiency, brand alignment, and long-term usability.",
    scope: [
      "Space planning & layout optimization",
      "Modular & custom joinery execution",
      "MEP coordination & integration",
      "Flooring, partitions, ceilings",
      "Lighting & data/power integration",
    ],
  },
  {
    id: 2,
    title: "Residential Interior Execution",
    description: "Functional, durable, and well-executed residential interiors tailored to how homes are actually used.",
    scope: [
      "Kitchens & wardrobes",
      "Custom carpentry execution",
      "False ceilings & lighting layouts",
      "Material selection & finish execution",
      "Complete turnkey delivery",
    ],
  },
  {
    id: 3,
    title: "Turnkey Interior Project Delivery",
    description: "End-to-end interior execution with single-point accountability, from design coordination to final handover.",
    scope: [
      "Design-build coordination",
      "Site supervision & quality control",
      "Material procurement & management",
      "Trade sequencing & coordination",
      "Testing, commissioning & handover",
    ],
  },
  {
    id: 4,
    title: "MEP Coordination",
    description: "Seamless integration of mechanical, electrical, and plumbing systems within interior execution.",
    scope: [
      "Electrical layout & execution",
      "HVAC integration planning",
      "Plumbing & drainage coordination",
      "Fire safety system integration",
      "Data & communication cabling",
    ],
  },
  {
    id: 5,
    title: "Site Supervision & Quality Governance",
    description: "Dedicated site supervision ensuring execution discipline, quality checks, and timeline adherence.",
    scope: [
      "Daily site supervision",
      "Stage-wise quality inspections",
      "Material verification & approval",
      "Progress reporting & documentation",
      "Variation management & approvals",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Site assessment, requirement documentation, and feasibility review.",
  },
  {
    step: "02",
    title: "Design Coordination",
    description: "Technical detailing, BOQ finalisation, and material specifications.",
  },
  {
    step: "03",
    title: "Procurement & Mobilisation",
    description: "Material procurement, vendor coordination, and site mobilisation.",
  },
  {
    step: "04",
    title: "Execution & Quality Control",
    description: "Supervised execution with stage-wise quality checks and documentation.",
  },
  {
    step: "05",
    title: "Commissioning & Handover",
    description: "Testing, commissioning, final inspections, and handover documentation.",
  },
];

export default function InteriorPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-[var(--font-inter-tight)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Interior Execution & Turnkey Delivery — Designed for Real Use
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Functional, durable, and well-executed interiors delivered with engineering discipline and quality control. 
            From corporate workspaces to residential homes, we focus on how spaces perform in real-world conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Discuss Interior Execution with Our PM
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {interiorServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-[var(--font-inter-tight)] text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Execution Process
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              A structured delivery framework ensuring predictability, quality control, and accountability at every stage.
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
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4 font-semibold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Details */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="font-[var(--font-inter-tight)] text-2xl font-bold mb-6 text-gray-900">
            Technical Coordination & Quality Governance
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Technical Coordination</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>MEP integration planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>Structural coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>Trade sequencing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">BOQ & Variation Management</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>Defined BOQs before execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>Written approvals for variations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                  <span>Installation QA checkpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-10 md:p-12 text-center text-white"
        >
          <h2 className="font-[var(--font-inter-tight)] text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Interior Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Speak directly with our project management team to understand execution scope, timelines, and deliverables.
          </p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Discuss Interior Execution with Our PM
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
