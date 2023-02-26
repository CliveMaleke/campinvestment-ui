const MuiSnackbarStyled = (defaultTheme: any, modifyTheme: any) => {
  return {
    root: {
      '& .MuiButtonWrapper-root': {
        display: 'grid',
        gap: '0 10px',
        gridTemplateColumns: 'min-content min-content',
        marginTop: '22px',
      },
      '& button': {
        padding: 0,
      },
    },
  };
};

export default MuiSnackbarStyled;
