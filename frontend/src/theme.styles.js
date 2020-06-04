/* 
  Todo:
  1. Breakpoint override to be added to theme which uses 'em' values instead of pixels.
  */

// eslint-disable-next-line no-unused-vars
import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const fontSizes = {
  h1: '3.375rem',
  h2: '2.25rem',
  h3: '1.5rem',
  h4: '1.25rem',
  h5: '1rem',
  h6: '0.875rem',
  b0: '1.5rem',
  b1: '1rem',
  b2: '0.875rem',
  button: '0.875rem',
  overline: '0.875rem',
};

// const colours = {
//   error: '#f44336',
//   primary: '#007dba',
//   // secondary: defaultGrey[900],
//   success: '#4caf50',
//   warning: '#ff9800',
//   info: '#2196f3',
// };

// Default site body colour
// const defaultTextColor = '#fff';

export let theme = createMuiTheme({
  typography: {
    fontSize: '1rem',
  },
});

theme.lineHeights = {
  minimal: '1.25rem', //20px
  dense: '1.5rem', //24px
  cosy: '1.5625rem', //25px
  regular: '2rem', //32px
  large: '2.25rem', //36px
  xlarge: '3.25rem', //52px
  xxlarge: '5rem', //80px
};

// Custom spacing defaults
theme.spacingDefaults = {
  spacing1: '.5rem',
  spacing2: '1rem',
  spacing3: '1.5rem',
  spacing4: '2rem',
  spacing5: '2.5rem',
  spacing6: '3rem', //48px
  spacing7: '3.5rem', //56px
  spacing8: '4rem', //64px
  spacing9: '4.5rem', //72px
  spacing10: '5rem', //80px
};

theme.spacingInnerDefaults = {
  top: '.625rem',
  side: '1rem'
};


// Custom typography
theme.typography = {
  ...theme.typography,
  fontSizes,
  fontWeightBold: 700,
  body2: {
    ...theme.typography.body2,
    //color: defaultTextColor,
    fontSize: fontSizes.b2,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.minimal,
  },
  body1: {
    ...theme.typography.body1,
    //color: 'currentColor',
    fontSize: fontSizes.b1,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.dense,
  },
  h1: {
    ...theme.typography.h1,
    //color: 'currentColor',
    fontSize: fontSizes.h1,
    fontWeight: theme.typography.fontWeightLight,
    lineHeight: theme.lineHeights.xxlarge,
  },
  h2: {
    ...theme.typography.h2,
    //color: defaultTextColor,
    fontSize: fontSizes.h2,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.xlarge,
  },
  h3: {
    ...theme.typography.h3,
    //color: defaultTextColor,
    fontSize: fontSizes.h3,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.large,
  },
  h4: {
    ...theme.typography.h4,
    //color: defaultTextColor,
    fontSize: fontSizes.h4,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.regular,
  },
  h5: {
    ...theme.typography.h5,
    //color: defaultTextColor,
    fontSize: fontSizes.h5,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.lineHeights.regular,
  },
  h6: {
    ...theme.typography.h6,
    //color: defaultTextColor,
    fontSize: fontSizes.h6,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: theme.lineHeights.regular,
  },
};

// Custom palette
// theme.palette = {
//   ...theme.palette,
//   background: {
//     ...theme.palette.background,
//     default: '#fff'
//   },
//   text: {
//     ...theme.palette.text,
//     primary: defaultTextColor,
//   },
//   primary: {
//     ...theme.palette.primary,
//     contrastText: theme.palette.common.white,
//     dark: darken(colours.primary, 0.2),
//     light: lighten(colours.primary, 0.2),
//     main: '#00557F',
//   },
//   // secondary: {
//   //   ...theme.palette.secondary,
//   //   dark: darken(colours.secondary, 0.75),
//   //   light: lighten(colours.secondary, 0.75),
//   //   main: colours.secondary,
//   // },
// };

// theme = responsiveFontSizes(theme);

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      fontSize: theme.typography.fontSizes.button,
    },
    outlined: {
      // To match the padding of contained; by default it has smaller padding.
      padding: [['0.375rem', '1rem']]
    },
    contained: {
      backgroundColor: '#f7f7f7',
      color: '#007dba',
      border: [[1, 'solid', '#f7f7f7']],
      '&:focus, &:hover': {
        backgroundColor: '#007dba',
        border: [[1, 'solid', '#007dba']],
        color: '#f7f7f7',
      },
      '&:focus': {
        borderRadius: 0,
        outline: [['0.3rem', 'solid', '#fd6']],
      },
      '&:focus:hover': {
        borderRadius: '.3rem',
        outline: 0,
      },
      '&:active, &:hover': {
        outline: 0,
      },
    },
    containedSecondary: {
      backgroundColor: '#fff',
      color: '#007dba',
      border: [[1, 'solid', '#fff']],
      '&:focus, &:hover': {
        backgroundColor: '#007dba',
        border: [[1, 'solid', '#007dba']],
        color: '#fff',
      },
      '&:focus': {
        borderRadius: 0,
        outline: [['0.3rem', 'solid', '#fd6']],
      },
      '&:focus:hover': {
        borderRadius: '.3rem',
        outline: 0,
      },
      '&:active, &:hover': {
        outline: 0,
      },
    },
    containedPrimary: {
      backgroundColor: '#007dba',
      color: '#fff',
      border: [[1, 'solid', '#007dba']],
      '&:focus, &:hover': {
        backgroundColor: lighten('#007dba', 0.2),
        border: [[1, 'solid', lighten('#007dba', 0.2)]],
      },
      '&:focus': {
        borderRadius: 0,
        outline: [['0.3rem', 'solid', '#fd6']],
      },
      '&:focus:hover': {
        borderRadius: '.3rem',
        outline: 0,
      },
      '&:active, &:hover': {
        outline: 0,
      },
    },
    outlinedSecondary: {
      color: '#fff',
      border: [[1, 'solid', '#fff']],
      '&:focus, &:hover': {
        backgroundColor: '#007dba',
        border: [[1, 'solid', '#007dba']],
        color: '#fff',
      },
      '&:focus': {
        borderRadius: 0,
        outline: [['0.3rem', 'solid', '#fd6']],
      },
      '&:focus:hover': {
        borderRadius: '.3rem',
        outline: 0,
      },
      '&:active, &:hover': {
        outline: 0,
      },
    },
    outlinedPrimary: {
      color: '#007dba',
      border: [[1, 'solid', '#007dba']],
      '&:focus, &:hover': {
        backgroundColor: '#007dba',
        border: [[1, 'solid', '#007dba']],
        color: '#fff',
      },
      '&:focus': {
        borderRadius: 0,
        outline: [['0.3rem', 'solid', '#fd6']],
      },
      '&:focus:hover': {
        borderRadius: '.3rem',
        outline: 0,
      },
      '&:active, &:hover': {
        outline: 0,
      },
    },
  },
};

export default theme;
