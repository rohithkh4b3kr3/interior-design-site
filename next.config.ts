import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure src directory is recognized
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
