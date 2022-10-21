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
  overflow: hidden;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  font-size: 0.75rem;
`;

export const FooterTab = styled.div`
  display: flex;
  height: 100%;
  border-left: 2px solid #454545;
  margin-left: 5px;
  padding: 0 10px;
  align-items: center;

  > span {
    font-weight: bold;
    padding-left: 3px;
  }
`;
