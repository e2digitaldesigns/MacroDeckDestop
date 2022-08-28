import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  margin-top: 0.25em;
`;

export const SubmitButton = styled(FormStyles.SubmitButton)`
  margin: 0;
`;
