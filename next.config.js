/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["s3.brilliant.com.bd"],
    formats: ["image/webp"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
