"use client";

import { motion } from "framer-motion";

export default function MeasuringTape() {
  const marks = Array.from({ length: 101 }, (_, i) => i);

  return (
    <div className="relative w-full h-12 md:h-14 overflow-hidden bg-[#0f1115]">
      {/* Seamless moving scale */}
      <motion.div
        className="absolute inset-0 flex"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "200%" }}
      >
        {[0, 1].map((_, idx) => (
          <div key={idx} className="relative w-1/2 h-full">
            {/* Scale */}
            <div className="absolute inset-0">
              {marks.map((mark) => {
                const isMajor = mark % 10 === 0;
                const isMedium = mark % 5 === 0 && !isMajor;

                return (
                  <div
                    key={`${idx}-${mark}`}
                    className="absolute bottom-0"
                    style={{
                      left: `${mark}%`,
                      height: isMajor ? "100%" : isMedium ? "60%" : "40%",
                      width: isMajor ? "2px" : "1px",
                      backgroundColor: isMajor
                        ? "#e5e7eb" // light gray
                        : "#6b7280", // muted gray
                    }}
                  >
                    {/* Numbers only on major ticks */}
                    {isMajor && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-medium">
                        {idx === 0 ? mark : mark + 100}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Subtle center guide */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
