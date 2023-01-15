import styled from "styled-components";
import { pxToRem } from "./../utils";

export const MainContent = styled.div`
  width: 100%;
  padding: ${pxToRem("80px")} 0 0 ${pxToRem("220px")};
  align-items: center;
  background: #1c1e23;
`;
