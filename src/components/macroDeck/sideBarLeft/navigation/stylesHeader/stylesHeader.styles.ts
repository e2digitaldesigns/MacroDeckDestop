import styled from "styled-components";
import { DefaultItem } from "./../navigation.style";

type TStylesHeader = {
  active: boolean;
};

export const StylesHeader = styled(DefaultItem)<TStylesHeader>`
  margin-top: 15px;
  grid-template-columns: 40px auto 30px;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.styleHeeader.colors.wrapper.bg};

  grid-gap: 1em;
  height: 60px;

  border: 1px dashed
    ${props =>
      props.active
        ? props.theme.modules.sidebarLeft.styleHeeader.colors.wrapper.border
            .active
        : props.theme.modules.sidebarLeft.styleHeeader.colors.wrapper.border
            .normal};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      border-right: 0.0625em solid
        ${props =>
          props.theme.modules.sidebarLeft.styleHeeader.colors.icon.border};
    }

    :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 12px;
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
        ? props.theme.modules.sidebarLeft.styleHeeader.colors.svg.active
        : props.theme.modules.sidebarLeft.styleHeeader.colors.svg.normal};
  }
`;

export const StylesHeaderMessage = styled.span`
  font-size: 11px;
`;

export const StylesHeaderCount = styled.span`
  color: ${props =>
    props.theme.modules.sidebarLeft.styleHeeader.colors.count.font};
`;
