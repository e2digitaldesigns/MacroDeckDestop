import styled from "styled-components";
import * as FormStyles from "../../styles/form.styles";

export const Section = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem;
  background-color: #272a31;
`;

export const FieldSet = styled.div`
  font-size: 0.875rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.25rem;
  margin: 0.25rem 0;
`;

export const SubmitButton = styled(FormStyles.SubmitButton)`
  width: 8rem;
  margin: 0.25rem 0;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.submitButton.bg.normal};
`;

const FormFieldDefaults = styled.input`
  height: 2rem;
  background-color: #1e1f22 !important;
  border: 0.125rem solid #55565a;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.875rem;
  outline: none;
  padding: 0.5rem 0.5rem;

  &:focus {
    color: #fff;
  }
`;

export const TextField = styled(FormFieldDefaults)``;
