"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const designPackages = [
  {
    id: 1,
    name: "Basic Design Package",
    price: "25000",
    description: "Perfect for small homes and apartments",
    features: [
      "2D Layout Plans for All Floors",
      "3D Elevation Design",
      "Basic Material Suggestions",
      "2 Revision Rounds",
      "PDF Deliverables",
    ],
    deliverables: [
      "Site Plan",
      "Floor Plans (2D)",
      "Front Elevation (3D)",
      "Basic Electrical Layout",
      "Basic Plumbing Layout",
    ],
    timeline: "15-20 Days",
  },
  {
    id: 2,
    name: "Standard Design Package",
    price: "50000",
    description: "Comprehensive design for residential projects",
    badge: "Most Popular",
    features: [
      "Complete 2D & 3D Drawings",
      "3D Interior Visualizations",
      "Detailed Material Specifications",
      "Structural Drawings",
      "Electrical & Plumbing Drawings",
      "Working Drawings",
      "5 Revision Rounds",
      "Material Selection Support",
    ],
    deliverables: [
      "Site Plan",
      "Floor Plans (2D & 3D)",
      "All Elevations (3D)",
      "3D Interior Views",
      "Structural Drawings",
      "Detailed Electrical Layout",
      "Detailed Plumbing Layout",
      "Working Drawings",
      "Material Schedule",
      "Bill of Quantities",
    ],
    timeline: "30-40 Days",
  },
  {
    id: 3,
    name: "Premium Design Package",
    price: "100000",
    description: "Complete design solution with premium support",
    badge: "Best Value",
    features: [
      "Complete Architectural Design Set",
      "Photorealistic 3D Renderings",
      "Walkthrough Animation",
      "Detailed Material Specifications",
      "Complete Structural Design",
      "MEP Drawings",
      "Interior Design Consultation",
      "Unlimited Revisions",
      "Site Visits",
      "Construction Support",
      "Premium Material Library Access",
    ],
    deliverables: [
      "All Standard Package Deliverables",
      "Photorealistic 3D Renderings (10+ views)",
      "Walkthrough Animation Video",
      "MEP Drawings (Mechanical, Electrical, Plumbing)",
      "Landscape Design",
      "Interior Design Proposals",
      "Material Sample Coordination",
      "Ongoing Design Support",
    ],
    timeline: "45-60 Days",
  },
];

export default function DesignPackagePage() {
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
          <h1 className="font-[var(--font-inter-tight)] text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Architectural & Technical Design Services — Built for Execution
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Practical planning focused on buildability, compliance, and usability. 
            Our design services integrate seamlessly with construction execution.
          </p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {designPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                pkg.badge === "Most Popular" ? "ring-2 ring-[#8ca77c]" : ""
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 right-8">
                  <span className="px-4 py-1.5 rounded-full bg-[#8ca77c] text-white text-xs font-medium shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-[var(--font-inter-tight)] text-2xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">₹{pkg.price}</span>
                  <span className="text-gray-500">one-time</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Timeline: {pkg.timeline}
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
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
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {pkg.deliverables.slice(0, 5).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                    {pkg.deliverables.length > 5 && (
                      <li className="text-xs text-gray-500 mt-2">
                        +{pkg.deliverables.length - 5} more deliverables
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-gray-900 text-white py-4 font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Request a Design Strategy Session
                </motion.button>
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
          <h2 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            Design Services Include
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Site analysis & zoning",
              "MEP integration planning",
              "Structural coordination",
              "Sanction-ready drawings for authorities",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Request a Design Strategy Session
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
