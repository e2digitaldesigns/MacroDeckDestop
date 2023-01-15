import styled from "styled-components";
import { pxToRem } from "../../../../../utils";

import {
  ButtonDefaults,
  FormWrapper,
  FormFieldDefaultsParser
} from "../../../../../styles/form.styles";

export const Wrapper = styled(FormWrapper)``;

export const FieldSet = styled.div`
  display: grid;
  grid-template-columns: ${pxToRem("65px")} ${pxToRem("190px")};
  border: none;
  padding: 0;
  margin: 0 0 0.375rem 0;
  width: 100%;
  overflow: hidden;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

export const FieldSetBottom = styled.div`
  border: none;
  padding: 0;
  margin: 0 0 0.375rem 0;
  width: 100%;
  overflow: hidden;
  align-self: flex-end;
  margin: auto 0 0 0;
`;

const FormFieldDefaults = styled.input`
  width: 100%;
  height: 2rem;
  background-color: #1e1f22 !important;
  border: 0.125rem solid #55565a;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.75rem;
  outline: none;
  padding: 0.5rem 0.5rem;
  &:focus {
    color: #fff;
  }
`;

export const TextField = styled(FormFieldDefaults).attrs({
  type: "text"
})``;

export const SelectField = styled.select`
  /* width: 100%;
  height: 2rem;
  background-color: #1e1f22 !important;
  border: 0.125rem solid #55565a;
  box-sizing: border-box;
  color: #fff;
  font-size: 0.75rem;
  outline: none;
  padding: 0.25rem 0.5rem; */

  /* appearance: none;
  color: #fff;
  width: 100%;
  padding: 0.5em 0.5em;
  display: inline-block;
  box-sizing: border-box;
  border: 0.125em solid #55565a;
  background-color: #1e1f22;
  outline: none;
  font-size: 0.75rem;
  &:focus {
    border-color: #55565a;
  }
  option {
  } */

  ${FormFieldDefaultsParser()}
`;

export const SubmitButton = styled(ButtonDefaults)``;
