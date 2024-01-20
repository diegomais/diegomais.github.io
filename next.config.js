/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
