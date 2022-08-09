import styled from "styled-components";

export const DefaultItem = styled.div`
  background-color: #32363f;
  border-top: 1px solid #42464e;
  height: 30px;
  width: 100%;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ItemWrapper = styled.div``;

export const ItemProfileWrapper = styled(ItemWrapper)``;

export const ItemStyleWrapper = styled(ItemWrapper)``;
