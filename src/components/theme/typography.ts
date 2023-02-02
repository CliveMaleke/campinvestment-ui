import MuiPaletteTheme from './palette';

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle2: false;
    body2: false;
  }
}

const { light } = MuiPaletteTheme;

export const MuiTypographyTheme = {
  fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  h1: {
    fontSize: '96px',
    fontStyle: 'normal',
    lineHeight: '120px',
    letterSpacing: '-1.5px',
    fontWeight: 500,
    color: light.text.primary,
  },
  h2: {
    fontSize: '48px',
    fontStyle: 'normal',
    lineHeight: '64px',
    letterSpacing: '-0.5px',
    fontWeight: 500,
    color: light.text.primary,
  },
  h3: {
    fontSize: '40px',
    fontStyle: 'normal',
    lineHeight: '56px',
    letterSpacing: 0,
    fontWeight: 500,
    color: light.text.primary,
  },
  h4: {
    fontSize: '32px',
    fontStyle: 'normal',
    lineHeight: '40px',
    letterSpacing: '0.25px',
    fontWeight: 500,
    color: light.text.primary,
  },
  h5: {
    fontSize: '24px',
    fontStyle: 'normal',
    lineHeight: '32px',
    letterSpacing: 0,
    fontWeight: 500,
    color: light.text.primary,
  },
  h6: {
    fontSize: '18px',
    fontStyle: 'normal',
    lineHeight: '26px',
    letterSpacing: '0.15px',
    fontWeight: 500,
    color: light.text.primary,
  },
  subtitle1: {
    fontFamily: ['"Manrope"', 'sans-serif'].join(','),
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: light.text.primary,
  },
  subtitle2: undefined,
  body1: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '-0.15px',
    fontWeight: 400,
    color: light.text.primary,
  },
  body2: undefined,
  caption: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: light.text.primary,
  },
  overline: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: light.text.primary,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '16px',
    letterSpacing: '0.15px',
    fontWeight: 600,
    color: light.text.primary,
    textTransform: 'inherit' as const,
  },
};

export const MuiTypographyProps = {
  variantMapping: {
    body1: 'p',
    caption: 'p',
    overline: 'p',
    srOnly: 'p',
  },
};
