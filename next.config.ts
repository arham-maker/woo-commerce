import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "woocommercelaunchpad.com",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "woocommercelaunchpad.com",
        pathname: "/crm/**",
      },
      {
        protocol: "https",
        hostname: "woocommercelaunchpad.com",
        pathname: "/lp1/**",
      },
    ],
  },
};

export default nextConfig;
