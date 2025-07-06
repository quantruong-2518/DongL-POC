/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dongl.co.kr',
        pathname: '/assets/image/**',
      },
    ],
  },
};

module.exports = nextConfig;