import { JSX } from "@emotion/react/jsx-runtime";
import { createContext, useState, useMemo, useContext } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "@/components";

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeProviderWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [darkMode, setDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
