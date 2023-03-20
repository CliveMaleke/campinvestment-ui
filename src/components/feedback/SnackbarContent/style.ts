const MuiSnackbarContentStyled = (defaultTheme: any, modifyTheme: any) => {
  return {
    root: {
      '& .MuiSnackbarContent-root': {
        padding: 0,
      },

      '& .MuiSnackbarContent-message': {
        padding: 0,
      },
    },
  };
};

export default MuiSnackbarContentStyled;
