const MuiButtonStyled = (defaultTheme: any, modifyTheme: any) => ({
  root: {
    '& svg': {
      color: 'inherit',
    }
  },
  containedPrimary: {
    backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgPressed,
    },
  },
  outlinedPrimary: {
    borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlineDefault,
    color: modifyTheme.palette.light.button.outlinedPrimary.textDefault,
    '&:hover': {
      borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlineDefault,
    },
  },
  textPrimary: {
    color: modifyTheme.palette.light.button.outlinedPrimary.textDefault,
  },
  touchRipple: {
    backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgDefault,
  }
});

export default MuiButtonStyled;
