const MuiSnackbarStyled = (defaultTheme: any, modifyTheme: any) => {
  return {
    root: {
      '& .MuiButtonWrapper-root': {
        display: 'grid',
        gap: '0 10px',
        gridTemplateColumns: 'min-content min-content',
        marginTop: '22px',

        '& button': {
          padding: 0,
          color: '#fff',
          fontSize: '200px',
          margin: 0,
          height: 'auto',

          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  };
};

export default MuiSnackbarStyled;
