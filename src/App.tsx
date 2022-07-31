import React from "react";
import * as Styled from "./app.style";
import { ApplicationContext } from "./context/context";

import {
  AppContextProvider,
  DropZoneContextProvider,
  GlobalContextProvider
} from "./context";

import ApplicationWrapper from "./components/application/applicationWrapper";

const App: React.FC<{}> = () => {
  return (
    <>
      <ApplicationContext.ThemeProvider>
        <Styled.GlobalStyle />
        <ApplicationContext.TemplateProvider>
          <GlobalContextProvider>
            <AppContextProvider>
              <DropZoneContextProvider>
                <ApplicationWrapper />
              </DropZoneContextProvider>
            </AppContextProvider>
          </GlobalContextProvider>
        </ApplicationContext.TemplateProvider>
      </ApplicationContext.ThemeProvider>
    </>
  );
};

export default App;
