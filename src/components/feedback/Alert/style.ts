const MuiAlertStyled = (defaultTheme: any, modifyTheme: any) => {
  const colorPrimary = modifyTheme.palette.light.text.primary;

  return {
    root: {
      '&.MuiAlert-standardGeneral': {
        backgroundColor: modifyTheme.palette.light.alert.background.regular,
        color: colorPrimary,

        '& .MuiAlert-icon': {
          display: 'none',
        },
      },
      '&.MuiAlert-root': {
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      '& .MuiAlert-message': {
        color: modifyTheme.palette.light.alert.text,
        padding: 0,
        fontSize: '14px',
      },
      '& .MuiAlert-icon': {
        alignSelf: 'flex-start',
        marginRight: '8px',
        padding: 0,
      },
      '& .MuiAlert-action': {
        alignSelf: 'flex-start',

        '& svg': {
          color: '#fff',
        },
      },
      '& .MuiSvgIcon-root': {
        color: modifyTheme.palette.light.alert.text,
      },
      '& .MuiTypography-root': {
        color: '#fff',
      },
      '& .MuiButtonWrapper-root': {
        display: 'grid',
        gap: '0 24px',
        gridTemplateColumns: 'min-content min-content',
        marginTop: '22px',

        '& .MuiButtonBase-root': {
          padding: 0,
          color: '#fff',
          fontSize: '14px',
        },
      },
    },
    standardError: {
      backgroundColor: modifyTheme.palette.light.alert.background.error,
      color: colorPrimary,
    },
    standardWarning: {
      backgroundColor: modifyTheme.palette.light.alert.background.warning,
      color: colorPrimary,
    },
    standardInfo: {
      backgroundColor: modifyTheme.palette.light.alert.background.info,
      color: colorPrimary,
    },
    standardSuccess: {
      backgroundColor: modifyTheme.palette.light.alert.background.success,
      color: colorPrimary,
    },
  };
};

export default MuiAlertStyled;
