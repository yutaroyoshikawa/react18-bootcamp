/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;
