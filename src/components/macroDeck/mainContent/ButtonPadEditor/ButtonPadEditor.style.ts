import styled from "styled-components";

export const ButtonPadEditor = styled.div`
  background-color: #1c1e23;
  background-color: black;
  width: 835px;
  margin: 10px 0 0 10px;
  height: 335px;
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-gap: 5px;
`;

interface IntButtonPad {
  bgColor?: string;
  isDropZone?: boolean;
  isEmpty: boolean;
}

export const ButtonPadWrapper = styled.div<IntButtonPad>`
  background: ${props => props.bgColor || "#2a2d34"};
  position: relative;
  width: 200px;
  height: 160px;
  border-bottom: 2px solid #8498d2;
`;

type ButtonPadTextType = {
  color?: string;
};

export const ButtonPadText = styled.div<ButtonPadTextType>`
  position: absolute;
  bottom: 0px;
  left: 0;
  color: ${props => props.color || "#ffffff"};
  width: 100%;
  /* min-height: 2.5em; */
  /* padding: 0.25em 0.5em; */
  text-align: center;
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface IntButtonPadIcon {
  iconColor?: string;
}

export const ButtonPadIcon = styled.div<IntButtonPadIcon>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.iconColor || "#ffffff"};
  display: flex;
  padding-top: 36px;
  justify-content: center;
  /* align-items: center; */
`;
