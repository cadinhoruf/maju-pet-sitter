import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res2.weblium.site",
    }],
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

export default nextConfig;
