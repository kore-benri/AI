/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/AI',
  assetPrefix: '/AI/',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
