import styled from "styled-components";

export const SubActionDiv = styled.div`
  font-size: 0.75rem;
  width: 100%;
  height: 0.875rem;
  display: grid;
  grid-column-gap: 0.0625rem;
  grid-template-columns: 2rem auto;

  div:nth-child(1) {
  }

  div:nth-child(2) {
    width: 100%;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    border-left: solid 0.0625rem #8498d2;
    padding-left: 0.75rem;
  }
`;
