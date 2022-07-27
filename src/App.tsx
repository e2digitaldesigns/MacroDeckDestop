import React from "react";
import * as Styled from "./app.style";
import { ApplicationContext } from "./context/context";
import { AppTemplate } from "./components/template/template";
import { AppContextProvider, GlobalContextProvider } from "./context";

const App: React.FC<{}> = () => {
  return (
    <>
      <ApplicationContext.ThemeProvider>
        <Styled.GlobalStyle />
        <ApplicationContext.TemplateProvider>
          <GlobalContextProvider>
            <AppContextProvider>
              <AppTemplate.Header />
              <AppTemplate.SubHeader />
              <AppTemplate.SidebarLeft />
              <AppTemplate.MainContent />
              <AppTemplate.Footer />
            </AppContextProvider>
          </GlobalContextProvider>
        </ApplicationContext.TemplateProvider>
      </ApplicationContext.ThemeProvider>
    </>
  );
};

export default App;
