import { create } from '@storybook/theming';

const theme = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorSecondary: '#1fafed', 

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1fafed',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: 'Tokenomy',
  brandUrl: 'https://www.tokenomy.com/en',
  brandImage:
    'https://www.tokenomy.com/images/newimages/logo.svg',
});

export default theme;