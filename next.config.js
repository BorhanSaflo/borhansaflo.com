/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
