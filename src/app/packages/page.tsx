"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const constructionPackages = [
  {
    id: 1,
    name: "Basic Package",
    price: "2499",
    unit: "per sqft",
    badge: null,
    features: {
      design: [
        "SCHEME DRAWING: ALL FLOORS (2D)",
        "ELEVATION DESIGN: (3D)",
      ],
      projectManagement: [
        "Site Engineer: One Visit Per Day",
        "Project Manager: Visit site Once in a Week",
        "Android/IOS App: Access to APP for Site Status update",
      ],
      structure: [
        "Basement Height: Upto 2 feet",
        "Steel: Any ISI Brand",
        "AAC: For Partition walls. 8-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
        "Cement: Penna / Priya",
        "M Sand: Blockwork & All Masonry Works",
        "P Sand: Plastering Works",
        "Concrete Grade: M20 (Manual Mix)",
        "Ceiling Height: 10 Feet",
        "Steel Reinforcement: As per Standard",
      ],
      bathroom: [
        "Wall Tiles: Upto 7' Height. Size 2'X1' Vitrified Tile. Upto ₹40/Sqft",
        "Bath & CP Fittings: Cera | Upto ₹12000 Per Bathroom",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Any ISI Brand",
        "Overhead Tank: 1000 litres Sintex | 3 Layered | UV Protected | White Colour",
      ],
      flooring: [
        "Living, Dining, Bedrooms & Kitchen: 2'X2' | Vitrified Tiles Upto ₹45/Sqft",
        "Balcony & Utility: Size 1'X1' | Upto 35/Sqft",
        "Staircase: Size 1'X1' Tile : Upto ₹35/sqft",
        "Car Parking: 1'X1' Parking Tile | Upto ₹35/Sqft",
        "Terrace Flooring: Screed Concreting with Waterproofing",
      ],
      kitchen: [
        "Wall Tile: Vitrified Tile (2'X1') | Upto ₹45/Sqft",
        "Sink Faucet: Upto ₹900 / No",
        "Kitchen Sink: Stainless Steel single bowl Upto ₹2800",
        "Kitchen Granite Top: Upto ₹90/Sqft",
      ],
      doors: [
        "Main Door: Malaysian Teak Door & Teak Frame | 32mm Thickness | 5\"X3\" Thick Frame",
        "Room Doors: White Panel Door | Sal Wood Frame | 7'X3'",
        "Bathroom Door: PVC Door | 7'X2.5'",
        "Windows: Aluminium Sliding window | Max 4' X 4' | One Window Per Room | 5mm Clear Glass",
      ],
      painting: [
        "Inner Wall Putty: 2 coats of Wall Putty | Any ISI Brand",
        "Wall Painting: 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
        "Ceiling Painting: 1 coat of Primer | 2 coats of Tractor emulsion | Any ISI Brand",
        "Exterior Paint: 1 coat of Primer | 2 Coats of Ace | Any ISI Brand",
      ],
      electrical: [
        "Wires – Essar",
        "Switches – Fybros",
        "Complete electrical layout with all necessary points",
      ],
    },
    excluded: [
      "Compound Wall @ 425/Sqft & Gate",
      "Sump & Septic Tank @ 24/Litre",
      "Lift, Lift Pit and Shaft",
      "Electricity Connection",
      "Building Plan Approval",
      "Elevation Special Materials",
    ],
  },
  {
    id: 2,
    name: "Standard Package",
    price: "2799",
    unit: "per sqft",
    badge: "Popular",
    features: {
      design: [
        "SCHEME DRAWING: ALL FLOORS (2D)",
        "ELEVATION DESIGN: (3D)",
        "HALF LAYOUT: ALL FLOORS (3D)",
        "ELECTRICAL DRAWINGS: ALL FLOORS (2D)",
        "PLUMBING DRAWING: ALL FLOORS (2D)",
        "WORKING DRAWING: ALL FLOORS (2D)",
      ],
      projectManagement: [
        "Site Engineer: Dedicated Full-Time Site Engineer",
        "Project Manager: Visit site Twice in a Week",
        "Android/IOS App: Daily Photo Upload. Project Status Monitoring",
        "Architect: Support Till Design Completion",
      ],
      structure: [
        "Basement Height: Upto 3 feet",
        "Steel: Arun TMT / GBR or Equivalent",
        "Chamber Bricks: For Partition walls. 9-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
        "Cement: Ramco / Dalmia",
        "M Sand: Blockwork & All Masonry Works",
        "P Sand: Plastering Works",
        "Concrete Grade: M20 | RMC for Roof",
        "Ceiling Height: 10 Feet",
        "Steel Reinforcement: As per Standard",
      ],
      bathroom: [
        "Wall Tiles: Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft",
        "Bath & CP Fittings: Parryware | Upto ₹17000 Per Bathroom",
        "Plumbing Pipes & Fittings: Inner CPVC, Outer PVC. Brands: Any ISI Brand",
        "Overhead Tank: 2000 litres Sintex | 3 Layered | UV Protected | White Colour",
      ],
      flooring: [
        "Living, Dining, Bedrooms & Kitchen: 4'X2' | Vitrified Tiles Upto ₹65/Sqft",
        "Balcony & Utility: Size 2'X2' | Upto 50/Sqft | Antiskid",
        "Staircase: Full Body Tile : Upto ₹110/sqft",
        "Car Parking: 1'X1' Heavy Duty Tile | Upto ₹50/Sqft",
        "Terrace Flooring: Screed Concreting with Waterproofing",
      ],
      kitchen: [
        "Wall Tile: Vitrified Tile (2'X2') | Upto ₹55/Sqft",
        "Sink Faucet: Upto ₹2000 / No",
        "Kitchen Sink: Stainless Steel sink with Drain Upto ₹4000",
        "Kitchen Granite Top: Upto ₹140/Sqft",
      ],
      doors: [
        "Main Door: Malaysian Teak Door & Teak Frame - Readymade | 35mm Thickness | Upto 22000/nos",
        "Room Doors: Flush Door | Sal Wood Frame | 7'X3'",
        "Bathroom Door: WPC Door & Frame | 7'X2.5'",
        "Windows: UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
      ],
      painting: [
        "Inner Wall Putty: 2 coats of Wall Putty | Any ISI Brand",
        "Wall Painting: 1 coat of Primer | 2 coats of Premium emulsion",
        "Ceiling Painting: 1 coat of Primer | 2 coats of Premium emulsion",
        "Exterior Paint: 1 coat of Primer | 2 Coats of Premium Exterior Paint",
      ],
      electrical: [
        "Wires – Premium ISI Brand",
        "Switches – Premium Brand",
        "Complete electrical layout with all necessary points",
      ],
    },
    excluded: [
      "Compound Wall @ 425/Sqft & Gate",
      "Sump & Septic Tank @ 24/Litre",
      "Lift, Lift Pit and Shaft",
      "Electricity Connection",
      "Building Plan Approval",
      "Elevation Special Materials",
    ],
  },
  {
    id: 3,
    name: "Premium Package",
    price: "3099",
    unit: "per sqft",
    badge: "Best Value",
    features: {
      design: [
        "Complete Architectural Design Set",
        "3D Renderings for All Spaces",
        "Detailed Working Drawings",
        "Structural Drawings",
        "Electrical & Plumbing Layouts",
        "Material Selection Support",
      ],
      projectManagement: [
        "Dedicated Full-Time Site Engineer",
        "Project Manager: Daily Visits",
        "Architect: Regular Site Supervision",
        "Advanced Project Management App",
        "Weekly Progress Reports",
      ],
      structure: [
        "Basement Height: Upto 4 feet",
        "Steel: Premium TMT Bars",
        "Premium Bricks: For all construction",
        "Cement: Premium Brand",
        "Concrete Grade: M25 | RMC for All",
        "Ceiling Height: 11 Feet",
        "Enhanced Structural Design",
      ],
      bathroom: [
        "Wall Tiles: Premium Full Height Tiles | Upto ₹80/Sqft",
        "Bath & CP Fittings: Premium Brand | Upto ₹25000 Per Bathroom",
        "Premium Plumbing System",
        "Overhead Tank: 3000 litres Premium Tank",
      ],
      flooring: [
        "Premium Vitrified Tiles | Upto ₹100/Sqft",
        "Premium Staircase Tiles",
        "Terrace with Premium Waterproofing",
      ],
      kitchen: [
        "Premium Kitchen Tiles",
        "Premium Kitchen Sink & Faucet",
        "Premium Granite Countertops | Upto ₹200/Sqft",
      ],
      doors: [
        "Premium Main Door",
        "Premium Room Doors",
        "Premium Windows with Double Glazing",
      ],
      painting: [
        "Premium Interior Paint",
        "Premium Exterior Paint",
        "Textured Paint Options",
      ],
      electrical: [
        "Premium Electrical Fittings",
        "Smart Home Ready",
        "Premium Switches & Wiring",
      ],
    },
    excluded: [
      "Compound Wall & Gate",
      "Sump & Septic Tank",
      "Lift Installation",
      "Electricity Connection",
      "Building Plan Approval",
    ],
  },
];

const designPackages = [
  {
    id: 1,
    name: "Basic Design Package",
    price: "45",
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
    price: "95",
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
    price: "180",
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

const categoryLabels: Record<string, string> = {
  design: "Design",
  projectManagement: "Project Management",
  structure: "Structure",
  bathroom: "Bathroom & Plumbing",
  flooring: "Flooring",
  kitchen: "Kitchen & Dining",
  doors: "Doors, Windows & Railing",
  painting: "Painting",
  electrical: "Electrical",
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<"construction" | "design">("construction");

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
            Construction & Design Packages
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Comprehensive construction execution and architectural design services 
            with transparent pricing and quality-controlled delivery.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-12 mb-16"
        >
          <div className="inline-flex rounded-full bg-white p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setActiveTab("construction")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "construction"
                  ? "bg-[#8ca77c] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Construction Packages
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-[#8ca77c] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Design Packages
            </button>
          </div>
        </motion.div>
      </section>

      {/* Construction Packages */}
      {activeTab === "construction" && (
        <>
          {/* Trust Block */}
          <section className="mx-auto max-w-7xl px-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200"
            >
              <h2 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Why Choose Our Construction Execution
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Single-point accountability",
                  "Project managers & site supervisors",
                  "Transparent BOQs & no hidden costs",
                  "Quality materials with ISI compliance and on-site QA checks",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Packages Grid */}
          <section className="mx-auto max-w-7xl px-6 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {constructionPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                    pkg.badge === "Popular" ? "ring-2 ring-[#8ca77c]" : ""
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">₹{pkg.price}</span>
                      <span className="text-gray-500">{pkg.unit}</span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    {Object.entries(pkg.features).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-sm text-gray-800 mb-3">
                          {categoryLabels[category]}
                        </h4>
                        <ul className="space-y-2">
                          {items.slice(0, 3).map((item, i) => (
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
                              <span>{item}</span>
                            </li>
                          ))}
                          {items.length > 3 && (
                            <li className="text-xs text-gray-500 mt-2">
                              +{items.length - 3} more items
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact-us">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-lg bg-gray-900 text-white py-4 font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
                    >
                      Schedule a Site Feasibility Call
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-sm mt-16"
            >
              <h2 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Our Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Work Breakdown Structure",
                  "Milestone-driven delivery",
                  "Periodic progress reporting",
                  "Handover documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8ca77c] mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">{item.split(":")[0]}</h3>
                      {item.includes(":") && (
                        <p className="text-sm text-gray-600">{item.split(":")[1].trim()}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </>
      )}

      {/* Design Packages */}
      {activeTab === "design" && (
        <>
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
                      <span className="text-gray-500">per Sq.ft</span>
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
        </>
      )}
    </main>
  );
}

