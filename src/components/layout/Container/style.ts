const MuiContainerStyled = (defaultTheme: any, modifyTheme: any) => {
  return {
    maxWidthXs: {
      [modifyTheme.breakpoints.up('xs')]: {
        maxWidth: 376,
      },
    },
    root: {
      backgroundColor: modifyTheme.palette.primary
    },
  }
};

export default MuiContainerStyled;
