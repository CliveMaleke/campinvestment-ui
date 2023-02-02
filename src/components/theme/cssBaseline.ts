import MuiPaletteTheme from './palette';

const { dark } = MuiPaletteTheme;

const MuiCssBaselineTheme = {
  '.theme-dark': {
    '& .MuiTypography-': {
      '&h1, &h2, &h3, &h4, &h5, &h6, &body1, &caption, &overline, &subtitle1, &button':
        { color: dark.text.primary },
    },
  },
};

export default MuiCssBaselineTheme;
