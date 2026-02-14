import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["motion"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
