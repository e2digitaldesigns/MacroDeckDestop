import styled from "styled-components";
import { pxToRem } from "./../../../../utils";

interface IntButtonWrapperGrid {
  isGrid6x15: boolean;
}

export const ButtonWrapperGrid = styled.div<IntButtonWrapperGrid>`
  display: grid;
  width: ${pxToRem("835px")};
  height: ${pxToRem("335px")};
  overflow: hidden;
  grid-template-columns: repeat(8, ${pxToRem("100px")});
  grid-template-columns: ${props =>
    props.isGrid6x15 &&
    ` ${pxToRem("48px")} repeat(7, ${pxToRem("100px")}) ${pxToRem("47px")}`};

  grid-gap: ${pxToRem("5px")};
  padding: 0;
  margin: ${pxToRem("10px")} 0 0 ${pxToRem("10px")};
`;
