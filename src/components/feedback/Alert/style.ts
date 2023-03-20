const MuiAlertStyled = (defaultTheme: any, modifyTheme: any) => {
  const colorPrimary = modifyTheme.palette.light.text.primary;

  return {
    root: {
      padding: '10px 12px',

      '&.MuiAlert-alertDefault': {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: modifyTheme.palette.light.alert.default.background,

        '& .MuiAlert-icon': {
          '& svg': {
            width: '24px',
            height: '24px',
            color: modifyTheme.palette.light.alert.default.icon,
          },
        },

        '& .MuiAlert-message': {
          color: modifyTheme.palette.light.alert.default.text,
        },
      },
      '&.MuiAlert-snackbar': {
        padding: '14px 12px 16px',
        width: '370px',
      },
      '&.MuiAlert-toast': {
        display: 'inline-flex',
        alignItems: 'center',
      },
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
          wordBreak: 'break-all',
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
          wordBreak: 'break-all',
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
          wordBreak: 'break-all',
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
          wordBreak: 'break-all',
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
          wordBreak: 'break-all',
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
        fontWeight: 500,
        padding: 0,
        wordBreak: 'break-all',
      },
      '& .MuiAlert-icon': {
        alignSelf: 'flex-start',
        marginRight: '8px',
        padding: 0,

        '& svg': {
          width: '20px',
          height: '20px',
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

        '& button': {
          padding: 0,
          color: '#fff',
          fontSize: '14px',
          margin: 0,
          height: 'auto',

          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      '& .MuiAlertTitle-root': {
        marginTop: 0,
      },
      '& .MuiTypography-gutterBottom': {
        marginBottom: 0,
      },
      '& .MuiAlert-description': {
        marginTop: '8px',
        lineHeight: '18px',
        marginBottom: 0,
      },
    },
    outlinedError: {
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.error,
        },
      },
    },
    outlinedWarning: {
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.warning,
        },
      },
    },
    outlinedInfo: {
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.info,
        },
      },
    },
    outlinedSuccess: {
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.success,
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
