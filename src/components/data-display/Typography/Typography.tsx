// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import theme from '../../theme';

export interface ITypographyProps extends TypographyProps {
  type?: 'medium' | 'semibold' | 'bold';
  bodyScale?: 'small' | 'medium' | 'large' | 'extralarge';
  captionScale?: 'extrasmall' | 'small' | 'medium' | 'large' | 'extralarge';
  overlineScale?: 'extrasmall' | 'small' | 'medium';
  numericScale?: 'small' | 'medium' | 'large' | 'extralarge' | 'extralarge2x' | 'extralarge3x';
  buttonScale?: 'small' | 'medium' | 'large' | 'extralarge' | 'extralarge2x';
}

const useStyles = makeStyles({
  regular: {
    fontWeight: 400,
  },
  medium: {
    fontWeight: 500,
  },
  semibold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
});

const useStylesBody = makeStyles({
  small: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.25px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.25px',
  },
  extralarge: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
});

const useStylesCaption = makeStyles({
  extrasmall: {
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '0.15px',
  },
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.3px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.5px',
  },
  extralarge: {
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
});

const useStylesOverline = makeStyles({
  extrasmall: {
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '0.15px',
  },
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.3px',
  },
});

const useStylesNumeric = makeStyles({
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '-0.15px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '-0.15px',
  },
  extralarge: {
    fontSize: '24px',
    lineHeight: '26px',
    letterSpacing: '-0.3px',
  },
  extralarge2x: {
    fontSize: '32px',
    lineHeight: '34px',
    letterSpacing: '-0.3px',
  },
  extralarge3x: {
    fontSize: '40px',
    lineHeight: '42px',
    letterSpacing: '-0.5px',
  },
});

const useStylesButton = makeStyles({
  small: {
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.15px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '0.15px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '18px',
    letterSpacing: '0.15px',
  },
  extralarge: {
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  extralarge2x: {
    fontSize: '20px',
    lineHeight: '22px',
    letterSpacing: '0.25px',
  },
});

export default ({
  type = 'medium',
  bodyScale = 'medium',
  captionScale = 'medium',
  overlineScale = 'medium',
  numericScale = 'medium',
  buttonScale = 'medium',
  children,
  ...props
}: ITypographyProps) => {
  const classes = useStyles();
  const classesBody = useStylesBody();
  const classesCaption = useStylesCaption();
  const classesOverline = useStylesOverline();
  const classesNumeric = useStylesNumeric();
  const classesButton = useStylesButton();
  return (
    <ThemeProvider theme={theme}>
      <Typography
        classes={{
          root: classes[type],
          body1: classesBody[bodyScale],
          caption: classesCaption[captionScale],
          overline: classesOverline[overlineScale],
          subtitle1: classesNumeric[numericScale],
          button: classesButton[buttonScale],
        }}
        {...props}
      >
        {children}
      </Typography>
    </ThemeProvider>
  );
};