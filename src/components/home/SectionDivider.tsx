"use client";

export default function SectionDivider({ variant = "dark-to-light" }: { variant?: "dark-to-light" | "light-to-dark" }) {
  if (variant === "light-to-dark") {
    return (
      <div 
        className="relative h-32 md:h-40 overflow-visible"
        style={{
          isolation: 'isolate',
          position: 'relative',
          zIndex: 0,
        }}
      >
        {/* Ultra-smooth multi-stop gradient transition from light to dark */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #f9fafb 15%, #f3f4f6 30%, #e5e7eb 45%, #6b7280 60%, #4b5563 70%, #374151 80%, #1f2937 90%, #111827 95%, #0f1115 100%)',
          }}
        />
        {/* Subtle texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,167,124,0.08),transparent_80%)]" />
        {/* Subtle accent line at midpoint */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#8ca77c]/8 to-transparent" />
      </div>
    );
  }

  return (
    <div 
      className="relative h-32 md:h-40 overflow-visible"
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Ultra-smooth multi-stop gradient transition from dark to light */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0f1115 0%, #111827 5%, #1f2937 10%, #374151 20%, #4b5563 30%, #6b7280 40%, #e5e7eb 55%, #f3f4f6 70%, #f9fafb 85%, #ffffff 100%)',
        }}
      />
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_50%_50%,rgba(140,167,124,0.08),transparent_80%)]" />
      {/* Subtle accent line at midpoint */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#8ca77c]/8 to-transparent" />
    </div>
  );
}

