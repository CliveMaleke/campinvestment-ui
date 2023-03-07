const MuiIconButtonStyled = (defaultTheme: any, modifyTheme: any) => ({
  root: {
    '&.MuiIconButton-root.Mui-disabled svg' : {
      color: modifyTheme.palette.light.button.iconButton.disabled,
    },
  },
  colorPrimary: {
    '& svg': {
      color: modifyTheme.palette.light.button.iconButton.primary,
    }
  },
  colorSecondary: {
    '& svg': {
      color: modifyTheme.palette.light.button.iconButton.secondary,
    }
  },
});

export default MuiIconButtonStyled;
