import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: isProd ? '/charlottejacques3.github.io/' : '',
  images: {
  unoptimized: true,
  },
};

export default nextConfig;
