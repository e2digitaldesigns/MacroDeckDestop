import styled from "styled-components";
import { DefaultItem } from "../navigation.style";

export const NewProfileButton = styled(DefaultItem)`
  grid-template-columns: 40px auto;
  border-bottom: 1px solid #42464e;

  > div {
    :nth-child(1) {
      color: #7d7f85;
    }

    :nth-child(2) {
      justify-content: left;
    }
  }
`;
