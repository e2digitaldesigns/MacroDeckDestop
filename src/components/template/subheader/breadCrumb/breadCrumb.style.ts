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
    background-color: #2a2d34;
  }
`;

export const Label = styled.div`
  color: #7f8178;
  font-size: 0.75rem;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  display: flex;
  padding-top: 0.125rem;
`;

export const CaretHolder = styled.div`
  font-size: 0.875rem;
  display: flex;
  padding: 0.125rem 0 0 0.25rem;
  color: #7f8178;
`;
