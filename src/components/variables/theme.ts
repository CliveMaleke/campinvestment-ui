// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Configs variables

// STYLES SECTIONS
// Layout
// Inputs
// Navigation
// Data display
import MuiTypographyStyled from '../data-display/Typography/style';
// Lab
// Feedback

const defaultTheme = createMuiTheme();

// A custom theme for this app
export const modifyTheme = createMuiTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const theme = createMuiTheme({
  ...modifyTheme,
  overrides: {
    // Layout

    // Inputs

    // Navigation

    // Data display
    MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),

    // Feedback

    // Lab

    // Icon
  },
});

export default theme;