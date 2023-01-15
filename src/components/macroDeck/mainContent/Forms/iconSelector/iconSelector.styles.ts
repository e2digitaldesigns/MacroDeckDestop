import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";
import { pxToRem } from "../../../../../utils";

export const IconListWrapper = styled.div`
  position: relative;
  height: ${pxToRem("258px")};
  background-color: #32363f;
  padding: 0.5rem;
  display: grid;
  grid-template-rows: 2rem 1fr;
`;

export const IconListSearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-gap: 0.25em;
`;

export const IconListSearchField = styled(FormStyles.TextField)``;

export const CloseButton = styled(FormStyles.SubmitButton)`
  height: 2rem;
  font-size: 0.625em;
  float: left;
  border-radius: 0;
  margin: 0;
`;

export const IconListWrapperScroll = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.25rem;
  margin-top: 0.5rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: #32363f;
  }

  ::-webkit-scrollbar-thumb {
    border-top: 0.0625rem solid #6e92b9;
    background: #3d424d;
    min-height: 2rem;
  }

  > div {
    border-right: 0.0625rem solid #555;
    padding-right: 0.25rem;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 0.25em;
`;

export const IconItem = styled.div`
  width: 100%;
  height: 40px;
  background-color: #272a31;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;

  transition: 0.25s;
  user-select: none;

  &:hover {
    background-color: #1c1e23;
    border-bottom-color: #8498d2;
  }
`;
