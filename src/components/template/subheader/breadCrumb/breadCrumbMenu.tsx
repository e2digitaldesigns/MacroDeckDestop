import React from "react";
import * as Styled from "./breadCrumbMenu.style";

export interface IntBreadCrumbMenu {
  type: string;
}

const BreadCrumbMenu: React.FC<IntBreadCrumbMenu> = ({ type }) => {
  return (
    <Styled.BreadCrumbMenu>
      <Styled.BreadCrumbMenuItem>Page 001</Styled.BreadCrumbMenuItem>
      <Styled.BreadCrumbMenuItem active={true}>
        Page 002
      </Styled.BreadCrumbMenuItem>
      <Styled.BreadCrumbMenuItem>Page 003</Styled.BreadCrumbMenuItem>
      <Styled.BreadCrumbMenuItem>Page 004</Styled.BreadCrumbMenuItem>
      <Styled.BreadCrumbMenuItem>Page 005</Styled.BreadCrumbMenuItem>
    </Styled.BreadCrumbMenu>
  );
};

export default BreadCrumbMenu;
