/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/original/*',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
