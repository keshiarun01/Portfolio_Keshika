/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Portfolio_Keshika' : '';

const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,   // ← add this
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
module.exports = nextConfig;
