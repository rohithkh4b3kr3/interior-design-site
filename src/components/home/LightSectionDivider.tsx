"use client";

export default function LightSectionDivider() {
  return (
    <div 
      className="relative h-20 md:h-24 overflow-visible"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Subtle gradient for seamless light-to-light transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/40 via-gray-50/60 to-white" />
      {/* Subtle divider line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200/60 via-gray-200 to-transparent" />
      {/* Very subtle texture */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,167,124,0.05),transparent_90%)]" />
    </div>
  );
}

