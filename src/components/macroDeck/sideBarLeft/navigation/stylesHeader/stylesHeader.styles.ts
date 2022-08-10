import styled from "styled-components";
import { DefaultItem } from "./../navigation.style";

export const StylesHeader = styled(DefaultItem)`
  margin-top: 15px;

  grid-template-columns: 40px auto 30px;
  grid-template-columns: 2.5rem auto 30px;

  grid-gap: 1em;
  > div {
    :nth-child(1) {
      color: #7d7f85;
      border-right: 0.0625em solid #444;
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
