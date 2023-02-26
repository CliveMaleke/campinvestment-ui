import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import {
  blue50,
  gray30,
  gray40,
  gray50,
  gray70,
  backgroundLight,
  backgroundDark,
  white,
  blue60,
  blue70,
  lightGray40,
  red50,
  red60,
  red70,
  lightBlue30,
  lightBlue40,
  blue80,
  blue90,
  red10,
  red20,
  red90,
  lightBlue20,
  lightBlue50,
  green50,
  gray60,
  yellow50,
} from '../variables/colors';

interface ButtonContainedColors {
  textMain: string;
  textDisabled: string;
  bgDefault: string;
  bgHover: string;
  bgPressed: string;
  bgDisabled: string;
}
interface ButtonOutlinedColors {
  textDefault: string;
  textHover: string;
  textPressed: string;
  textDisabled: string;
  bgDefault: string;
  bgHover: string;
  bgPressed: string;
  bgDisabled: string;
  outlineDefault: string;
  outlineHover: string;
  outlinePressed: string;
  outlineDisabled: string;
}

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
    outlinedPrimary: ButtonOutlinedColors;
    outlinedSecondary: ButtonOutlinedColors;
    text: ButtonContainedColors;
  };
  icon: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    disabled: string;
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
      link: blue50,
    },
    button: {
      containedPrimary: {
        textMain: white,
        textDisabled: gray50,
        bgDefault: blue50,
        bgHover: blue60,
        bgPressed: blue70,
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
      outlinedPrimary: {
        textDefault: blue50,
        textHover: blue60,
        textPressed: blue70,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: lightBlue30,
        bgPressed: lightBlue40,
        bgDisabled: 'transparent',
        outlineDefault: blue50,
        outlineHover: blue60,
        outlinePressed: blue70,
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
      text: {
        textMain: blue50,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: lightBlue20,
        bgPressed: lightBlue50,
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
      background: {
        regular: gray60,
        success: green50,
        error: red50,
        info: blue50,
        warning: yellow50,
      },
      text: white,
      icon: {
        regular: gray60,
        success: green50,
        error: red50,
        info: blue50,
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
      link: blue50,
    },
    button: {
      containedPrimary: {
        textMain: gray70,
        textDisabled: gray50,
        bgDefault: blue50,
        bgHover: blue60,
        bgPressed: blue70,
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
      outlinedPrimary: {
        textDefault: blue50,
        textHover: blue60,
        textPressed: blue70,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: blue80,
        bgPressed: blue90,
        bgDisabled: 'transparent',
        outlineDefault: blue50,
        outlineHover: blue60,
        outlinePressed: blue70,
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
        outlineHover: red60,
        outlinePressed: red70,
        outlineDisabled: gray50,
      },
      text: {
        textMain: blue50,
        textDisabled: gray50,
        bgDefault: 'transparent',
        bgHover: blue70,
        bgPressed: blue80,
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
      background: {
        regular: gray60,
        success: green50,
        error: red50,
        info: blue50,
        warning: yellow50,
      },
      text: white,
      icon: {
        regular: gray60,
        success: green50,
        error: red50,
        info: blue50,
        warning: yellow50,
      },
    },
  },
} as CustomPaletteOptions;

export default MuiPaletteTheme;
