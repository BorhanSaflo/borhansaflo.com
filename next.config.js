/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
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
        source: "/:path((?!admin).*)",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
