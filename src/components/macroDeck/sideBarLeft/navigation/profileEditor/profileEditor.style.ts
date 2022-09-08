import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";

export const ProfileEditorWrapper = styled.div`
  height: 390px;
  width: 220px;
  border-bottom: 1px solid #555;
  background-color: #32363f;
  /* padding: 0.5rem; */

  position: relative;
`;

export const FieldSet = styled(FormStyles.FieldSet)`
  border: none;
  padding: 0.5rem;
  padding-bottom: 0.75rem;
  margin: 0.5rem 0 0.125rem;
  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0.5rem;
  }

  label {
    font-size: 0.75rem;
    margin-bottom: 0.375rem;
  }
`;

export const ButtonHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
  border-top: 1px solid #555;
  padding: 0.5rem;

  position: absolute;
  bottom: 0.5rem;
  width: 100%;
`;

export const SubmitButton = styled(FormStyles.SubmitButton)`
  margin: 0.25em 0;
  background-color: #8498d2;
`;

export const CloseButton = styled(FormStyles.SubmitButton)`
  margin: 0.25em 0;
`;
