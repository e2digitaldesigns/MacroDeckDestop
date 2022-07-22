import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import * as themes from "./themes";
import { IntThemeData } from "../../types";

interface IntStyledThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<IntThemeData>({
  themeState: themes.themeDark,
  setThemeState: (theme): void => {}
});

const ThemeContextProvider: React.FC<IntStyledThemeProvider> = ({
  children
}) => {
  const [themeState, setThemeState] = React.useState<DefaultTheme>(
    themes.themeDark
  );

  const themeContextValue = React.useMemo(
    () => ({ themeState, setThemeState }),
    [themeState, setThemeState]
  );

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider theme={themeState}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export { ThemeContext, ThemeContextProvider };
