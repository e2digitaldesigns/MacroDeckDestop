import styled from "styled-components";

interface ISectionWrapperGrid {
  showIconSelector: boolean;
}
export const SectionWrapperGrid = styled.div<ISectionWrapperGrid>`
  height: 230px;
  width: 835px;

  display: grid;
  grid-template-columns: ${props =>
    props.showIconSelector ? "1fr 2fr" : "repeat(3, 1fr)"};

  margin: 5px 0 0 10px;
  padding: 0.25rem;

  background-color: #2a2d34;
  border-bottom: 1px solid #42464e;

  > div {
    margin-right: 5px;
  }

  > div:last-child {
    margin-right: 0px;
  }
`;
