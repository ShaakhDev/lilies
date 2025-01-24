import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme: isDark ? "dark" : "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
