// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wmhindia.s3-eu-central-2.ionoscloud.com"], // whitelist your S3 domain
  },
};

export default nextConfig;
