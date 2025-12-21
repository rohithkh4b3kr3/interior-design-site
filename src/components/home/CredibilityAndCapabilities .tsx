"use client";

import Link from "next/link";

const credibilityMetrics = [
  { value: "30+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "12+", label: "Cities" },
  { value: "100%", label: "Execution Focus" },
];

const services = [
  {
    title: "Corporate Interiors",
    description:
      "Office spaces, facilities, and institutional interiors with engineering discipline.",
    link: "/our-works",
  },
  {
    title: "Residential Interiors",
    description:
      "Thoughtful design aligned to real usage, materials, and durability.",
    link: "/interior",
  },
  {
    title: "Civil Construction",
    description:
      "Complete construction with engineering control and quality systems.",
    link: "/construction-package",
  },
  {
    title: "Architectural Planning",
    description:
      "Buildable, compliant planning focused on execution clarity.",
    link: "/design-package",
  },
  {
    title: "Sports Infrastructure",
    description:
      "Engineering-led design and construction of performance facilities.",
    link: "/our-works",
  },
  {
    title: "Facility Maintenance",
    description:
      "AMC and maintenance for corporates, hospitals, and institutions.",
    link: "/our-works",
  },
];

export default function CredibilityAndCapabilities() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1115] via-[#151821] to-[#0f1115] text-white overflow-hidden isolate">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 space-y-24">

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {credibilityMetrics.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-[var(--font-inter-tight)] font-medium text-[#8ca77c] mb-2">
                {item.value}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* WHO WE ARE */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-6">
            About Us
          </p>
          <h2 className="font-[var(--font-inter-tight)] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            A design, build, and maintenance firm where execution comes first.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Multidisciplinary interiors and construction delivering corporate,
            institutional, healthcare, and residential projects across South
            India.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ca77c] mb-4">
              Our Capabilities
            </p>
            <h3 className="font-[var(--font-inter-tight)] text-2xl md:text-3xl font-medium">
              What We Deliver
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="
                  group rounded-xl
                  border border-white/10
                  bg-[#151821]
                  p-8
                  transition-all duration-300
                  hover:border-[#8ca77c]/40
                  hover:-translate-y-1
                "
              >
                <h3 className="font-[var(--font-inter-tight)] text-xl font-medium mb-3 group-hover:text-[#8ca77c] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-sm font-medium text-[#8ca77c] hover:text-[#9bb88b] inline-flex items-center gap-2 transition-colors"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
