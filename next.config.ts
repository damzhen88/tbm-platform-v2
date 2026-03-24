import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
