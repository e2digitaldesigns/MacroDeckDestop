import styled from "styled-components";
import { pxToRem } from "../../../../utils";

export const FormWrapper = styled.div`
  box-sizing: border-box !important;
  background-color: #32363f;
  padding: 0.5rem;
  /* height: ${pxToRem("220px")}; */
  overflow: hidden;

  display: flex;
  flex-direction: column;
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
