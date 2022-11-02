import styled from "styled-components";

export const SettingsMenuWrapper = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: #272a31;
  height: calc(
    100vh -
      (
        (
            ${props => props.theme.modules.subHeader.position.top} +
              ${props => props.theme.modules.footer.sizes.height}
          ) + 1rem
      )
  );
`;

export const MenuUL = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 0.875rem;
  padding: 0 0.5rem 0.5rem;
  list-style: none;
`;
