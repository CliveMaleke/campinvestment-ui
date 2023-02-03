import { MuiTypographyStyledDark } from '../data-display/Typography/style';

const MuiCssBaselineTheme = (modifyTheme: any) => ({
  '.theme-dark': {...MuiTypographyStyledDark(modifyTheme)},
});

export default MuiCssBaselineTheme;
