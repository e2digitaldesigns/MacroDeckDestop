import React from "react";
import * as AppStyled from "../../../styles/app.style";

import ButtonPadGrid from "./buttonPadGrid/buttonPadGrid";

export const MacroDeckMainContent: React.FC = () => {
  return (
    <AppStyled.MainContent>
      <div data-testid="main-content-wrapper">
        <ButtonPadGrid />
      </div>
    </AppStyled.MainContent>
  );
};
