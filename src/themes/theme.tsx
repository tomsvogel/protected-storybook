import { createMuiTheme, Theme } from '@material-ui/core/styles';

const shadows = ([] as unknown) as Theme['shadows'];
const MOBILE_FONT_SIZE = 16;
const BASE_FONT_SIZE = 16;

const COLOR_PRIMARY_MAIN = '#143968';
const COLOR_PRIMARY_DARK = '#0c213c';
const COLOR_SECONDARY_MAIN = '#e6e6e6';
const COLOR_SECONDARY_DARK = '#cccccc';
const COLOR_BLACK = '#000';
const COLOR_WHITE = '#fff';
const COLOR_DARK_GREY = '#1f1f1f';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the rule
      root: {
        '&$focusVisible': {
          border: `2px solid ${COLOR_PRIMARY_MAIN}`,
        },
        '&$disabled': {
          opacity: 0.4,
        },
      },
      containedPrimary: {
        '&$disabled': {
          background: COLOR_PRIMARY_MAIN,
          color: COLOR_WHITE,
        },
      },
      outlinedPrimary: {
        '&&': {
          borderColor: 'transparent',
        },
        '&$focusVisible': {
          border: `2px solid ${COLOR_PRIMARY_MAIN}`,
        },
      },
      containedSecondary: {
        color: COLOR_DARK_GREY,
      },
    },
  },
  palette: {
    primary: {
      main: COLOR_PRIMARY_MAIN,
      dark: COLOR_PRIMARY_DARK,
    },
    secondary: {
      main: COLOR_SECONDARY_MAIN,
      dark: COLOR_SECONDARY_DARK,
    },
    common: {
      black: COLOR_BLACK,
      white: COLOR_WHITE,
    },
  },
  typography: {
    fontSize: MOBILE_FONT_SIZE,
    htmlFontSize: BASE_FONT_SIZE,
  },
  shadows,
  shape: {
    borderRadius: 2,
  },
  spacing: factor => `${8 * factor}px`,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

theme.typography.button = {
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 'bold',
  lineHeight: 1.5,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 1.43,
  },
};

export default theme;
