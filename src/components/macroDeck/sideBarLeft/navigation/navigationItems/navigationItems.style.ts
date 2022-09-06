import styled, { keyframes } from "styled-components";
import { DefaultItem } from "../navigation.style";

interface IntNavigationItem {
  active: boolean;
}

export const ItemProfile = styled(DefaultItem)<IntNavigationItem>`
  background-color: ${props =>
    props.active
      ? props.theme.modules.sidebarLeft.navigationItems.colors.bg.active
      : props.theme.modules.sidebarLeft.navigationItems.colors.bg.normal};
  grid-template-columns: 40px auto 30px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 29px;

    :nth-child(1) {
      color: ${props =>
        props.theme.modules.sidebarLeft.navigationItems.colors.font.normal};
    }

    :nth-child(2) {
      justify-content: left;
    }

    :nth-child(3) {
      border-left: 0.0625em solid
        ${props =>
          props.theme.modules.sidebarLeft.navigationItems.colors.count.border};
      color: ${props =>
        props.theme.modules.sidebarLeft.navigationItems.colors.count.font};
    }
  }
`;

export const ItemStyle = styled(DefaultItem)`
  grid-template-columns: 2.5rem 1.5rem 1.5rem 1.5rem auto 30px;
  grid-template-columns: 40px auto 30px;
  font-size: 0.9em;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Drag = styled.div`
  border-right: 0.0625em solid
    ${props =>
      props.theme.modules.sidebarLeft.navigationItems.colors.drag.border};
`;

export const InnerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);

  > div {
    justify-content: center !important;
    text-align: center;
  }
`;

export const Remove = styled.div`
  border-left: 0.0625em solid
    ${props =>
      props.theme.modules.sidebarLeft.navigationItems.colors.remove.border};
  color: ${props =>
    props.theme.modules.sidebarLeft.navigationItems.colors.remove.font};
`;

interface IntWrapper {
  isHover: boolean | null;
}

export const IconWrapper = styled.div`
  display: block;
  width: 40px;
  height: 29px;
  overflow: hidden;
  position: relative;
`;

export const IconToggleWrapper = styled.div`
  /* transition: 0.5s; */
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 29px;

  animation-duration: 0.25s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

export const IconFolderWrapper = styled(IconToggleWrapper)<IntWrapper>`
  animation-name: ${props =>
    props.isHover === null
      ? startInAnimation
      : props.isHover
      ? slideOutAnimation
      : slideInAnimation};
`;

export const IconEditWrapper = styled(IconToggleWrapper)<IntWrapper>`
  left: -40px;
  animation-name: ${props =>
    props.isHover === null
      ? startOutAnimation
      : props.isHover
      ? slideInAnimation
      : slideOutAnimation};
`;

const slideInAnimation = keyframes`
 0% { left: 40px }
 100% { left: 0px }`;

const slideOutAnimation = keyframes`
0% { left: 0 }
100% { left: -40px }`;

const startInAnimation = keyframes`
0% { left: 0px }
100% { left: 0px }`;

const startOutAnimation = keyframes`
0% { left: -40px }
100% { left: -40px }`;
