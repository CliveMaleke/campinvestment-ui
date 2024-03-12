const MuiAlertStyled = (defaultTheme: any, modifyTheme: any) => {
  const colorPrimary = modifyTheme.palette.light.text.primary;

  return {
    root: {
      padding: '10px 12px',
      fontFamily:
        '"Roboto Serif", Georgia, Cambria, Times New Roman, Times, serif',

      '&.MuiAlert-': {
        '&alertDefault': {
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: modifyTheme.palette.light.alert.default.background,

          '& .MuiAlert-': {
            '&icon': {
              '& svg': {
                width: '24px',
                height: '24px',
                color: modifyTheme.palette.light.alert.default.icon,
              },
            },
            '&message': {
              color: modifyTheme.palette.light.alert.default.text,
            },
          },
        },

        '&snackbar': {
          padding: '14px 12px 16px',
          maxWidth: '370px',
        },

        '&toast': {
          display: 'inline-flex',
          alignItems: 'center',
        },

        '&standardGeneral': {
          backgroundColor: modifyTheme.palette.light.alert.background.regular,
          color: colorPrimary,

          '& .MuiAlert-icon': {
            display: 'none',
          },
        },

        '&standardOutlinedGeneral': {
          background: 'transparent',
          border: `1px solid ${modifyTheme.palette.light.alert.background.regular}`,

          '& .MuiAlert-': {
            '&icon': {
              display: 'none',
            },

            '&message': {
              color: modifyTheme.palette.light.alert.text.regular,
              padding: 0,
              fontSize: '14px',
              wordBreak: 'break-all',
            },
          },
        },

        '&standardFilledGeneral': {
          backgroundColor: modifyTheme.palette.light.alert.background.regular,
          color: colorPrimary,

          '& .MuiAlert-icon': {
            display: 'none',
          },
        },

        '&outlinedError': {
          border: `1px solid ${modifyTheme.palette.light.alert.background.error}`,

          '& .MuiAlert-': {
            '&icon': {
              '& .MuiSvgIcon-root': {
                color: modifyTheme.palette.light.alert.text.error,
              },
            },

            '&message': {
              color: modifyTheme.palette.light.alert.text.error,
              padding: 0,
              fontSize: '14px',
              wordBreak: 'break-all',
            },
          },
        },

        '&outlinedWarning': {
          border: `1px solid ${modifyTheme.palette.light.alert.background.warning}`,

          '& .MuiAlert-': {
            '&icon': {
              '& .MuiSvgIcon-root': {
                color: modifyTheme.palette.light.alert.text.warning,
              },
            },
            '&message': {
              color: modifyTheme.palette.light.alert.text.warning,
              padding: 0,
              fontSize: '14px',
              wordBreak: 'break-all',
            },
          },
        },

        '&outlinedInfo': {
          border: `1px solid ${modifyTheme.palette.light.alert.background.info}`,

          '& .MuiAlert-': {
            '&icon': {
              '& .MuiSvgIcon-root': {
                color: modifyTheme.palette.light.alert.text.info,
              },
            },
            '&message': {
              color: modifyTheme.palette.light.alert.text.info,
              padding: 0,
              fontSize: '14px',
              wordBreak: 'break-all',
            },
          },
        },

        '&outlinedSuccess': {
          border: `1px solid ${modifyTheme.palette.light.alert.background.success}`,

          '& .MuiAlert-': {
            '&icon': {
              '& .MuiSvgIcon-root': {
                color: modifyTheme.palette.light.alert.text.success,
              },
            },
            '&message': {
              color: modifyTheme.palette.light.alert.text.success,
              padding: 0,
              fontSize: '14px',
              wordBreak: 'break-all',
            },
          },
        },

        '&filledError': {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: modifyTheme.palette.light.alert.background.error,
          color: colorPrimary,
        },

        '&filledWarning': {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: modifyTheme.palette.light.alert.background.warning,
          color: colorPrimary,
        },

        '&filledInfo': {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: modifyTheme.palette.light.alert.background.info,
          color: colorPrimary,
        },

        '&filledSuccess': {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: modifyTheme.palette.light.alert.background.success,
          color: colorPrimary,
        },
      },

      '& .MuiAlert-': {
        '&snackbarTitle': {
          fontWeight: 600,
        },

        '&message': {
          color: modifyTheme.palette.light.alert.text.default,
          fontSize: '14px',
          fontWeight: 500,
          padding: 0,
          wordBreak: 'break-all',
        },

        '&icon': {
          alignSelf: 'flex-start',
          marginRight: '8px',
          padding: 0,

          '& svg': {
            width: '24px',
            height: '24px',
            color: '#fff',
          },
        },

        '&action': {
          alignSelf: 'flex-start',
          marginRight: '0',
          paddingLeft: '22px',
          cursor: 'pointer',

          '& svg': {
            color: '#fff',
          },
        },

        '&description': {
          marginTop: '8px',
          lineHeight: '18px',
          marginBottom: 0,
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
    },
    outlinedError: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.error,
        },
      },
    },
    outlinedWarning: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.warning,
        },
      },
    },
    outlinedInfo: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiAlert-icon': {
        '& svg': {
          color: modifyTheme.palette.light.alert.icon.info,
        },
      },
    },
    outlinedSuccess: {
      display: 'flex',
      alignItems: 'center',
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
