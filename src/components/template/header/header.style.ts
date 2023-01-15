import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: flex;
  width: ${props => props.theme.modules.header.sizes.width};
  height: ${props => props.theme.modules.header.sizes.height};
  align-items: center;
  background: ${props => props.theme.modules.header.colors.bg};
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
  background-color: ${props =>
    props.isActive
      ? props.theme.modules.header.colors.link.bg.active
      : props.theme.modules.header.colors.link.bg.normal};
  > svg {
    color: ${props =>
      props.isActive
        ? props.theme.modules.header.colors.link.icon.active
        : props.theme.modules.header.colors.link.icon.normal};
    width: 0.75rem;
  }
  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props =>
      props.isActive
        ? props.theme.modules.header.colors.link.font.active
        : props.theme.modules.header.colors.link.font.normal};
  }

  &:hover {
    a {
      color: ${props => props.theme.modules.header.colors.link.hover.font};
    }
    background-color: ${props =>
      props.theme.modules.header.colors.link.hover.bg};
  }
`;
