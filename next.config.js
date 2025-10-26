/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Fix for Next 15/16: move experimental key and add Turbopack root
  serverExternalPackages: ['@react-email/render'],

  // ✅ Prevent Render “workspace root” error
  turbopack: {
    root: __dirname,
  },

  // ✅ Optional future-proofing (you can safely keep or remove)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};

module.exports = nextConfig;

