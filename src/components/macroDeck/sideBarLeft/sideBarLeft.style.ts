import styled from "styled-components";

export const SidebarLeft = styled.section`
  position: fixed;
  top: ${props => props.theme.modules.sidebarLeft.position.top};
  height: ${props => props.theme.modules.sidebarLeft.sizes.height};
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  border-top: 0.0625rem solid
    ${props => props.theme.modules.sidebarLeft.colors.borderTop};
  border-right: 0.0625rem solid
    ${props => props.theme.modules.sidebarLeft.colors.borderRight};
  overflow: hidden;
  background-color: ${props => props.theme.modules.sidebarLeft.colors.bg};
  transition: width 1s;
  z-index: 999;
`;
