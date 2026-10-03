/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/AI',
  assetPrefix: '/AI/',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
