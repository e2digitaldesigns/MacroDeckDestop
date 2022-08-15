import styled from "styled-components";

export const DefaultItem = styled.div`
  background-color: #32363f;
  border-bottom: 1px solid #42464e;
  height: 30px;
  width: 100%;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const PlaceHolder = styled(DefaultItem)`
  border-bottom: 1px solid #424242;
  cursor: inherit;
`;

export const ItemWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.25rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: #32363f;
  }

  ::-webkit-scrollbar-thumb {
    border-top: 1px solid #6e92b9;
    background: #3d424d;
    min-height: 2rem;
  }

  > div {
    border-right: 1px solid #555;
    padding-right: 0.25rem;
  }

  border-bottom: 1px solid #555;
`;

export const ItemProfileWrapper = styled(ItemWrapper)`
  height: 300px;
`;

export const ItemStyleWrapper = styled(ItemWrapper)`
  height: 150px;
`;
