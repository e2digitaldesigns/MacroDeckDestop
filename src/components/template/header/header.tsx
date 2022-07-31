import React from "react";
import { Link } from "react-router-dom";
import { FolderFill, Folder2 } from "react-bootstrap-icons";
import * as Styled from "./header.style";

import { useLocation } from "react-router-dom";
import { SectionRoutes } from "./../../../types";

interface IntHeaderLink {
  name: string;
  route: SectionRoutes;
}
const HeaderLink: React.FC<IntHeaderLink> = ({ name, route }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const isActive = route === path[1];

  return (
    <Styled.LinkWrapper isActive={isActive}>
      {isActive ? <FolderFill /> : <Folder2 />}
      <Link to={route}>{name}</Link>
    </Styled.LinkWrapper>
  );
};

export interface ITemplateHeader {}
export const TemplateHeader: React.FC = () => {
  return (
    <Styled.Header>
      <HeaderLink name="Home" route={SectionRoutes.Home} />
      <HeaderLink name="MacroDeck" route={SectionRoutes.MacroDeck} />
      <HeaderLink name="Settings" route={SectionRoutes.Settings} />
    </Styled.Header>
  );
};
