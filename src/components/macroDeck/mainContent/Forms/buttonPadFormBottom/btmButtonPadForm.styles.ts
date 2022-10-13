import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box !important;
  background-color: #32363f;
  padding: 0.5rem;
  height: 100%;
  height: 220px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

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

  /* display: none; */
`;

const ButtonDefaults = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  color: white;
  padding: 0.5rem 0.5rem;
  margin: 0;
  border: none;
  border-bottom: 1px solid transparent;
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.bodyBg};
    border-bottom: 1px solid #8498d2;
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

export const ActionButton = styled(ButtonDefaults)``;

export const PlayButton = styled(ButtonDefaults)``;

export const DeleteButton = styled(ButtonDefaults)``;
