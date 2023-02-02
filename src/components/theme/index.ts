// Vendors
import { createTheme } from '@material-ui/core/styles';

// Colors

// THEME SECTIONS
import { MuiTypographyTheme, MuiTypographyProps } from './typography';
import MuiBreakpointsTheme from './breakpoints';
import MuiPaletteTheme from './palette';
import MuiCssBaselineTheme from './cssBaseline';

// STYLES SECTIONS
// Layout
import MuiContainerStyled from '../layout/Container/style';
// Inputs
import MuiFormLabelStyled from '../inputs/FormLabel/style';
// Navigation
// Data display
// import MuiTypographyStyled from '../../data-display/Typography/style';
// Lab
// Feedback

const defaultTheme = createTheme();

// A custom theme for this app
export const modifyTheme = createTheme({
  breakpoints: MuiBreakpointsTheme,
  palette: MuiPaletteTheme,
  typography: MuiTypographyTheme,
});

const theme = createTheme({
  ...modifyTheme,
  props: {
    MuiTypography: MuiTypographyProps,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': MuiCssBaselineTheme,
    },
    // Layout
    MuiContainer: MuiContainerStyled(defaultTheme, modifyTheme),
    // Inputs
    MuiFormLabel: MuiFormLabelStyled(defaultTheme, modifyTheme),
    // Navigation
    // Data display
    // MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    // Feedback
    // Lab
    // Icon
  },
});

export default theme;
