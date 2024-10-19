/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "/admin/:path*",
      },
      {
        source: "/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
