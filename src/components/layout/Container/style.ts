const MuiContainerStyled = (defaultTheme: any, modifyTheme: any) => ({
  maxWidthXs: {
    [modifyTheme.breakpoints.up('xs')]: {
      maxWidth: 376,
    },
  },
});

export default MuiContainerStyled;
