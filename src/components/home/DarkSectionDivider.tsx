"use client";

export default function DarkSectionDivider() {
  return (
    <div 
      className="relative h-16 md:h-20 overflow-visible"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Seamless dark-to-dark transition with subtle variation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#151821] via-[#1a1d23] via-[#151821] to-[#0f1115]" />
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,167,124,0.06),transparent_80%)]" />
      {/* Very subtle accent line */}
      <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-gradient-to-r from-transparent via-[#8ca77c]/5 to-transparent" />
    </div>
  );
}

