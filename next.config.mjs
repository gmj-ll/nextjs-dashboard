/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://127.0.0.1:8080/:path*",
      },
    ]
  },
};

export default nextConfig;
