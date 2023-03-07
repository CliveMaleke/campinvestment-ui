const MuiButtonStyled = (defaultTheme: any, modifyTheme: any) => ({
  root: {
    '& svg': {
      color: 'inherit',
    }
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
      borderColor: modifyTheme.palette.light.button.outlinedPrimary.outlinedDisabled,
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
      borderColor: modifyTheme.palette.light.button.outlinedSecondary.outlinedDisabled,
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

export default MuiButtonStyled;
