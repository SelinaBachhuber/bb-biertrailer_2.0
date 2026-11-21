module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/bb-biertrailer_2.0' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};