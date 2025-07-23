import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/:path((?!admin).*)",
        destination: "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
