const { withFrameworkConfig } = require('./framework/common/config');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    framework: {
      name: 'shopify_local',
    },
  },

  i18n: {
    locales: ['en-US', 'ua'],
    defaultLocale: 'en-US',
  },
};

module.exports = withFrameworkConfig(nextConfig);
