import styled from "styled-components";

export const ButtonPadMenuWrapper = styled.div`
  height: 30px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 0px 5px 0;
`;

interface IntSectionMenuItem {
  active?: boolean;
}

export const ButtonPadMenuItems = styled.div<IntSectionMenuItem>`
  height: 30px;
  display: grid;
  align-content: center;
  background-color: ${props => (props.active ? "#2a2d34" : "#2a2d34")};
  border-bottom: 1px solid ${props => (props.active ? "#8498d2" : "#2a2d34")};
  padding: 0 10px;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
`;
