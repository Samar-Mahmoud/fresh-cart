import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/allorders",
        destination: "/orders",
        permanent: false,
      },
      {
        source: "/profile",
        destination: "/profile/addresses",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
