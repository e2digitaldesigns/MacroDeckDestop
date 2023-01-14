import styled from "styled-components";
import { pxToRem } from "./../../../../utils";

const ButtonPadDiv = styled.div`
  width: 100%;
  font-size: 0.75rem;
  background: ${props => props.theme.modules.buttonPadParser.colors.wrapper.bg};
  cursor: pointer;
`;

interface IntButtonPad {
  bgColor?: string;
  isActive: boolean;
  isDropZone?: boolean;
  isEmpty: boolean;
}
export const ButtonPad = styled(ButtonPadDiv)<IntButtonPad>`
  cursor: ${props => (props.isEmpty ? "auto" : "grab")};
  position: relative;
  background: ${props =>
    props.bgColor || props.theme.modules.buttonPadParser.colors.buttonPad.bg};
  border-bottom: ${pxToRem("2px")} solid
    ${props =>
      props.isActive
        ? props.theme.modules.buttonPadParser.colors.buttonPad.borderBottom
            .active
        : props?.bgColor
        ? props.bgColor
        : props.theme.modules.buttonPadParser.colors.buttonPad.bg};
  transition: border 0.75s;
`;

export const ButtonPadNone = styled(ButtonPadDiv)`
  cursor: auto;
`;

type ButtonPadTextType = {
  color?: string;
};

const ButtonPadOptionIcon = styled.div`
  position: absolute;
  top: 0.125rem;
  height: 1.75rem;
  width: 1.75rem;
  cursor: pointer;
  transition: background-color 0.75s;
  background-color: ${props =>
    props.theme.modules.buttonPadParser.colors.buttonPadOptionIcon.bg.normal};
  z-index: 500;

  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${props =>
      props.theme.modules.buttonPadParser.colors.buttonPadOptionIcon.font
        .hover};
    background-color: ${props =>
      props.theme.modules.buttonPadParser.colors.buttonPadOptionIcon.bg.hover};
  }
`;

export const ButtonPadOptionCopy = styled(ButtonPadOptionIcon)`
  left: 0;
  border-radius: 0 50% 50% 0;
`;

export const ButtonPadOptionPaste = styled(ButtonPadOptionIcon)`
  right: 0;
  border-radius: 50% 0 0 50%;
`;

export const ButtonPadOptionDelete = styled(ButtonPadOptionIcon)`
  top: auto;
  bottom: 0px;
  right: 0;
  border-radius: 50% 50% 0 0;
  background-color: #2a2d34;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const ButtonPadText = styled.div<ButtonPadTextType>`
  position: absolute;
  bottom: 0px;
  left: 0;
  color: ${props =>
    props.color ||
    props.theme.modules.buttonPadParser.colors.buttonPadText.font.normal};
  width: 100%;
  min-height: 1.25em;
  padding: 0.25em 0.5em;
  text-align: center;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface IntButtonPadIcon {
  iconColor?: string;
}

export const ButtonPadIcon = styled.div<IntButtonPadIcon>`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props =>
    props.iconColor ||
    props.theme.modules.buttonPadParser.colors.buttonPadIcon.font.normal};
  display: flex;
  padding-top: ${pxToRem("18px")};
  justify-content: center;
`;

export const ButtonPadIconPlus = styled(ButtonPadIcon)`
  color: ${props =>
    props.theme.modules.buttonPadParser.colors.buttonPadIconPlus.font.normal};
  cursor: pointer;
`;
