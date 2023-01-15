import styled from "styled-components";
import { ScrollerDiv } from "../../../../styles/scrollDiv.style";
import { pxToRem } from "./../../../../utils";

export const BreadCrumbMenu = styled(ScrollerDiv)`
  position: absolute;
  top: 2.8125rem;
  left: 0px;
  max-height: ${pxToRem("550px")};
  min-width: ${pxToRem("240px")};
  background-color: #414650;
  padding-right: 0;
  box-shadow: 0.0625rem 0.0625rem 0.25rem #222;
  overflow: auto;
`;

interface IntBreadCrumbMenuItem {
  active?: boolean;
}

export const BreadCrumbMenuItem = styled.div<IntBreadCrumbMenuItem>`
  cursor: pointer;
  font-size: 0.75rem;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: 0.25s;
  background-color: ${props =>
    props.active
      ? props.theme.modules.breadCrumbMenuItem.colors.bg.normal.active
      : props.theme.modules.breadCrumbMenuItem.colors.bg.normal.normal};
  :hover {
    background-color: ${props =>
      props.active
        ? props.theme.modules.breadCrumbMenuItem.colors.bg.hover.active
        : props.theme.modules.breadCrumbMenuItem.colors.bg.hover.normal};
  }
`;

export const BreadCrumbMenuItemPage = styled(BreadCrumbMenuItem)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div:nth-child(2) {
    text-align: right;
  }
`;

export const BreadCrumbMenuItemNewPage = styled(BreadCrumbMenuItem)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5rem;
  background-color: ${props =>
    props.theme.modules.breadCrumbMenuItem.colors.bg.hover.normal};
`;

export const BreadCrumbMenuItemClose = styled(BreadCrumbMenuItem)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5rem;
  border-top: solid 0.0625rem #8498d2;
`;
