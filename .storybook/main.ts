const path = require('path');

module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-dark-mode',
  ],
  framework: "@storybook/react",
  env: (config) => ({
    ...config,
    STORYBOOK_APP_NAME: 'Tokenomy UI',
  }),
  // webpackFinal: async (config, { configType }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@/variables/colors': path.resolve(__dirname, '../src/components/variables/colors'),
  //     '@/components/Button': path.resolve(__dirname, '../src/components/inputs/Button'),
  //   };

  //   return config;
  // }
}