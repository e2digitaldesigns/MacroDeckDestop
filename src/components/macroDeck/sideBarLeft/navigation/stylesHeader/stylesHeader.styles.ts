import styled from "styled-components";
import { DefaultItem } from "./../navigation.style";

type TStylesHeader = {
  active: boolean;
};

export const StylesHeader = styled(DefaultItem)<TStylesHeader>`
  margin-top: 0.9375rem;
  grid-template-columns: 2.5rem auto 1.875rem;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.styleHeader.colors.wrapper.bg};

  grid-gap: 0.5rem;
  height: 3.75rem;

  border: 0.0625rem dashed
    ${props =>
      props.active
        ? props.theme.modules.sidebarLeft.styleHeader.colors.wrapper.border
            .active
        : props.theme.modules.sidebarLeft.styleHeader.colors.wrapper.border
            .normal};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      border-right: 0.0625rem solid
        ${props =>
          props.theme.modules.sidebarLeft.styleHeader.colors.icon.border};
    }

    :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 0.75rem;
    }
  }
`;

type TStylesHeaderIconHolder = {
  active: boolean;
};

export const StylesHeaderIconHolder = styled.div<TStylesHeaderIconHolder>`
  svg {
    color: ${props =>
      props.active
        ? props.theme.modules.sidebarLeft.styleHeader.colors.svg.active
        : props.theme.modules.sidebarLeft.styleHeader.colors.svg.normal};
  }
`;

export const StylesHeaderMessage = styled.span`
  font-size: 0.6875rem;
`;

export const StylesHeaderCount = styled.span`
  color: ${props =>
    props.theme.modules.sidebarLeft.styleHeader.colors.count.font};
`;
