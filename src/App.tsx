import React from "react";
import * as Styled from "./app.style";
import { AppContext } from "./context/context";
import { AppTemplate } from "./components/template/template";

const App: React.FC<{}> = () => {
  return (
    <>
      <AppContext.ThemeProvider>
        <Styled.GlobalStyle />
        <AppContext.TemplateProvider>
          <AppTemplate.Header />
          <AppTemplate.SubHeader />
          <AppTemplate.SidebarLeft />
          <AppTemplate.MainContent />
          <AppTemplate.Footer />
        </AppContext.TemplateProvider>
      </AppContext.ThemeProvider>
    </>
  );
};

export default App;
