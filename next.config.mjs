/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote image domains here when real assets (video poster, avatars) are hosted externally.
    remotePatterns: [],
  },
};

export default nextConfig;
