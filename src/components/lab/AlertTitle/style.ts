const MuiAlertTitleStyled = (defaultTheme: any, modifyTheme: any) => {
  return {
    root: {
      '& .MuiTypography-root': {
        color: modifyTheme.palette.light.alertTitle,
      },
    },
  };
};

export default MuiAlertTitleStyled;
