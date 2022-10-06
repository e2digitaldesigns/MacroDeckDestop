import styled from "styled-components";
// import { SubmitButton, FieldSet } from "../../../../../../theme";

export const Wrapper = styled.div`
  box-sizing: border-box !important;
  background-color: #32363f;
  padding: 0.5rem;
  height: 220px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const FieldSet = styled.div`
  display: grid;
  grid-template-columns: 65px 190px;
  border: none;
  padding: 0;
  margin: 0 0 10px 0;
  width: 100%;
  overflow: hidden;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
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
  font-size: 0.875rem;
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
  appearance: none;
  color: #fff;
  width: 100%;
  padding: 0.5em 0.5em;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 0.25em;
  border: 0.125em solid #55565a;
  background-color: #1e1f22;
  outline: none;
  font-size: 0.875em;
  &:focus {
    border-color: #55565a;
  }
  option {
  }
`;

export const SubmitButton = styled.button`
  margin: 0.5rem 0 0 0;
  font-size: 0.75em;
  width: 100%;
  height: 30px;
  color: #ffffff;
  display: grid;
  align-content: center;
  background-color: #2a2d34;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #2a2d34;
  padding: 0 10px;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 0.25rem;

  &:hover {
    background-color: #2a2d34;
    border-bottom: 1px solid #8498d2;
  }
`;
