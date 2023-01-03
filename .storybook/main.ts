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
    'storybook-addon-performance/register',
  ],
  framework: "@storybook/react",
  env: (config) => ({
    ...config,
    STORYBOOK_APP_NAME: 'Tokenomy UI',
  }),
}