/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fakestoreapi.com"
        },
        {
          protocol: "http",
          hostname: "dummyimage.com"
        }
      ],
    },
  };
export default nextConfig;
