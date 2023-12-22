/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['tree'],
  experimental: {
    serverComponentsExternalPackages: ['@ffprobe-installer/ffprobe']
  }
}

module.exports = nextConfig
