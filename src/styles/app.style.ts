import styled from "styled-components";

export const Sidebarleft = styled.section<IntSidebarleft>`
  position: fixed;
  top: 80px;
  height: calc(100vh - 105px);
  width: ${props => props.theme.sizes.sidebarLeft.width};
  border-top: 0.0625rem solid ${props => props.theme.colors.border.default};
  border-right: 0.0625rem solid ${props => props.theme.colors.border.default};
  overflow: hidden;
  background-color: ${props => props.theme.colors.panel.bg};
  transition: width 1s;
  z-index: 999;
`;

export const MainContent = styled.div`
  width: 100%;
  padding: 80px 0 0 220px;
  /* min-height: 1535px; */
  align-items: center;
  background: #1c1e23;
`;

interface IntSidebarleft {
  showMenuLeft?: boolean;
}
