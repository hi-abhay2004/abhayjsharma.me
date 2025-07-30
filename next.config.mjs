/** @type {import('next').NextConfig} */
const nextConfig = {
      output: "export",
       images: {
    unoptimized: true, // <--- THIS LINE disables image optimization
  },
};

export default nextConfig;
