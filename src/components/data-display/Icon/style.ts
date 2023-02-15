const MuiIconStyled = (defaultTheme: any, modifyTheme: any) => ({
  root: { fontSize: 24, color: modifyTheme.palette.light.icon.primary },
  colorPrimary: {
    color: modifyTheme.palette.light.icon.primary,
  },
  colorSecondary: {
    color: modifyTheme.palette.light.icon.secondary,
  },
  colorDisabled: {
    color: modifyTheme.palette.light.icon.disabled,
  }
});

export default MuiIconStyled;
