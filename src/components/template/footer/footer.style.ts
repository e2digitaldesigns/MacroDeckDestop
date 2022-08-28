import styled from "styled-components";

interface IntFooter {
  isVisible?: boolean;
}

export const Footer = styled.section<IntFooter>`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: ${props => props.theme.modules.footer.sizes.width};
  height: ${props => props.theme.modules.footer.sizes.height};
  border-top: 0.0625rem solid
    ${props => props.theme.modules.footer.colors.border};

  overflow: hidden;
  background-color: ${props => props.theme.modules.footer.colors.bg};
  transition: width 1s;
  z-index: ${props => props.theme.modules.footer.zIndex};
`;
