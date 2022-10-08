import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";

export const ProfileEditorWrapper = styled.div`
  height: 24.375rem;
  width: 13.75rem;
  border-bottom: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileEdit.wrapper.border.normal};
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.wrapper.bg.normal};
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
  border-top: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileEdit.buttonHolder.border.normal};
  padding: 0.5rem;

  position: absolute;
  bottom: 0.5rem;
  width: 100%;
`;

export const SubmitButton = styled(FormStyles.SubmitButton)`
  margin: 0.25rem 0;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.submitButton.bg.normal};
`;

export const CloseButton = styled(FormStyles.SubmitButton)`
  margin: 0.25rem 0;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileEdit.closeButton.bg.normal};
`;
