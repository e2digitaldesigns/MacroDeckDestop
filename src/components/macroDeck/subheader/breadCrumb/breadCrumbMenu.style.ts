import styled from "styled-components";
import { ScrollerDiv } from "../../../../styles/scrollDiv.style";

export const BreadCrumbMenu = styled(ScrollerDiv)`
  position: absolute;
  top: 45px;
  left: 0px;
  max-height: 550px;
  min-width: 240px;
  background-color: #414650;
  padding-right: 0;
  box-shadow: 1px 1px 4px #222;
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
`;
