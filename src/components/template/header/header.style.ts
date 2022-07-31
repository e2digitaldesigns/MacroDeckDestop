import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  background: #2a2d34;
`;

interface IntLinkWrapper {
  isActive?: boolean;
}

export const LinkWrapper = styled.div<IntLinkWrapper>`
  height: 100%;
  display: grid;
  font-size: 0.75rem;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;
  background-color: ${props => (props.isActive ? "#33373f" : "#2a2d34")};
  > svg {
    color: ${props => (props.isActive ? "#8498d2" : "#7f8185")};
    width: 12px;
    height: 12px;
  }
  a {
    color: ${props => (props.isActive ? "#fff" : "#7f8185")};
  }

  &:hover {
    a {
      color: #ffffff;
    }
    background-color: #33373f;
  }
`;
