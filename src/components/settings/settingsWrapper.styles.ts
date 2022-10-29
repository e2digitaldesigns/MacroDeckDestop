import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.modules.sidebarLeft.sizes.width} auto;
  padding-top: ${props => props.theme.modules.subHeader.position.top};
`;
