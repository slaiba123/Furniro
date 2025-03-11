import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity images to load
  },
};

export default nextConfig;
