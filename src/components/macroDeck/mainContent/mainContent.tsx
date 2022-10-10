import React from "react";
import * as AppStyled from "../../../styles/app.style";

import ButtonPadGrid from "./buttonPadGrid/buttonPadGrid";
import SectionMenu from "./sectionMenu/sectionMenu";
import SectionWrapper from "./sectionFormWrapper/sectionFormWrapper";

export const MacroDeckMainContent: React.FC = () => {
  return (
    <AppStyled.MainContent>
      <ButtonPadGrid />

      <SectionMenu />

      <SectionWrapper />
    </AppStyled.MainContent>
  );
};
