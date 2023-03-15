import { MuiTypographyStyledDark } from '../data-display/Typography/style';
import { MuiButtonStyledDark } from '../inputs/Button/style';

const MuiCssBaselineTheme = (modifyTheme: any) => ({
  '.theme-dark': {
    ...MuiTypographyStyledDark(modifyTheme),
    ...MuiButtonStyledDark(modifyTheme)
  },
});

export default MuiCssBaselineTheme;
