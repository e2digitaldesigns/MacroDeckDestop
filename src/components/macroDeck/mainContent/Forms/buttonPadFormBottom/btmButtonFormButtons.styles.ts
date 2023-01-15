import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 0.5rem;
  height: 14.0625rem;
  margin-top: 0.25em;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  height: 30px;
`;

export const ActionButton = styled(FormStyles.SubmitButton)`
  margin: 0;
`;

export const PlayButton = styled(FormStyles.SubmitButton)`
  margin: 0;
  height: 30px;
  /* align-self: end; */
`;

export const DeleteButton = styled(FormStyles.SubmitButton)`
  margin: 0;
  height: 30px;
  /* align-self: end; */
`;
