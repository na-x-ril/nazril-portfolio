/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/nazril-portfolio-2",
  assetPrefix: "/nazril-portfolio-2/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
