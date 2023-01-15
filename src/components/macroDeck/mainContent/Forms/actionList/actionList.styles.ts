import styled from "styled-components";
import { ScrollerDiv } from "../../../../../styles/scrollDiv.style";
import { pxToRem } from "../../../../../utils";
import { ButtonDefaults, FormWrapper } from "../../../../../styles/form.styles";

export const Wrapper = styled(FormWrapper)``;

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
  height: ${pxToRem("162px")};

  > div {
    border-right: 0.0625rem solid #555;
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
  height: 1.875rem;
  grid-template-columns: 1fr 2rem;
  padding: 0 0.5rem;
  align-items: center;
  background-color: ${props => (props.isActive ? "#25334f" : "#32363f")};
  border-bottom: 0.0625rem solid #424242;
  cursor: ${props => (props.isPlaceHolder ? "inherit" : "pointer")};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ActionListItemButton = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #8498d2;
  }
`;

export const ActionListNewButton = styled(ButtonDefaults)``;
