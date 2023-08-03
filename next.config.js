/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "ecommerce-systems.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
