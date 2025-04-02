/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
