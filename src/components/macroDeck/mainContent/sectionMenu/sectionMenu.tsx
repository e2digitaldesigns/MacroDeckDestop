import React from "react";
import * as Styled from "./sectionMenu.styles";

interface IntSectionMenu {}

const SectionMenu: React.FC<IntSectionMenu> = () => {
  return (
    <>
      <Styled.SectionMenuWrapper>
        <Styled.SectionMenuItems />
        <Styled.SectionMenuItems />
        <Styled.SectionMenuItems />
        <Styled.SectionMenuItems />
        <Styled.SectionMenuItems />
      </Styled.SectionMenuWrapper>
    </>
  );
};

export default SectionMenu;
