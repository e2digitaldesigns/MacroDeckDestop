import styled from "styled-components";
import { DefaultItem } from "../navigation.style";

export const NewProfileButton = styled(DefaultItem)`
  grid-template-columns: 40px auto;
  border-bottom: 1px solid
    ${props => props.theme.modules.sidebarLeft.newProfileButton.colors.border};

  color: ${props =>
    props.theme.modules.sidebarLeft.newProfileButton.colors.font.normal};
  &:hover {
    color: ${props =>
      props.theme.modules.sidebarLeft.newProfileButton.colors.font.hover};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
    }

    :nth-child(2) {
      justify-content: left;
    }
  }
`;
