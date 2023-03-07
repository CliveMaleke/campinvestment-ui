const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-addon-performance/register',
  ],
  framework: "@storybook/react",
  env: (config) => ({
    ...config,
    STORYBOOK_APP_NAME: 'Tokenomy UI',
    STORYBOOK_APP_URL: 'https://develop--63b2d35155965648145b7f9e.chromatic.com',
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
}