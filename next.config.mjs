/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: "https://github.com",
         },
      ],
      unoptimized: true,
   },
   output: "export",
}

export default nextConfig
