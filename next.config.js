const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { withContentlayer } = require('next-contentlayer');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withVanillaExtract(withContentlayer(nextConfig)); 