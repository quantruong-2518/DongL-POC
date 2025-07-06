
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: [
      'img.freepik.com',
      'design-assets.adobeprojectm.com',
      'marketplace.canva.com'
    ],
  },
}

module.exports = nextConfig