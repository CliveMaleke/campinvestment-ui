import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import {
  backgroundDark,
  backgroundLight,
  blue10,
  blue80,
  blue90,
  gray30,
  gray40,
  gray50,
  gray60,
  gray70,
  green50,
  lightBlue20,
  lightBlue30,
  lightBlue40,
  lightBlue50,
  lightGray40,
  primaryBackground,
  primaryForeground,
  red10,
  red20,
  red50,
  red60,
  red70,
  red80,
  red90,
  white,
  yellow50,
} from '../../variables/colors';

interface PaletteColors {
  background: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled?: string;
    link: string;
  };
  button: {
    containedPrimary: ButtonContainedColors;
    containedSecondary: ButtonContainedColors;
    iconButton: IconButton;
    outlinedPrimary: ButtonOutlinedColors;
    outlinedSecondary: ButtonOutlinedColors;
    textPrimary: ButtonTextColors;
    textSecondary: ButtonTextColors;
  };
  icon: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    disabled: string;
  };
  alert: {
    default: AlertDefaultColors;
    background: AlertBackgroundColors;
    text: AlertTextColors;
    icon: AlertIconColors;
  };
}

interface CustomPaletteOptions extends PaletteOptions {
  light: PaletteColors;
  dark: PaletteColors;
}

const MuiPaletteTheme = {
  light: {
    background: {
      primary: backgroundLight.primary,
      secondary: backgroundLight.secondary,
      tertiary: backgroundLight.tertiary,
    },
    text: {
      primary: gray70,
      secondary: gray50,
      disabled: gray40,
      link: primaryBackground,
    },
    button: {
      containedPrimary: {
        textMain: white,
        textDisabled: gray50,
        bgDefault: primaryBackground,
        bgHover: primaryForeground,
        bgPressed: primaryForeground,
        bgDisabled: lightGray40,
      },
      containedSecondary: {
        textMain: white,
        textDisabled: gray50,
        bgDefault: red50,
        bgHover: red60,
        bgPressed: red70,
        bgDisabled: lightGray40,
      },
      iconButton: {
        primary: primaryBackground,
        secondary: red50,
        disabled: gray50,
        default: gray70,
      },
      outlinedPrimary: {
        textDefault: primaryBackground,
        textHover: primaryForeground,
        textPressed: primaryForeground,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: lightBlue30,
        bgPressed: lightBlue40,
        bgDisabled: 'transparent',
        outlineDefault: primaryBackground,
        outlineHover: primaryForeground,
        outlinePressed: primaryForeground,
        outlineDisabled: gray50,
      },
      outlinedSecondary: {
        textDefault: red50,
        textHover: red60,
        textPressed: red70,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: red10,
        bgPressed: red20,
        bgDisabled: 'transparent',
        outlineDefault: red50,
        outlineHover: red60,
        outlinePressed: red70,
        outlineDisabled: gray50,
      },
      textPrimary: {
        textMain: primaryBackground,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: lightBlue20,
        bgPressed: lightBlue50,
        bgDisabled: 'transparent',
      },
      textSecondary: {
        textMain: red50,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: red10,
        bgPressed: red20,
        bgDisabled: 'transparent',
      },
    },
    icon: {
      primary: gray70,
      secondary: gray50,
      success: green50,
      warning: yellow50,
      danger: red50,
      disabled: gray50,
    },
    alert: {
      default: {
        background: blue10,
        text: primaryBackground,
        icon: primaryBackground,
      },
      background: {
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
      text: {
        default: white,
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
      icon: {
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
    },
  },
  dark: {
    background: {
      primary: gray70,
      secondary: backgroundDark.secondary,
    },
    text: {
      primary: gray30,
      secondary: gray40,
      link: primaryBackground,
    },
    button: {
      containedPrimary: {
        textMain: gray70,
        textDisabled: gray50,
        bgDefault: primaryBackground,
        bgHover: primaryForeground,
        bgPressed: primaryForeground,
        bgDisabled: lightGray40,
      },
      containedSecondary: {
        textMain: gray70,
        textDisabled: gray50,
        bgDefault: red50,
        bgHover: red60,
        bgPressed: red70,
        bgDisabled: lightGray40,
      },
      iconButton: {
        primary: primaryBackground,
        secondary: red50,
        disabled: gray50,
        default: white,
      },
      outlinedPrimary: {
        textDefault: primaryBackground,
        textHover: primaryForeground,
        textPressed: primaryForeground,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: blue80,
        bgPressed: blue90,
        bgDisabled: 'transparent',
        outlineDefault: primaryBackground,
        outlineHover: primaryForeground,
        outlinePressed: primaryForeground,
        outlineDisabled: gray50,
      },
      outlinedSecondary: {
        textDefault: red50,
        textHover: red60,
        textPressed: red70,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: red90,
        bgPressed: red90,
        bgDisabled: 'transparent',
        outlineDefault: red50,
        outlineHover: red80,
        outlinePressed: red70,
        outlineDisabled: gray50,
      },
      textPrimary: {
        textMain: primaryBackground,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: primaryForeground,
        bgPressed: blue80,
        bgDisabled: 'transparent',
      },
      textSecondary: {
        textMain: red50,
        textHover: red80,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: red90,
        bgPressed: red90,
        bgDisabled: 'transparent',
      },
    },
    icon: {
      primary: gray70,
      secondary: gray50,
      success: green50,
      warning: yellow50,
      danger: red50,
      disabled: gray50,
    },
    alert: {
      default: {
        background: blue10,
        text: primaryBackground,
        icon: primaryBackground,
      },
      background: {
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
      text: {
        default: white,
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
      icon: {
        regular: gray60,
        success: green50,
        error: red50,
        info: primaryBackground,
        warning: yellow50,
      },
    },
  },
} as CustomPaletteOptions;

export default MuiPaletteTheme;
