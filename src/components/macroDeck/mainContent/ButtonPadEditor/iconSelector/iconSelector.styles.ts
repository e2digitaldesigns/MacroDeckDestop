import styled from "styled-components";
import * as FormStyles from "../../../../../styles/form.styles";

export const IconListWrapper = styled.div`
  position: relative;
  height: 11em;
  background-color: rgba(23, 23, 23, 0.5);
`;

export const IconListSearchWrapper = styled.div`
  width: calc(100% - 1em);
`;

export const IconListSearchField = styled(FormStyles.TextField)`
  height: 2em;
`;

// export const IconListWrapperScroll = styled(ScrollBars)`
//   margin-top: 8px;
//   height: calc(100% - 3em);
//   width: calc(100% - 1em);
// `;

export const IconListWrapperScroll = styled.div`
  margin-top: 8px;
  height: 280px;
  /* height: calc(100% - 3em); */
  width: calc(100% - 1em);

  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.25rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: #32363f;
  }

  ::-webkit-scrollbar-thumb {
    border-top: 1px solid #6e92b9;
    background: #3d424d;
    min-height: 2rem;
  }

  > div {
    border-right: 1px solid #555;
    padding-right: 0.25rem;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.125em 0.25em 0.125em 0.125em;
  grid-gap: 0.25em;
`;

export const IconItem = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  background: #333;

  display: grid;
  justify-items: center;
  align-items: center;

  padding: 0.5em 0;
`;

export const CloseButton = styled(FormStyles.SubmitButton)`
  font-size: 0.625em;
  width: calc(100% - 1.7em);
  float: left;
  border-radius: 0;
  padding: 0.25em;
`;
