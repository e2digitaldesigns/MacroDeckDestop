import React from "react";
import * as AppStyled from "../../../styles/app.style";

import ButtonPadGrid from "./buttonPadGrid/buttonPadGrid";
import SectionMenu from "./sectionMenu/sectionMenu";
import SectionWrapper from "./sectionFormWrapper/sectionFormWrapper";
import { SectionMenus } from "../../../types/sectionMenuTypes";
import ButtonPadEditor from "./ButtonPadEditor/ButtonPadEditor";

export const MacroDeckMainContent: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState<SectionMenus | null>(
    SectionMenus.ButtonPad
  );

  const handleChangeMenu = (menu: SectionMenus) => {
    setActiveMenu(menu);
  };

  return (
    <AppStyled.MainContent>
      {/* <ButtonPadGrid /> */}

      <ButtonPadEditor />

      {/* {activeMenu === SectionMenus.ButtonPad ? (
        <ButtonPadEditor />
      ) : (
        <ButtonPadGrid />
      )} */}

      <SectionMenu activeMenu={activeMenu} changeMenu={handleChangeMenu} />

      <SectionWrapper activeMenu={activeMenu} />
    </AppStyled.MainContent>
  );
};
