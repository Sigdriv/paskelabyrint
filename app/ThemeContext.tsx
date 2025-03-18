import { createContext, useContext, useMemo, useState } from "react";

import { darkTheme, lightTheme } from "@/components";
import type { JSX } from "@emotion/react/jsx-runtime";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

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
