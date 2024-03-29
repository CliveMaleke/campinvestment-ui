declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle2: false;
    body2: false;
  }
}

export const MuiTypographyTheme = {
  fontFamily: [
    '"Roboto Serif"',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(','),
  h1: {
    fontSize: '96px',
    fontStyle: 'normal',
    lineHeight: '120px',
    letterSpacing: '-1.5px',
    fontWeight: 500,
  },
  h2: {
    fontSize: '48px',
    fontStyle: 'normal',
    lineHeight: '64px',
    letterSpacing: '-0.5px',
    fontWeight: 500,
  },
  h3: {
    fontSize: '40px',
    fontStyle: 'normal',
    lineHeight: '56px',
    letterSpacing: 0,
    fontWeight: 500,
  },
  h4: {
    fontSize: '32px',
    fontStyle: 'normal',
    lineHeight: '40px',
    letterSpacing: '0.25px',
    fontWeight: 500,
  },
  h5: {
    fontSize: '24px',
    fontStyle: 'normal',
    lineHeight: '32px',
    letterSpacing: 0,
    fontWeight: 500,
  },
  h6: {
    fontSize: '18px',
    fontStyle: 'normal',
    lineHeight: '26px',
    letterSpacing: '0.15px',
    fontWeight: 500,
  },
  subtitle1: {
    // fontFamily: ['"Manrope"', 'sans-serif'].join(','),
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
  },
  subtitle2: undefined,
  body1: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '-0.15px',
    fontWeight: 400,
  },
  body2: undefined,
  caption: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
  },
  overline: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '16px',
    letterSpacing: '0.15px',
    fontWeight: 600,
    textTransform: 'inherit' as const,
  },
};

export const MuiTypographyProps = {
  variantMapping: {
    body1: 'p',
    caption: 'p',
    overline: 'p',
  },
};
