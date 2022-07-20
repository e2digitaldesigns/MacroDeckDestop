import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import * as themes from "./themes/themes";
import * as Styled from "./app.style";

const App: React.FC<{}> = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.themeLight);

  const handleThemeSwitch = (theme: DefaultTheme): void => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <div className="App">
        <h1 onClick={() => handleThemeSwitch(themes.themeDark)}>Dark</h1>
        <h1 onClick={() => handleThemeSwitch(themes.themeLight)}>Light</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
