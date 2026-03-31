/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Set basePath to your GitHub repo name when deploying to GitHub Pages
  // e.g., if your repo is github.com/keshiarun01/portfolio, set to '/portfolio'
  basePath: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
