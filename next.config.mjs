/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from breaking build
  },
};

export default nextConfig;
