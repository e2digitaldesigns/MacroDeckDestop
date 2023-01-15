import styled from "styled-components";
import { pxToRem } from "../../../../utils";

interface ISectionWrapperGrid {
  showIconSelector: boolean;
}
export const SectionWrapperGrid = styled.div<ISectionWrapperGrid>`
  height: ${pxToRem("267px")};
  width: ${pxToRem("835px")};

  display: grid;
  grid-template-columns: ${props =>
    props.showIconSelector ? "1fr 2fr" : "repeat(3, 1fr)"};

  margin: ${pxToRem("5px")} 0 0 ${pxToRem("10px")};
  padding: 0.25rem;

  background-color: #2a2d34;
  border-bottom: 0.0625rem solid #42464e;

  > div {
    margin-right: ${pxToRem("5px")};
  }

  > div:last-child {
    margin-right: 0px;
  }
`;
