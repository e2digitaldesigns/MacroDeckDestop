import styled, { keyframes } from "styled-components";
import { ScrollerDiv } from "../../../../styles/scrollDiv.style";

export const DefaultItem = styled.div`
  background-color: #32363f;
  height: 1.875rem;
  width: 100%;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const PlaceHolder = styled(DefaultItem)`
  border-top: 0.0625rem solid #424242;
  cursor: inherit;
`;

export const ItemWrapper = styled(ScrollerDiv)`
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.25rem;

  > div {
    border-right: 0.0625rem solid #555;
    padding-right: 0.25rem;
  }

  border-bottom: 0.0625rem solid #555;
`;

export const ItemProfileWrapper = styled(ItemWrapper)`
  height: 18.75rem;
`;

export const ItemStyleWrapper = styled(ItemWrapper)`
  height: 9.375rem;
`;

export const ProfileWrapper = styled.div`
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  overflow: hidden;
  position: relative;
  height: 24.375rem;
  display: flex;
`;

interface IntWrapper {
  isEditMode: boolean | null;
}

const ProfileToggleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 18.75rem;

  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

export const ProfileListWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  animation-name: ${props =>
    props.isEditMode === false
      ? slideInAnimation
      : props.isEditMode
      ? slideOutAnimation
      : ""};
`;

export const ProfileEditWrapper = styled(ProfileToggleWrapper)<IntWrapper>`
  left: -13.75rem;
  animation-name: ${props =>
    props.isEditMode
      ? slideInAnimation
      : props.isEditMode === false
      ? slideOutAnimation
      : ""};
`;

const slideInAnimation = keyframes`
 0% { left: 13.75rem }
 100% { left: 0px }`;

const slideOutAnimation = keyframes`
0% { left: 0 }
100% { left: -13.75rem }`;
