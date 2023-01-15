import styled from "styled-components";
import { pxToRem } from "../../../../../utils";

export const ProfileSearchWrapper = styled.div`
  height: ${pxToRem("60px")};
  width: 100%;
  background-color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.wrapper.bg};
`;

export const ProfileSearchStats = styled.div`
  width: ${pxToRem("200px")};
  height: 1.25rem;
  font-size: 0.75rem;
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.stats.font};
  margin: 0px 0.625rem 0 0.625rem;
  padding: 0.5rem 0.125rem 0 0.125rem;
  margin-bottom: 0.375rem;
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
  width: ${pxToRem("200px")};
  height: 1.25rem;
  font-size: 0.75rem;
  color: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.searchBox.font};
  margin: 0 0.625rem;
  background: ${props =>
    props.theme.modules.sidebarLeft.profileSearch.colors.searchBox.bg};
  border-radius: 0.125rem;
  border: 0.0625rem solid
    ${props =>
      props.theme.modules.sidebarLeft.profileSearch.colors.searchBox
        .border} !important;
  outline-width: 0;
  padding: 0 0.3125rem 0px 0.3125rem;
`;
