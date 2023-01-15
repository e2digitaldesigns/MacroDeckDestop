import styled from "styled-components";
import { pxToRem } from "../utils";

export const FormWrapper = styled.div`
  box-sizing: border-box !important;
  background-color: #32363f;
  padding: 0.5rem;
  /* height: ${pxToRem("220px")}; */
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const FieldSet = styled.fieldset`
  border: none;
  margin: 0.5rem 0 0.125rem;
  > div {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 0.5rem;
  }
`;

const DefaultField = styled.input`
  width: 100%;
  height: 2rem;
  color: ${props => props.theme.modules.formFields.default.text.normal};
  box-sizing: border-box;
  border: 0.125em solid
    ${props => props.theme.modules.formFields.default.border.normal};
  background-color: ${props =>
    props.theme.modules.formFields.default.bg.normal} !important;
  outline: none;
  display: inline-block;
`;

export const TextField = styled(DefaultField).attrs({
  type: "text"
})`
  color: ${props => props.theme.modules.formFields.textField.text.normal};
  padding: 0.5rem;
  font-size: 0.875rem;
  &:focus {
    color: ${props => props.theme.modules.formFields.textField.text.focus};
  }
`;

export const ColorField = styled(DefaultField).attrs({
  type: "color"
})`
  padding: 0.125rem;
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.modules.formFields.submit.bg.normal};
  color: ${props => props.theme.modules.formFields.submit.text.normal};
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0;
  border: none;
  width: 100%;
  cursor: pointer;
  border: none;
  border-bottom: 0.0625rem solid
    ${props => props.theme.modules.formFields.submit.border.normal};
  outline: none;
  transition: 0.5s;
  &:hover {
    background-color: ${props =>
      props.theme.modules.formFields.submit.bg.hover};
    border-bottom: 0.0625rem solid
      ${props => props.theme.modules.formFields.submit.border.hover};
  }
  &:focus {
    border-bottom-color: transparent;
    text-decoration: none;
  }
  &:active {
    border-bottom-color: transparent;
    text-decoration: none;
  }
  &:disabled {
    border-bottom-color: transparent;
    background-color: ${props =>
      props.theme.modules.formFields.submit.bg.disabled};
    color: ${props => props.theme.modules.formFields.submit.text.disabled};
    cursor: default;
    opacity: 0.5;
  }
`;

export const SelectField = styled.select`
  color: ${props => props.theme.modules.formFields.selectField.text.normal};
  padding: 0.125rem 0.25rem;

  width: 100%;
  height: 2rem;
  display: inline-block;
  box-sizing: border-box;
  border: 0.125em solid
    ${props => props.theme.modules.formFields.selectField.border.normal};

  background-color: ${props =>
    props.theme.modules.formFields.selectField.bg.normal} !important;
  outline: none;
  font-size: 0.875rem;
`;

export const ButtonDefaults = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  color: white;
  padding: 0.5rem 0.5rem;
  margin: 0;
  border: none;
  border-bottom: 0.0625rem solid transparent;
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.bodyBg};
    border-bottom: 0.0625rem solid #8498d2;
  }

  &:focus {
    border: none;
    text-decoration: none;
  }

  &:active {
    border: none;
    text-decoration: none;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.bodyBg};
    color: #bbb;
    cursor: default;
    opacity: 0.5;
    border: none;
  }
`;

export const FormFieldDefaultsParser = () => {
  return `
  width: 100%;
  height: 2rem;
  background-color: #1e1f22 !important;
  border: 0.125rem solid #55565a;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.75rem;
  outline: none;
  padding: 0.25rem 0.5rem;

  &:focus {
    color: #fff;
  }
  `;
};
