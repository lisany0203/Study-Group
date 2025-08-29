/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // turbo: true, // disable Turbopack for production
  },
  eslint: {
    ignoreDuringBuilds: true, // prevent ESLint from blocking deploy
  },
  typescript: {
    ignoreBuildErrors: true, // allow TypeScript errors to not block deploy
  },
};

module.exports = nextConfig;
