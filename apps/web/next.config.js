/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        port: "",
        pathname: "/61114f16d48cb8a800a4f117/**",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
