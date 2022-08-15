import styled from "styled-components";
import { DefaultItem } from "./../navigation.style";

type TStylesHeader = {
  active: boolean;
};

export const StylesHeader = styled(DefaultItem)<TStylesHeader>`
  margin-top: 15px;
  grid-template-columns: 40px auto 30px;
  background-color: #3d424d;

  grid-gap: 1em;
  height: 60px;

  border: 1px dashed ${props => (props.active ? "blue" : "#3d424d")};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      border-right: 0.0625em solid #444;
    }

    :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 12px;
    }

    :nth-child(3) {
      border-left: 0.0625em solid #42464e;
      color: #8498d2;
    }
  }
`;

type TStylesHeaderIconHolder = {
  active: boolean;
};

export const StylesHeaderIconHolder = styled.div<TStylesHeaderIconHolder>`
  svg {
    color: ${props => (props.active ? " #8498d2" : "white")};
  }
`;

export const StylesHeaderMessage = styled.span`
  font-size: 11px;
`;

export const StylesHeaderCount = styled.span`
  color: #8498d2;
`;
