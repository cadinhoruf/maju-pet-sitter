import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res2.weblium.site",
    }],
  },
};

export default nextConfig;
