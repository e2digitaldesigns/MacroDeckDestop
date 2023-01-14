import styled from "styled-components";
import { ButtonDefaults, FormWrapper } from "../forms.style";

export const Wrapper = styled(FormWrapper)``;

interface IntFieldSet {
  noGrid?: boolean;
  isBottom?: boolean;
}

export const FieldSet = styled.div<IntFieldSet>`
  border: none;
  padding: 0;
  margin: 0 0 0.375rem 0;
  width: 100%;
  overflow: hidden;
  ${props =>
    props.noGrid
      ? "display: block"
      : `
         display: grid;
         grid-template-columns: 4fr 1fr; 
         grid-column-gap: 0.5rem;
    `};
`;

export const FieldSetBottom = styled(FieldSet)<IntFieldSet>`
  border: none;
  padding: 0;
  margin: 0 0 0.375rem 0;
  width: 100%;
  overflow: hidden;

  align-self: flex-end;
  margin: auto 0 0 0;

  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-column-gap: 0.5rem;
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

export const ColorField = styled(FormFieldDefaults).attrs({
  type: "color"
})`
  padding: 0.0625rem;
`;

export const ButtonFormTextField = styled(FormFieldDefaults)`
  text-align: left;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  height: 2rem;
`;

export const ActionButton = styled(ButtonDefaults)``;

export const PlayButton = styled(ButtonDefaults)``;

export const DeleteButton = styled(ButtonDefaults)``;
