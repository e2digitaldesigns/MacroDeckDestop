import styled from "styled-components";

export const FieldSet = styled.fieldset`
  border: none;
  margin: 0.5rem 0 0.125rem;
  > div {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 0.5rem;
  }
`;

export const TextField = styled.input.attrs({
  type: "text"
})`
  color: #fff;
  width: 100%;
  height: 2rem;
  padding: 0.5em 0.5em;
  display: inline-block;
  box-sizing: border-box;
  /* border-radius: 0.25em; */
  border: 0.125em solid #55565a;
  background-color: #1e1f22 !important;
  outline: none;
  font-size: 0.875em;
  &:focus {
    color: #fff;
  }
`;

export const ColorField = styled.input.attrs({
  type: "color"
})`
  width: 100%;
  height: 2rem;
  padding: 0.125em 0.125em;
  box-sizing: border-box;
  /* border-radius: 0.25em; */
  border: 0.125em solid #55565a;
  background-color: #1e1f22 !important;
  outline: none;
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.bodyBg};
  color: white;
  padding: 0.5em 0.5em;
  margin: 0.5em 0;
  border: none;
  /* border-radius: 0.125em; */
  /* float: right; */
  width: 100%;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid transparent;
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

export const SelectField = styled.select`
  color: #fff;
  width: 100%;
  height: 2rem;
  padding: 0.5em 0.5em;
  display: inline-block;
  box-sizing: border-box;
  /* border-radius: 0.25em; */
  border: 0.125em solid #55565a;
  background-color: #1e1f22 !important;
  outline: none;
  font-size: 0.875em;
`;
