import styled from "styled-components";

export const SubHeader = styled.header`
  position: fixed;
  top: 35px;
  width: 100%;
  height: 45px;
  align-items: center;
  background: #33373f;

  display: inline-flex;
  align-content: center;
  gap: 0px;
  z-index: 1000;
`;

export const BreadCrumbHolder = styled.div`
  font-size: 1.5rem;
  display: flex;
  padding: 0.125rem 0 0 0.125rem;
  color: #7f8178;
  opacity: 0.35;
`;
