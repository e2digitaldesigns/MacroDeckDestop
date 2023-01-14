import styled from "styled-components";

export const SectionMenuWrapper = styled.div`
  height: 30px;
  width: 835px;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: 100px repeat(4, 1fr);

  margin: 5px 0 0 10px;
`;

interface IntSectionMenuItem {
  active?: boolean;
}

export const SectionMenuItems = styled.div<IntSectionMenuItem>`
  height: 30px;
  display: grid;
  align-content: center;
  background-color: ${props => (props.active ? "#2a2d34" : "#2a2d34")};
  border-bottom: 0.0625rem solid
    ${props => (props.active ? "#8498d2;" : "#2a2d34")};
  padding: 0 10px;
  justify-content: center;
  /* cursor: pointer; */
  transition: 0.5s;
`;

export const SectionMenuItemHeader = styled(SectionMenuItems)`
  cursor: inherit;
  padding: 0 10px;
`;
