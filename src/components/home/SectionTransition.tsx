"use client";

export default function SectionTransition() {
  return (
    <div 
      className="relative h-24 md:h-32 overflow-visible"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#1a1d23] to-white" />
      {/* Large solid white bottom barrier to prevent any bleed */}
      <div 
        className="absolute inset-x-0 bottom-0 bg-white"
        style={{
          height: '50px',
          zIndex: 1,
          transform: 'translateY(50px)',
        }}
        aria-hidden="true"
      />
      {/* Additional solid white line at the exact boundary */}
      <div 
        className="absolute inset-x-0 bottom-0 bg-white"
        style={{
          height: '2px',
          zIndex: 2,
          boxShadow: '0 2px 0 0 #ffffff',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

