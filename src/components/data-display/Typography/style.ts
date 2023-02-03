const MuiTypographyStyled = (defaultTheme: any, modifyTheme: any) => {
  const colorPrimary = modifyTheme.palette.light.text.primary;
  const colorSecondary = modifyTheme.palette.light.text.secondary;
  const colorLink = modifyTheme.palette.light.text.link;
  return {
    root: {
      '&.MuiTypography-link': {
        color: colorLink,
        textDecoration: 'none',
      },
    },
    h1: {
      color: colorPrimary,
    },
    h2: {
      color: colorPrimary,
    },
    h3: {
      color: colorPrimary,
    },
    h4: {
      color: colorPrimary,
    },
    h5: {
      color: colorPrimary,
    },
    h6: {
      color: colorPrimary,
    },
    subtitle1: {
      color: colorPrimary,
    },
    body1: {
      color: colorPrimary,
    },
    caption: {
      color: colorPrimary,
    },
    overline: {
      color: colorPrimary,
    },
    button: {
      color: colorPrimary,
    },
    colorPrimary: {
      color: colorPrimary,
    },
    colorSecondary: {
      color: colorSecondary,
    },
  };
};

export const MuiTypographyStyledDark = (modifyTheme: any) => {
  const colorPrimaryDark = modifyTheme.palette.dark.text.primary;
  const colorSecondaryDark = modifyTheme.palette.dark.text.secondary;
  const colorLinkDark = modifyTheme.palette.dark.text.link;
  return {
    '& .MuiTypography-': {
      '&h1, &h2, &h3, &h4, &h5, &h6, &subtitle1, &body1, &caption, &overline, &button, &colorPrimary':
        { color: colorPrimaryDark },
      '&colorSecondary': {
        color: colorSecondaryDark,
      },
      '&body1, &caption, &subtitle1': {
        '&.MuiTypography-link': { color: colorLinkDark },
      },
    },
  };
};

export default MuiTypographyStyled;
