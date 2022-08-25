import React from "react";
import { SectionMenus } from "../../../../types/sectionMenuTypes";
import * as Styled from "./sectionMenu.styles";

interface IntSectionMenu {
  activeMenu: SectionMenus | null;
  changeMenu: (menu: SectionMenus) => void;
}

// const MenuButton = ({ activeMenu, changeMenu }) => {
//   return (
//     <Styled.SectionMenuItems
//       active={activeMenu === SectionMenus.Profile}
//       onClick={() => changeMenu(SectionMenus.Profile)}
//     >
//       {SectionMenus.Profile}
//     </Styled.SectionMenuItems>
//   );
// };

const SectionMenu: React.FC<IntSectionMenu> = ({ activeMenu, changeMenu }) => {
  return (
    <>
      <Styled.SectionMenuWrapper>
        <Styled.SectionMenuItemHeader>edit:</Styled.SectionMenuItemHeader>

        <Styled.SectionMenuItems
          active={activeMenu === SectionMenus.Profile}
          onClick={() => changeMenu(SectionMenus.Profile)}
        >
          {SectionMenus.Profile}
        </Styled.SectionMenuItems>

        <Styled.SectionMenuItems
          active={activeMenu === SectionMenus.Page}
          onClick={() => changeMenu(SectionMenus.Page)}
        >
          {SectionMenus.Page}
        </Styled.SectionMenuItems>

        <Styled.SectionMenuItems
          active={activeMenu === SectionMenus.ButtonPad}
          onClick={() => changeMenu(SectionMenus.ButtonPad)}
        >
          {SectionMenus.ButtonPad}
        </Styled.SectionMenuItems>

        <Styled.SectionMenuItems
          active={activeMenu === SectionMenus.Action}
          onClick={() => changeMenu(SectionMenus.Action)}
        >
          {SectionMenus.Action}
        </Styled.SectionMenuItems>
      </Styled.SectionMenuWrapper>
    </>
  );
};

export default SectionMenu;
