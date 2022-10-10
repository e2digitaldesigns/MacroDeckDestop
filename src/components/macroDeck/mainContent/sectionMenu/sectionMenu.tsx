import React from "react";
import _map from "lodash/map";
import { usePage } from "../../../../hooks";
import * as Styled from "./sectionMenu.styles";
import { IntPages } from "../../../../types";

interface IntSectionMenu {}

const SectionMenu: React.FC<IntSectionMenu> = () => {
  const { activatePage, pageCount, readPages } = usePage();

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
