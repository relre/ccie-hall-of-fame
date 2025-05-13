/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slash'i aktif ediyoruz (paylaşımlı hosting için önemli)
  trailingSlash: true,
};

module.exports = nextConfig; 