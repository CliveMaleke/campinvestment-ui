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
import MuiButtonStyled from '../inputs/Button/style';
import MuiIconButtonStyled from '../inputs/IconButton/style';
// Navigation
// Data display
import MuiTypographyStyled from '../data-display/Typography/style';
import MuiIconStyled from '../data-display/Icon/style';
// Feedback
import MuiAlertStyled from '../feedback/Alert/style';
import MuiSnackbarStyled from '../feedback/Snackbar/style';
import MuiSnackbarContentStyled from '../feedback/SnackbarContent/style';

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
      '@global': MuiCssBaselineTheme(modifyTheme),
    },
    // Layout
    MuiContainer: MuiContainerStyled(defaultTheme, modifyTheme),
    // Inputs
    MuiFormLabel: MuiFormLabelStyled(defaultTheme, modifyTheme),
    MuiButton: MuiButtonStyled(defaultTheme, modifyTheme),
    MuiIconButton: MuiIconButtonStyled(defaultTheme, modifyTheme),
    // Navigation
    // Data display
    MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    MuiSvgIcon: MuiIconStyled(defaultTheme, modifyTheme),
    // Feedback
    MuiAlert: MuiAlertStyled(defaultTheme, modifyTheme),
    MuiSnackbar: MuiSnackbarStyled(defaultTheme, modifyTheme),
    MuiSnackbarContent: MuiSnackbarContentStyled(defaultTheme, modifyTheme),
    // Icon
  },
});

export default theme;
