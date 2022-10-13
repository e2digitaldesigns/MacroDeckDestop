import React from "react";
import * as Styled from "./styles/global.style";
import { ApplicationContext } from "./context/context";

import {
  AppContextProvider,
  DropZoneContextProvider,
  GlobalContextProvider
} from "./context";

import ApplicationWrapper from "./components/application/applicationWrapper";
import SoundPlayer from "./components/soundPlayer/soundPlayer";
import UpdateListener from "./components/updateListener/updateListener";

const App: React.FC<{}> = () => {
  return (
    <>
      <ApplicationContext.ThemeProvider>
        <Styled.GlobalStyle />
        <ApplicationContext.TemplateProvider>
          <GlobalContextProvider>
            <UpdateListener />
            <AppContextProvider>
              <SoundPlayer />
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
