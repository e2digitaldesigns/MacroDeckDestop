import styled from "styled-components";
import { ScrollerDiv } from "../../../../../styles/scrollDiv.style";

export const Wrapper = styled.div`
  box-sizing: border-box !important;
  background-color: #32363f;
  padding: 0.5rem;
  height: 100%;
  height: 220px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const FieldSet = styled.div`
  border: none;
  padding: 0;
  margin: 0 0 0.375rem 0;
  width: 100%;
  overflow: hidden;
  align-self: flex-end;
  margin: auto 0 0 0;
`;

export const ActionListWrapper = styled(ScrollerDiv)`
  height: 162px;

  > div {
    border-right: 1px solid #555;
    padding-right: 0.25rem;
  }
`;

export const ActionListScroll = styled.div`
  min-height: 100%;
`;

type ActionListItemType = {
  isActive?: boolean;
  isPlaceHolder?: boolean;
};

export const ActionListItem = styled.li<ActionListItemType>`
  display: grid;
  width: 100%;
  height: 1.875em;
  grid-template-columns: 1fr 2rem;
  padding: 0 0.5em;
  align-items: center;
  background-color: ${props => (props.isActive ? "#25334f" : "#32363f")};
  border-bottom: 1px solid #424242;
  cursor: ${props => (props.isPlaceHolder ? "inherit" : "pointer")};

  &:last-child {
    border-bottom: 0;
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

const ButtonDefaults = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  color: white;
  padding: 0.5rem 0.5rem;
  margin: 0;
  border: none;
  border-bottom: 1px solid transparent;
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.bodyBg};
    border-bottom: 1px solid #8498d2;
  }

  &:focus {
    border: none;
    text-decoration: none;
  }

  &:active {
    border: none;
    text-decoration: none;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.bodyBg};
    color: #bbb;
    cursor: default;
    opacity: 0.5;
    border: none;
  }
`;

export const ActionListNewButton = styled(ButtonDefaults)``;
