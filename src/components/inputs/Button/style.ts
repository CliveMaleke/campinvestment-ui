const MuiButtonStyled = (defaultTheme: any, modifyTheme: any) => ({
  root: {
    height: '32px',
    padding: '8px 16px',
    margin: '4px',
    '& svg': {
      color: 'inherit',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'all',
    },
    '& .MuiButton-startIcon svg, & .MuiButton-endIcon svg,': {
      fontSize: '16px',
    },
    '&.MuiButton-sizeExtraLarge2x': {
      fontSize: '20px',
      height: '56px',
      padding: '17px 28px',
    },
    '&.MuiButton-sizeExtraLarge2x .MuiButton-startIcon svg, &.MuiButton-sizeExtraLarge2x .MuiButton-endIcon svg,': {
      fontSize: '24px',
    },
    '&.MuiButton-sizeExtraLarge': {
      fontSize: '18px',
      height: '48px',
      padding: '14px 20px',
    },
    '&.MuiButton-sizeExtraLarge .MuiButton-startIcon svg, &.MuiButton-sizeExtraLarge .MuiButton-endIcon svg,': {
      fontSize: '20px',
    },
    '&.MuiButton-sizeLarge': {
      fontSize: '16px',
      height: '40px',
      padding: '8px 16px',
    },
    '&.MuiButton-sizeSmall': {
      fontSize: '12px',
      height: '24px',
    },
    '&.MuiButton-sizeSmall .MuiButton-startIcon svg, &.MuiButton-sizeSmall .MuiButton-endIcon svg,': {
      fontSize: '14px',
    },
  },
  containedPrimary: {
    backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.containedPrimary.textDisabled,
    },
    '&.MuiButton-contained:hover.Mui-disabled': {
      backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgDisabled,
    }
  },
  containedSecondary: {
    backgroundColor: modifyTheme.palette.light.button.containedSecondary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.light.button.containedSecondary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.containedSecondary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.containedSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.light.button.containedSecondary.bgDisabled,
    },
    '&.MuiButton-contained:hover.Mui-disabled': {
      backgroundColor: modifyTheme.palette.light.button.containedSecondary.bgDisabled,
    }
  },
  outlinedPrimary: {
    borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlineDefault,
    color: modifyTheme.palette.light.button.outlinedPrimary.textDefault,
    '&:hover': {
      borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlineDefault,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.outlinedPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.outlinedPrimary.textDisabled,
      backgroundColor: modifyTheme.palette.light.button.outlinedPrimary.bgDisabled,
      borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlineDisabled,
    }
  },
  outlinedSecondary: {
    borderColor: modifyTheme.palette.light.button.outlinedSecondary.outlineDefault,
    color: modifyTheme.palette.light.button.outlinedSecondary.textDefault,
    '&:hover': {
      borderColor: modifyTheme.palette.light.button.outlinedSecondary.outlineDefault,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.outlinedSecondary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.outlinedSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.light.button.outlinedSecondary.bgDisabled,
      borderColor: modifyTheme.palette.light.button.outlinedSecondary.outlineDisabled,
    }
  },
  textPrimary: {
    color: modifyTheme.palette.light.button.textPrimary.textMain,
    backgroundColor: modifyTheme.palette.light.button.textPrimary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.light.button.textPrimary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.textPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.textPrimary.textDisabled,
      backgroundColor: modifyTheme.palette.light.button.textPrimary.bgDisabled,
    }
  },
  textSecondary: {
    color: modifyTheme.palette.light.button.textSecondary.textMain,
    backgroundColor: modifyTheme.palette.light.button.textSecondary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.light.button.textSecondary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.light.button.textSecondary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.light.button.textSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.light.button.textSecondary.bgDisabled,
    }
  },
  touchRipple: {
    backgroundColor: modifyTheme.palette.light.button.containedPrimary.bgDefault,
  }
});

export const MuiButtonStyledDark = (modifyTheme: any) => ({
  '& .MuiButton-containedPrimary': {
    backgroundColor: modifyTheme.palette.dark.button.containedPrimary.bgDefault,
    color: modifyTheme.palette.dark.button.containedPrimary.textMain,
    '&:hover': {
      backgroundColor: modifyTheme.palette.dark.button.containedPrimary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.dark.button.containedPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.containedPrimary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.containedPrimary.bgDisabled,
    }
  },
  '& .MuiButton-containedSecondary': {
    backgroundColor: modifyTheme.palette.dark.button.containedSecondary.bgDefault,
    color: modifyTheme.palette.dark.button.containedSecondary.textMain,
    '&:hover': {
      backgroundColor: modifyTheme.palette.dark.button.containedSecondary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.dark.button.containedSecondary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.containedSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.containedSecondary.bgDisabled,
    }
  },
  '& .MuiButton-outlinedPrimary': {
    borderColor: modifyTheme.palette.dark.button.outlinedPrimary.outlineDefault,
    color: modifyTheme.palette.dark.button.outlinedPrimary.textDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.dark.button.outlinedPrimary.bgHover,
      borderColor: modifyTheme.palette.dark.button.outlinedPrimary.outlineDefault,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.dark.button.outlinedPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.outlinedPrimary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.outlinedPrimary.bgDisabled,
      borderColor: modifyTheme.palette.dark.button.outlinedPrimary.outlineDisabled,
    }
  },
  '& .MuiButton-outlinedSecondary': {
    borderColor: modifyTheme.palette.dark.button.outlinedSecondary.outlineDefault,
    color: modifyTheme.palette.dark.button.outlinedSecondary.textDefault,
    '&:hover': {
      color: modifyTheme.palette.dark.button.outlinedSecondary.textHover,
      borderColor: modifyTheme.palette.dark.button.outlinedSecondary.outlineHover,
      backgroundColor: modifyTheme.palette.dark.button.outlinedSecondary.bgHover,
    },
    '&:active': {
      color: modifyTheme.palette.dark.button.outlinedSecondary.textPressed,
      backgroundColor: modifyTheme.palette.dark.button.outlinedSecondary.bgPressed,
      borderColor: modifyTheme.palette.dark.button.outlinedSecondary.outlinePressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.outlinedSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.outlinedSecondary.bgDisabled,
      borderColor: modifyTheme.palette.dark.button.outlinedSecondary.outlineDisabled,
    }
  },
  '& .MuiButton-textPrimary': {
    color: modifyTheme.palette.dark.button.textPrimary.textMain,
    backgroundColor: modifyTheme.palette.dark.button.textPrimary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.dark.button.textPrimary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.dark.button.textPrimary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.textPrimary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.textPrimary.bgDisabled,
    }
  },
  '& .MuiButton-textSecondary': {
    color: modifyTheme.palette.dark.button.textSecondary.textMain,
    backgroundColor: modifyTheme.palette.dark.button.textSecondary.bgDefault,
    '&:hover': {
      backgroundColor: modifyTheme.palette.dark.button.textSecondary.bgHover,
    },
    '&:active': {
      backgroundColor: modifyTheme.palette.dark.button.textSecondary.bgPressed,
    },
    '&:disabled': {
      color: modifyTheme.palette.dark.button.textSecondary.textDisabled,
      backgroundColor: modifyTheme.palette.dark.button.textSecondary.bgDisabled,
    }
  },
  '& .MuiButton-touchRipple': {
    backgroundColor: modifyTheme.palette.dark.button.containedPrimary.bgDefault,
  }
})

export default MuiButtonStyled;
