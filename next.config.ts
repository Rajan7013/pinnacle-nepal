import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-8b15d5b605d145fcbbb84efa59618960.r2.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [75, 90, 100],
  },
  // Set basePath for GitHub Pages (replace 'your-repo-name' with actual repo name)
  basePath: process.env.NODE_ENV === 'production' ? '/pinnacle-nepal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pinnacle-nepal/' : '',
};

export default nextConfig;
