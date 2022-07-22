import styled from "styled-components";

interface IntFooter {
  isVisible?: boolean;
}

export const Footer = styled.section<IntFooter>`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 25px;
  border-top: 0.0625rem solid ${props => props.theme.colors.border.default};

  overflow: hidden;
  background-color: #32363f;
  transition: width 1s;
  z-index: 999;
`;
