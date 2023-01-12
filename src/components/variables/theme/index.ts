// Vendors
import { createTheme } from '@material-ui/core/styles';

// Colors

// THEME SECTIONS
import { MuiTypographyTheme, MuiTypographyProps } from './typography';
import MuiBreakpointsTheme from './breakpoints';

// STYLES SECTIONS
// Layout
// Inputs
// Navigation
// Data display
// import MuiTypographyStyled from '../../data-display/Typography/style';
// Lab
// Feedback

const defaultTheme = createTheme();

// A custom theme for this app
export const modifyTheme = createTheme({
  typography: MuiTypographyTheme,
  breakpoints: MuiBreakpointsTheme,
});

const theme = createTheme({
  ...modifyTheme,
  props: {
    MuiTypography: MuiTypographyProps,
  },
  overrides: {
    // Layout
    // Inputs
    // Navigation
    // Data display
    // MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    // Feedback
    // Lab
    // Icon
  },
});

export default theme;
