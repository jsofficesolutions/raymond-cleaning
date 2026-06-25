/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  // If you are using next/image with static export, you may also need:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
