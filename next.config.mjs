/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    unoptimized: true,
    loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
      },
    ],
  },
};

export default nextConfig;
