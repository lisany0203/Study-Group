/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors breaking the build
  },
  typescript: {
    ignoreBuildErrors: true, // temporarily ignore TypeScript errors during build
  },
};

module.exports = nextConfig;
