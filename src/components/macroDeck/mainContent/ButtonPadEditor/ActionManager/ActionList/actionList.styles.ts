import styled from "styled-components";

export const ActionListWrapper = styled.div`
  height: 240px;
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

export const ActionListWrapperScroll = styled.div`
  height: 240px;
`;

type ActionListItemType = {
  isActive?: boolean;
};

export const ActionListItem = styled.li<ActionListItemType>`
  display: grid;
  width: 100%;
  height: 1.875em;
  grid-template-columns: 1fr 2rem;
  padding: 0 0.5em;
  align-items: center;
  background-color: #32363f;
  border-bottom: 1px solid #424242;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }
`;

export const ActionListItemInfo = styled.div`
  font-size: 0.75em;
  width: 100%;
  height: 0.875em;
  display: grid;
  grid-template-columns: 3rem 1rem auto;

  div:nth-child(1) {
    font-weight: 400;
    text-transform: uppercase;
  }

  div:nth-child(2) {
    text-align: center;
  }

  div:nth-child(3) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 1em 0 0.5em;
  }
`;

export const ActionListItemButton = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #8498d2;
  }
`;

export const ActionListNewButton = styled.button`
  margin: 0.5rem 0 0 0;
  font-size: 0.75em;
  width: 100%;
  height: 30px;

  color: #ffffff;

  display: grid;
  align-content: center;
  background-color: #2a2d34;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #2a2d34;
  padding: 0 10px;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #2a2d34;
    border-bottom: 1px solid #8498d2;
  }
`;
