import styled from "styled-components";

interface IntButtonWrapperGrid {
  isGrid6x15: boolean;
}

export const ButtonWrapperGrid = styled.div<IntButtonWrapperGrid>`
  display: grid;
  width: 835px;
  height: 335px;
  overflow: hidden;
  grid-template-columns: repeat(8, 100px);
  grid-template-columns: ${props =>
    props.isGrid6x15 && "48px repeat(7, 100px) 47px"};

  grid-gap: 5px;
  padding: 0;
  margin: 10px 0 0 10px;
`;
