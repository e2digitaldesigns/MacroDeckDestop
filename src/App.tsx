import React from "react";
import * as Styled from "./app.style";

import { TemplateContextProvider, ThemeContextProvider } from "./context";
import { Template } from "./components/template/template";

const App: React.FC<{}> = () => {
  return (
    <>
      <ThemeContextProvider>
        <Styled.GlobalStyle />
        <TemplateContextProvider>
          <Template.Header />
          <Template.SubHeader />
          <Template.SidebarLeft />
          <Template.MainContent />
          <Template.Footer />
        </TemplateContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
