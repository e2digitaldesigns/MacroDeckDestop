import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Gear,
  GearFill,
  HouseDoor,
  HouseDoorFill,
  Icon,
  XDiamond,
  XDiamondFill
} from "react-bootstrap-icons";
import * as Styled from "./header.style";

import { SectionRoutes } from "./../../../types";

interface IntHeaderLink {
  Icon1: Icon;
  Icon2: Icon;
  name: string;
  route: SectionRoutes;
}
const HeaderLink: React.FC<IntHeaderLink> = ({ Icon1, Icon2, name, route }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const isActive = route === path[1];

  return (
    <Styled.LinkWrapper isActive={isActive}>
      {isActive ? <Icon2 /> : <Icon1 />}
      <Link to={route}>{name}</Link>
    </Styled.LinkWrapper>
  );
};

export interface ITemplateHeader {}
export const TemplateHeader: React.FC = () => {
  return (
    <Styled.Header>
      <HeaderLink
        Icon1={HouseDoor}
        Icon2={HouseDoorFill}
        name="Home"
        route={SectionRoutes.Home}
      />

      <HeaderLink
        Icon1={XDiamond}
        Icon2={XDiamondFill}
        name="MacroDeck"
        route={SectionRoutes.MacroDeck}
      />

      <HeaderLink
        Icon1={Gear}
        Icon2={GearFill}
        name="Settings"
        route={SectionRoutes.Settings}
      />
    </Styled.Header>
  );
};
