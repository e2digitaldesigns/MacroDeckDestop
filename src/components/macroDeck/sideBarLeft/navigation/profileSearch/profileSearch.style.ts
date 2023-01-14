import styled from "styled-components";

export const ProfileSearchWrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.wrapper.bg};
`;

export const ProfileSearchStats = styled.div`
  width: 200px;
  height: 20px;
  font-size: 0.75rem;
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.stats.font};
  margin: 0px 10px 0 10px;
  padding: 8px 2px 0 2px;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 0.5rem;
  align-items: center;
`;

export const ProfileSearchStatsCount = styled.span`
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.count.font};
`;

export const ProfileSearchShowAll = styled.div`
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.showAll.font};
  justify-content: right;
  text-align: right;
  cursor: pointer;
`;

export const ProfileSearchBox = styled.input.attrs({
  type: "text"
})`
  width: 200px;
  height: 20px;
  font-size: 0.75rem;
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.searchBox.font};
  margin: 0 10px;
  background: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.searchBox.bg};
  border-radius: 2px;
  border: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileSearch.colors.searchBox
        .border} !important;
  outline-width: 0;
  padding: 0 5px 0px 5px;
`;
