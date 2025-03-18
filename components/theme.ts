// import { createTheme } from "@mui/material";

// // export const theme = createTheme({
// //   colorSchemes: {
// //     dark: true,
// //   },
// //   typography: {
// //     fontFamily: "sans-serif",
// //   },
// // });

// // const lightTheme = createTheme({
// //   palette: {
// //     mode: "light",
// //     contrastThreshold: 4.5,
// //     primary: {
// //       main: "#1565c0", // Deep blue
// //     },
// //     secondary: {
// //       main: "#6d6d6d", // Neutral gray
// //     },
// //     background: {
// //       default: "#f5f5f5", // Soft grayish white
// //       paper: "#ffffff", // Pure white for contrast
// //     },
// //     text: {
// //       primary: "#212121", // Deep black for readability
// //       secondary: "#757575", // Soft gray
// //     },
// //   },
// // });

// // const darkTheme = createTheme({
// //   palette: {
// //     mode: "dark",
// //     contrastThreshold: 4.5,
// //     primary: {
// //       main: "#90caf9", // Muted blue
// //     },
// //     secondary: {
// //       main: "#b0bec5", // Soft grayish blue
// //     },
// //     background: {
// //       default: "#121212", // True dark background
// //       paper: "#1e1e1e", // Slightly lighter for contrast
// //     },
// //     text: {
// //       primary: "#ffffff", // White text
// //       secondary: "#b0bec5", // Softer grayish text
// //     },
// //   },
// // });

// // export { lightTheme, darkTheme };

// const baseColors = {
//   black: "#1A1A1A",
//   white: "#FAFAFA",
//   primary: "#0A3D62", // Deep navy
//   secondary: "#D6E4F0", // Muted cool gray-blue
//   light: "#F0F4F8", // Softer white-gray
//   link: "#0071BC", // Slightly brighter blue
//   grey: "#A8A8A8",
// };

// const successColors = {
//   main: "#009B4D", // Vibrant green
//   light: "#E8F5EC",
//   dark: "#00572A",
// };

// const infoColors = {
//   main: "#0063B1", // Cool blue
//   light: "#E3F2FD",
//   dark: "#003C75",
// };

// const errorColors = {
//   main: "#C62828", // Strong red
//   light: "#FCE8E8",
//   dark: "#8E0000",
// };

// const warningColors = {
//   main: "#E68A00", // Rich amber
//   light: "#FFF3E0",
//   dark: "#995700",
// };

// const textColors = {
//   primary: "#0A3D62", // Navy
//   secondary: baseColors.black,
//   disabled: "#AABACF",
//   contrast: "#FFFFFF",
// };

// const colors = {
//   ...baseColors,
//   text: textColors,
//   warning: warningColors,
//   error: errorColors,
//   info: infoColors,
//   success: successColors,
// } as const;

// // 🌞 Light Theme
// export const lightTheme = createTheme({
//   palette: {
//     contrastThreshold: 4.5,
//     common: {
//       black: colors.black,
//       white: colors.white,
//     },
//     divider: colors.grey,
//     text: {
//       primary: colors.text.primary,
//       secondary: colors.black,
//       disabled: colors.text.disabled,
//     },
//     background: {
//       default: colors.white,
//       paper: colors.white,
//     },
//     primary: {
//       main: colors.primary,
//       light: colors.light,
//       contrastText: colors.text.contrast,
//     },
//     secondary: {
//       main: colors.secondary,
//       dark: colors.link,
//       contrastText: colors.black,
//     },
//     warning: {
//       main: colors.warning.main,
//       light: colors.warning.light,
//       dark: colors.warning.dark,
//       contrastText: colors.black,
//     },
//     error: {
//       main: colors.error.main,
//       light: colors.error.light,
//       dark: colors.error.dark,
//       contrastText: colors.black,
//     },
//     success: {
//       main: colors.success.main,
//       light: colors.success.light,
//       dark: colors.success.dark,
//       contrastText: colors.black,
//     },
//     info: {
//       main: colors.info.main,
//       light: colors.info.light,
//       dark: colors.info.dark,
//       contrastText: colors.black,
//     },
//   },
// });

// // 🌙 Dark Theme
// export const darkTheme = createTheme({
//   palette: {
//     contrastThreshold: 4.5,
//     common: {
//       black: colors.black,
//       white: colors.white,
//     },
//     divider: colors.grey,
//     text: {
//       primary: "#E3F2FD", // Soft light blue for better readability
//       secondary: "#AABACF",
//       disabled: "#7588A1",
//     },
//     background: {
//       default: "#121212", // True dark
//       paper: "#1E1E1E", // Slightly lighter for contrast
//     },
//     primary: {
//       main: "#4A90E2", // Muted blue for better dark mode contrast
//       light: "#80C7FF",
//       contrastText: "#FFFFFF",
//     },
//     secondary: {
//       main: "#5C6BC0", // Soft purple-blue
//       dark: "#3949AB",
//       contrastText: "#E3F2FD",
//     },
//     warning: {
//       main: "#FFB300", // Softer yellow-orange
//       light: "#FFE082",
//       dark: "#F57C00",
//       contrastText: "#121212",
//     },
//     error: {
//       main: "#E53935", // Brighter red for dark mode visibility
//       light: "#EF9A9A",
//       dark: "#B71C1C",
//       contrastText: "#121212",
//     },
//     success: {
//       main: "#43A047", // Softer green for dark mode
//       light: "#A5D6A7",
//       dark: "#2E7D32",
//       contrastText: "#121212",
//     },
//     info: {
//       main: "#29B6F6", // Bright but not harsh
//       light: "#81D4FA",
//       dark: "#0288D1",
//       contrastText: "#121212",
//     },
//   },
// });

import { createTheme } from "@mui/material/styles";

const baseColorsLight = {
  black: "#222", // Mørk grå, ikke helt svart
  white: "#FFFFFF",
  primary: "#37474F", // Dempet blågrå
  secondary: "#ECEFF1", // Lys grå
  light: "#F5F5F5", // Veldig lys grå
  link: "#2962FF", // Klassisk blå link
  grey: "#9E9E9E", // Medium grå
};

const successColorsLight = {
  main: "#4CAF50", // Dempet grønn
  light: "#E8F5E9",
  dark: "#388E3C",
};

const infoColorsLight = {
  main: "#03A9F4", // Dempet lyseblå
  light: "#E1F5FE",
  dark: "#0288D1",
};

const errorColorsLight = {
  main: "#F44336", // Dempet rød
  light: "#FFEBEE",
  dark: "#D32F2F",
};

const warningColorsLight = {
  main: "#FF9800", // Dempet oransje
  light: "#FFF3E0",
  dark: "#F57C00",
};

const textColorsLight = {
  primary: "#212121", // Mørk grå
  secondary: "#424242", // Litt lysere mørk grå
  disabled: "#BDBDBD", // Lys grå
  contrast: "#FFFFFF",
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
    fontFamily: "sans-serif",
    fontSize: 16,
  },

  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          color: colorsLight.text.contrast,
          "& ol": {
            width: "100%",
            maxWidth: "68rem",
            margin: "auto",
          },
          "& li": {
            "&:last-of-type": {
              fontWeight: "bold",
            },
            "&:not(:last-of-type)": {
              "& a": {
                textUnderlineOffset: "6px",
                color: colorsLight.text.contrast,
                "&:hover": {
                  textDecorationThickness: "3px",
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
          textTransform: "none",
        },
        outlined: {
          ":hover": {
            backgroundColor: "#E0E0E0",
          },
        },
      },
    },
  },
});

const baseColorsDark = {
  black: "#FFFFFF", // Hvit tekst
  white: "#1E1E1E", // Mørk grå bakgrunn
  primary: "#90A4AE", // Lysere gråblå
  secondary: "#424242", // Mørkere grå for bakgrunnselementer
  light: "#303030", // Litt lysere bakgrunn
  link: "#90CAF9", // Lysere blå link
  grey: "#757575", // Mørkere medium grå
};

const successColorsDark = {
  main: "#81C784",
  light: "#424242",
  dark: "#66BB6A",
};

const infoColorsDark = {
  main: "#64B5F6",
  light: "#424242",
  dark: "#42A5F5",
};

const errorColorsDark = {
  main: "#E57373",
  light: "#424242",
  dark: "#EF5350",
};

const warningColorsDark = {
  main: "#FFB74D",
  light: "#424242",
  dark: "#FFA726",
};

const textColorsDark = {
  primary: "#FFFFFF",
  secondary: "#E0E0E0",
  disabled: "#616161",
  contrast: "#000000",
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
    mode: "dark", // Viktig for dark mode
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
    fontFamily: "sans-serif",
    fontSize: 16,
  },

  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          color: colorsDark.text.contrast,
          "& ol": {
            width: "100%",
            maxWidth: "68rem",
            margin: "auto",
          },
          "& li": {
            "&:last-of-type": {
              fontWeight: "bold",
            },
            "&:not(:last-of-type)": {
              "& a": {
                textUnderlineOffset: "6px",
                color: colorsDark.text.contrast,
                "&:hover": {
                  textDecorationThickness: "3px",
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
          textTransform: "none",
        },
        outlined: {
          ":hover": {
            backgroundColor: "#37474F", // Litt lysere grå hover
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
