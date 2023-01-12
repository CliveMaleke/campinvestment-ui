import { gray70 } from '../colors';

declare module '@material-ui/core/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle2: false;
    body2: false;
  }
}

export const MuiTypographyTheme = {
  fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  h1: {
    fontSize: '96px',
    fontStyle: 'normal',
    lineHeight: '120px',
    letterSpacing: '-1.5px',
    fontWeight: 500,
    color: gray70,
  },
  h2: {
    fontSize: '48px',
    fontStyle: 'normal',
    lineHeight: '64px',
    letterSpacing: '-0.5px',
    fontWeight: 500,
    color: gray70,
  },
  h3: {
    fontSize: '40px',
    fontStyle: 'normal',
    lineHeight: '56px',
    letterSpacing: 0,
    fontWeight: 500,
    color: gray70,
  },
  h4: {
    fontSize: '32px',
    fontStyle: 'normal',
    lineHeight: '40px',
    letterSpacing: '0.25px',
    fontWeight: 500,
    color: gray70,
  },
  h5: {
    fontSize: '24px',
    fontStyle: 'normal',
    lineHeight: '32px',
    letterSpacing: 0,
    fontWeight: 500,
    color: gray70,
  },
  h6: {
    fontSize: '18px',
    fontStyle: 'normal',
    lineHeight: '26px',
    letterSpacing: '0.15px',
    fontWeight: 500,
    color: gray70,
  },
  subtitle1: {
    fontFamily: ['"Manrope"', 'sans-serif'].join(','),
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: gray70,
  },
  subtitle2: undefined,
  body1: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '-0.15px',
    fontWeight: 400,
    color: gray70,
  },
  body2: undefined,
  caption: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: gray70,
  },
  overline: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '18px',
    letterSpacing: '0.3px',
    fontWeight: 400,
    color: gray70,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '16px',
    letterSpacing: '0.15px',
    fontWeight: 600,
    color: gray70,
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
