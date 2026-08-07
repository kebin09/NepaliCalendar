/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputFileTracingIncludes: {
      "/posts": ["./data/posts.json"],
      "/podcasts": ["./data/podcasts.json"],
    },
  },
};

export default nextConfig;
