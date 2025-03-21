import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { darkTheme, lightTheme } from '@/components';
import type { JSX } from '@emotion/react/jsx-runtime';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

interface Props {
  children: JSX.Element;
}

export const ThemeProviderWrapper = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkMode, setDarkMode] = useState(
    // TODO: Find out how to do this
    // localStorage.getItem("theme") === "dark"
    true
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      setDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
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
