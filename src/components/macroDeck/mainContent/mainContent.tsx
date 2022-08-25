import React from "react";
import * as AppStyled from "../../../styles/app.style";

import ButtonPadGrid from "./buttonPadGrid/buttonPadGrid";
import SectionMenu from "./sectionMenu/sectionMenu";
import SectionWrapper from "./sectionFormWrapper/sectionFormWrapper";
import { SectionMenus } from "../../../types/sectionMenuTypes";

export const MacroDeckMainContent: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState<SectionMenus | null>(null);

  const handleChangeMenu = (menu: SectionMenus) => {
    setActiveMenu(menu);
  };

  return (
    <AppStyled.MainContent>
      {/* <div data-testid="main-content-wrapper"></div> */}

      <ButtonPadGrid />

      <SectionMenu activeMenu={activeMenu} changeMenu={handleChangeMenu} />

      <SectionWrapper activeMenu={activeMenu} />
    </AppStyled.MainContent>
  );
};
