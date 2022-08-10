import styled from "styled-components";
import { DefaultItem } from "../navigation.style";

interface IntNavigationItem {
  active: boolean;
}

export const ItemProfile = styled(DefaultItem)<IntNavigationItem>`
  background-color: ${props => (props.active ? "#25334f" : "#32363f")};
  grid-template-columns: 40px auto 30px;
  > div {
    :nth-child(1) {
      color: #7d7f85;
    }

    :nth-child(2) {
      justify-content: left;
    }

    :nth-child(3) {
      border-left: 0.0625em solid #42464e;
      color: #8498d2;
    }
  }
`;

export const ItemStyle = styled(DefaultItem)`
  grid-template-columns: 2.5rem 1.5rem 1.5rem 1.5rem auto 30px;
  grid-gap: 1em;
  font-size: 0.9em;
`;

export const Drag = styled.div`
  border-right: 0.0625em solid #444;
`;

export const Remove = styled.div`
  border-left: 0.0625em solid #42464e;
  color: #8498d2;
`;
