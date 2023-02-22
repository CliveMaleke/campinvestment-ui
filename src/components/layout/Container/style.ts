const MuiContainerStyled = (defaultTheme: any, modifyTheme: any) => {
  console.log(defaultTheme)
  console.log(modifyTheme)
  // console.log(modifyTheme.palette.light.button)
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
