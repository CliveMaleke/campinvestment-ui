const MuiAlertStyled = (defaultTheme: any, modifyTheme: any) => {
  const colorPrimary = modifyTheme.palette.light.text.primary;

  return {
    root: {
      minWidth: '370px',
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'row',

      '&.MuiAlert-standardGeneral': {
        backgroundColor: modifyTheme.palette.light.alert.background.regular,
        color: colorPrimary,

        '& .MuiAlert-icon': {
          display: 'none',
        },
      },
      '&.MuiAlert-standardOutlinedGeneral': {
        background: 'transparent',
        border: `1px solid ${modifyTheme.palette.light.alert.background.regular}`,

        '& .MuiAlert-icon': {
          display: 'none',
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.text.regular,
          padding: 0,
          fontSize: '14px',
        },
      },
      '&.MuiAlert-standardFilledGeneral': {
        backgroundColor: modifyTheme.palette.light.alert.background.regular,
        color: colorPrimary,

        '& .MuiAlert-icon': {
          display: 'none',
        },
      },
      '&.MuiAlert-outlinedError': {
        border: `1px solid ${modifyTheme.palette.light.alert.background.error}`,

        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            color: modifyTheme.palette.light.alert.text.error,
          },
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.text.error,
          padding: 0,
          fontSize: '14px',
        },
      },
      '&.MuiAlert-outlinedWarning': {
        border: `1px solid ${modifyTheme.palette.light.alert.background.warning}`,

        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            color: modifyTheme.palette.light.alert.text.warning,
          },
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.text.warning,
          padding: 0,
          fontSize: '14px',
        },
      },
      '&.MuiAlert-outlinedInfo': {
        border: `1px solid ${modifyTheme.palette.light.alert.background.info}`,

        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            color: modifyTheme.palette.light.alert.text.info,
          },
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.text.info,
          padding: 0,
          fontSize: '14px',
        },
      },
      '&.MuiAlert-outlinedSuccess': {
        border: `1px solid ${modifyTheme.palette.light.alert.background.success}`,

        '& .MuiAlert-icon': {
          '& .MuiSvgIcon-root': {
            color: modifyTheme.palette.light.alert.text.success,
          },
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.text.success,
          padding: 0,
          fontSize: '14px',
        },
      },
      '&.MuiAlert-filledError': {
        backgroundColor: modifyTheme.palette.light.alert.background.error,
        color: colorPrimary,
      },
      '&.MuiAlert-filledWarning': {
        backgroundColor: modifyTheme.palette.light.alert.background.warning,
        color: colorPrimary,
      },
      '&.MuiAlert-filledInfo': {
        backgroundColor: modifyTheme.palette.light.alert.background.info,
        color: colorPrimary,
      },
      '&.MuiAlert-filledSuccess': {
        backgroundColor: modifyTheme.palette.light.alert.background.success,
        color: colorPrimary,
      },
      '& .MuiAlert-message': {
        color: modifyTheme.palette.light.alert.text.default,
        fontSize: '14px',
        marginTop: '2px',
        fontWeight: 500,
        padding: 0,
      },
      '& .MuiAlert-icon': {
        alignSelf: 'flex-start',
        marginRight: '8px',
        padding: 0,

        '& svg': {
          color: '#fff',
        },
      },
      '& .MuiAlert-action': {
        alignSelf: 'flex-start',
        marginRight: '0',
        paddingLeft: '22px',

        '& svg': {
          color: '#fff',
        },
      },
      '& .MuiSvgIcon-root': {
        color: modifyTheme.palette.light.alert.text.default,
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
      '&.MuiAlert-snackbar': {
        padding: '14px 12px 16px;',
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
