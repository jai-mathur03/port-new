/** @type {import('next').NextConfig} */
const nextConfig = {
  // CORRECTED: Moved from experimental to root level for Next.js 15
  serverExternalPackages: ['@react-email/render'],
  
  // Uncomment the section below if you want to allow external image domains
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.jsdelivr.net',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
