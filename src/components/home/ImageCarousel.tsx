"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Preload next image
  useEffect(() => {
    if (images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      const img = new window.Image();
      img.src = images[nextIndex];
    }
  }, [currentIndex, images]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden group">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
          onAnimationStart={() => setIsLoading(true)}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            unoptimized
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 active:scale-95"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 active:scale-95"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Image Counter */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
        <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/75 w-1.5 sm:w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

