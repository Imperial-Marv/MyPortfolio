import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  // Optional: Add basePath if deploying to GitHub Pages subpath
  // basePath: '/myportfolio',
};

module.exports = nextConfig;
export default nextConfig;
