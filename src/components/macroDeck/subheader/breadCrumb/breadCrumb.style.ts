import styled from "styled-components";

export const BreadCrumbWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const BreadCrumb = styled.div`
  height: 100%;
  padding: 0.25rem 0.5rem 0 1.25rem;
  cursor: pointer;
  :hover {
    background-color: ${props =>
      props.theme.modules.breadCrumb.colors.bg.hover};
  }
`;

export const Label = styled.div`
  color: ${props => props.theme.modules.breadCrumb.colors.label.font.normal};
  font-size: 0.75rem;
`;

export const TitleDiv = styled.div`
  display: flex;
  padding-top: 0.125rem;
`;

interface IntTitle {
  width: number;
}

export const Title = styled.div<IntTitle>`
  font-size: 0.75rem;
  width: ${props => (props.width ? props.width + "rem" : "auto")};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CaretHolder = styled.div`
  font-size: 0.875rem;
  display: flex;
  padding: 0.125rem 0 0 0.25rem;
  color: ${props => props.theme.modules.breadCrumb.colors.caretHolder.normal};
`;
