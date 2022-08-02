import styled from "styled-components";

const ButtonPadDiv = styled.div`
  width: 100px;
  height: 80px;
  font-size: 0.75rem;
  background: #2a2d34;
  cursor: pointer;
`;

interface IntButtonPad {
  bgColor: string;
  isActive: boolean;
  isDropZone?: boolean;
}
export const ButtonPad = styled(ButtonPadDiv)<IntButtonPad>`
  font-size: 0.75rem;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  cursor: grab;
  position: relative;
  background: ${props => props.bgColor || "#2a2d34"};
  border: 2px solid #2a2d34;
  border-bottom: 2px solid ${props => (props.isActive ? "#8498d2" : "#2a2d34")};
  transition: border 0.75s;
`;

export const ButtonPadEmpty = styled(ButtonPadDiv)`
  color: #777;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: color 0.25s;
  :hover {
    color: white;
  }
`;

export const ButtonPadNone = styled(ButtonPadDiv)``;

type ButtonPadTextType = {
  color?: string | undefined;
};

const ButtonPadOptionIcon = styled.div`
  position: absolute;
  top: 0.125em;
  height: 1.75em;
  width: 1.75em;
  /* text-align: center; */
  cursor: pointer;
  color: rgba(255, 255, 255, 1);

  transition: background-color 0.75s;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;

export const ButtonPadOptionEdit = styled(ButtonPadOptionIcon)`
  left: 0;
  border-radius: 0 50% 50% 0;
`;

export const ButtonPadOptionCopy = styled(ButtonPadOptionIcon)`
  left: 27px;
  border-radius: 50% 0 0 50%;
  display: none;
`;

export const ButtonPadOptionPaste = styled(ButtonPadOptionIcon)`
  right: 27px;
  border-radius: 0 50% 50% 0;
  display: none;
`;

export const ButtonPadOptionDelete = styled(ButtonPadOptionIcon)`
  right: 0;
  border-radius: 50% 0 0 50%;
`;

export const ButtonPadText = styled.div<ButtonPadTextType>`
  position: absolute;
  bottom: 2px;
  left: 0;
  color: ${props => props.color || "#ffffff"};
  width: 100%;
  min-height: 1.25em;
  padding: 0.25em 0.5em;
  text-align: center;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonPadIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 01.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
