import { createTheme } from '@mui/material/styles';

const baseColorsLight = {
  black: '#222', // Mørk grå, ikke helt svart
  white: '#FFFFFF',
  primary: '#37474F', // Dempet blågrå
  secondary: '#ECEFF1', // Lys grå
  light: '#F5F5F5', // Veldig lys grå
  link: '#2962FF', // Klassisk blå link
  grey: '#9E9E9E', // Medium grå
};

const successColorsLight = {
  main: '#4CAF50', // Dempet grønn
  light: '#E8F5E9',
  dark: '#388E3C',
};

const infoColorsLight = {
  main: '#03A9F4', // Dempet lyseblå
  light: '#E1F5FE',
  dark: '#0288D1',
};

const errorColorsLight = {
  main: '#F44336', // Dempet rød
  light: '#FFEBEE',
  dark: '#D32F2F',
};

const warningColorsLight = {
  main: '#FF9800', // Dempet oransje
  light: '#FFF3E0',
  dark: '#F57C00',
};

const textColorsLight = {
  primary: '#212121', // Mørk grå
  secondary: '#424242', // Litt lysere mørk grå
  disabled: '#BDBDBD', // Lys grå
  contrast: '#FFFFFF',
};

const colorsLight = {
  ...baseColorsLight,
  text: textColorsLight,
  warning: warningColorsLight,
  error: errorColorsLight,
  info: infoColorsLight,
  success: successColorsLight,
};

const lightTheme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    common: {
      black: colorsLight.black,
      white: colorsLight.white,
    },
    divider: colorsLight.grey,
    text: {
      primary: colorsLight.text.primary,
      secondary: colorsLight.text.secondary,
      disabled: colorsLight.text.disabled,
    },
    background: {
      default: colorsLight.white,
      paper: colorsLight.white,
    },
    primary: {
      main: colorsLight.primary,
      light: colorsLight.light,
      contrastText: colorsLight.text.contrast,
    },
    secondary: {
      main: colorsLight.secondary,
      dark: colorsLight.link,
      contrastText: colorsLight.black,
    },
    warning: {
      main: colorsLight.warning.main,
      light: colorsLight.warning.light,
      dark: colorsLight.warning.dark,
      contrastText: colorsLight.black,
    },
    error: {
      main: colorsLight.error.main,
      light: colorsLight.error.light,
      dark: colorsLight.error.dark,
      contrastText: colorsLight.black,
    },
    success: {
      main: colorsLight.success.main,
      light: colorsLight.success.light,
      dark: colorsLight.success.dark,
      contrastText: colorsLight.black,
    },
    info: {
      main: colorsLight.info.main,
      light: colorsLight.info.light,
      dark: colorsLight.info.dark,
      contrastText: colorsLight.black,
    },
  },

  typography: {
    fontFamily: 'sans-serif',
    fontSize: 16,
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: colorsLight.secondary,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          color: colorsLight.text.contrast,
          '& ol': {
            width: '100%',
            maxWidth: '68rem',
            margin: 'auto',
          },
          '& li': {
            '&:last-of-type': {
              fontWeight: 'bold',
            },
            '&:not(:last-of-type)': {
              '& a': {
                textUnderlineOffset: '6px',
                color: colorsLight.text.contrast,
                '&:hover': {
                  textDecorationThickness: '3px',
                },
              },
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        outlined: {
          ':hover': {
            backgroundColor: '#E0E0E0',
          },
        },
      },
    },
  },
});

const baseColorsDark = {
  black: '#FFFFFF', // Hvit tekst
  white: '#1E1E1E', // Mørk grå bakgrunn
  primary: '#90A4AE', // Lysere gråblå
  secondary: '#424242', // Mørkere grå for bakgrunnselementer
  light: '#303030', // Litt lysere bakgrunn
  link: '#90CAF9', // Lysere blå link
  grey: '#757575', // Mørkere medium grå
};

const successColorsDark = {
  main: '#81C784',
  light: '#424242',
  dark: '#66BB6A',
};

const infoColorsDark = {
  main: '#64B5F6',
  light: '#424242',
  dark: '#42A5F5',
};

const errorColorsDark = {
  main: '#E57373',
  light: '#424242',
  dark: '#EF5350',
};

const warningColorsDark = {
  main: '#FFB74D',
  light: '#424242',
  dark: '#FFA726',
};

const textColorsDark = {
  primary: '#FFFFFF',
  secondary: '#E0E0E0',
  disabled: '#616161',
  contrast: '#000000',
};

const colorsDark = {
  ...baseColorsDark,
  text: textColorsDark,
  warning: warningColorsDark,
  error: errorColorsDark,
  info: infoColorsDark,
  success: successColorsDark,
} as const;

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Viktig for dark mode
    contrastThreshold: 4.5,
    common: {
      black: colorsDark.black,
      white: colorsDark.white,
    },
    divider: colorsDark.grey,
    text: {
      primary: colorsDark.text.primary,
      secondary: colorsDark.text.secondary,
      disabled: colorsDark.text.disabled,
    },
    background: {
      default: colorsDark.white,
      paper: colorsDark.secondary,
    },
    primary: {
      main: colorsDark.primary,
      light: colorsDark.light,
      contrastText: colorsDark.text.contrast,
    },
    secondary: {
      main: colorsDark.secondary,
      dark: colorsDark.link,
      contrastText: colorsDark.black,
    },
    warning: {
      main: colorsDark.warning.main,
      light: colorsDark.warning.light,
      dark: colorsDark.warning.dark,
      contrastText: colorsDark.black,
    },
    error: {
      main: colorsDark.error.main,
      light: colorsDark.error.light,
      dark: colorsDark.error.dark,
      contrastText: colorsDark.black,
    },
    success: {
      main: colorsDark.success.main,
      light: colorsDark.success.light,
      dark: colorsDark.success.dark,
      contrastText: colorsDark.black,
    },
    info: {
      main: colorsDark.info.main,
      light: colorsDark.info.light,
      dark: colorsDark.info.dark,
      contrastText: colorsDark.black,
    },
  },

  typography: {
    fontFamily: 'sans-serif',
    fontSize: 16,
  },

  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          color: colorsDark.text.contrast,
          '& ol': {
            width: '100%',
            maxWidth: '68rem',
            margin: 'auto',
          },
          '& li': {
            '&:last-of-type': {
              fontWeight: 'bold',
            },
            '&:not(:last-of-type)': {
              '& a': {
                textUnderlineOffset: '6px',
                color: colorsDark.text.contrast,
                '&:hover': {
                  textDecorationThickness: '3px',
                },
              },
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        outlined: {
          ':hover': {
            backgroundColor: '#37474F', // Litt lysere grå hover
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
