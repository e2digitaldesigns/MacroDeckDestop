import React from "react";

import * as Styled from "./app.style";
import Header from "./components/template/header/header";
import SidebarLeft from "./components/template/sideBarLeft/sideBarLeft";
import Footer from "./components/template/footer/footer";
import SubHeader from "./components/template/subheader/subHeader";
import MainContent from "./components/template/mainContent/mainContent";
import { TemplateContextProvider, ThemeContextProvider } from "./context";

const App: React.FC<{}> = () => {
  return (
    <ThemeContextProvider>
      <Styled.GlobalStyle />
      <TemplateContextProvider>
        <Header />
        <SubHeader />
        <SidebarLeft />
        <MainContent />
        <Footer />
      </TemplateContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
