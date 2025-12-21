"use client";

export default function SectionTransition() {
  return (
    <div 
      className="relative h-32 md:h-40 overflow-visible"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Smooth gradient transition from dark to light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#1a1d23] via-[#2a2d35] via-gray-100 to-white" />
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(140,167,124,0.1),transparent_70%)]" />
    </div>
  );
}

