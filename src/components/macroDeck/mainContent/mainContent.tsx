import React from "react";
import * as AppStyled from "../../../styles/app.style";

import ButtonPadGrid from "./buttonPadGrid/buttonPadGrid";

import SectionWrapper from "./sectionFormWrapper/sectionFormWrapper";

export const MacroDeckMainContent: React.FC = () => {
  return (
    <AppStyled.MainContent>
      <ButtonPadGrid />

      <SectionWrapper />
    </AppStyled.MainContent>
  );
};
