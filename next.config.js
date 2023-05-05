const { withFrameworkConfig } = require('./framework/common/config');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    framework: {
      name: process.env.NEXT_PUBLIC_FRAMEWORK,
    },
  },

  i18n: {
    locales: ['en-US', 'ua'],
    defaultLocale: 'en-US',
  },
};

module.exports = withFrameworkConfig(nextConfig);
