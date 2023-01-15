import styled from "styled-components";

export const SubHeader = styled.header`
  position: fixed;
  top: ${props => props.theme.modules.subHeader.position.top};
  width: ${props => props.theme.modules.subHeader.sizes.width};
  height: ${props => props.theme.modules.subHeader.sizes.height};
  align-items: center;
  background: ${props => props.theme.modules.subHeader.colors.bg};

  display: inline-flex;
  align-content: center;
  gap: 0;
  z-index: ${props => props.theme.modules.subHeader.zIndex};
`;

export const BreadCrumbHolder = styled.div`
  font-size: 1.25rem;
  display: flex;
  padding: 0.125rem 0 0 0.125rem;
  color: #7f8178;
  opacity: 0.35;
`;
