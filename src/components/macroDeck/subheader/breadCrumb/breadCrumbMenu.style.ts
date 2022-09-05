import styled from "styled-components";

export const BreadCrumbMenu = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;

  min-width: 240px;
  background-color: #414650;
  box-shadow: 1px 1px 4px #222;
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
