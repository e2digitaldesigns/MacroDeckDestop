import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import * as themes from "./themes/themes";
import * as Styled from "./app.style";
import Header from "./components/template/header/header";
import SidebarLeft from "./components/template/sideBarLeft/sideBarLeft";
import Footer from "./components/template/footer/footer";
import SubHeader from "./components/template/subheader/subHeader";
import MainContent from "./components/template/mainContent/mainContent";

const App: React.FC<{}> = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.themeDark);

  const handleThemeSwitch = (theme: DefaultTheme): void => {
    setTheme(theme);
  };

  {
    /* <div style={{ padding: "350px" }}>
        <div className="App">
          <h1 onClick={() => handleThemeSwitch(themes.themeDark)}>Dark</h1>
          <h1 onClick={() => handleThemeSwitch(themes.themeLight)}>Light</h1>
        </div>
      </div> */
  }

  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <Header />
      <SubHeader />
      <SidebarLeft />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
