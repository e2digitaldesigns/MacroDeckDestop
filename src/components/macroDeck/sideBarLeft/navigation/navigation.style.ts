import styled, { keyframes } from "styled-components";

export const DefaultItem = styled.div`
  background-color: #32363f;
  /* border-bottom: 1px solid #42464e; */
  height: 30px;
  width: 100%;
  display: grid;
  grid-column-gap: 0.125rem;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const PlaceHolder = styled(DefaultItem)`
  border-top: 1px solid #424242;
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

export const ProfileWrapper = styled.div`
  width: ${props => props.theme.modules.sidebarLeft.sizes.width};
  overflow: hidden;
  position: relative;
  height: 390px;
  display: flex;
`;

interface IntWrapper {
  isEditMode: boolean | null;
}

const ProfileToggleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;

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
  left: -220px;
  animation-name: ${props =>
    props.isEditMode
      ? slideInAnimation
      : props.isEditMode === false
      ? slideOutAnimation
      : ""};
`;

const slideInAnimation = keyframes`
 0% { left: 220px }
 100% { left: 0px }`;

const slideOutAnimation = keyframes`
0% { left: 0 }
100% { left: -220px }`;
