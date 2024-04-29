/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/src/:path*",
        destination: "https://api.resend.com/emails",
      },
      {
        source: "/api/:path*",
        destination: "https://api.resend.com/emails/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
