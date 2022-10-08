import styled from "styled-components";

export const ScrollerDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.25rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.modules.scrollerDiv.track.bg.normal};
  }

  ::-webkit-scrollbar-thumb {
    border-top: 0.0625rem solid
      ${props => props.theme.modules.scrollerDiv.thumb.border.normal};
    background: ${props => props.theme.modules.scrollerDiv.thumb.bg.normal};
    min-height: 2rem;
  }
`;
