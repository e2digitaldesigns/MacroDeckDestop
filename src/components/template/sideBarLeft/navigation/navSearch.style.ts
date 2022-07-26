import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: #3d424d;
`;

export const SearchStats = styled.div`
  width: 200px;
  height: 20px;
  font-size: 0.75rem;
  color: #7f8178;
  margin: 0px 10px 0 10px;
  padding: 8px 2px 0 2px;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 0.5rem;
  align-items: center;
`;

export const SearchStatsCount = styled.span`
  color: #8498d2;
`;

export const SearchShowAll = styled.a`
  color: #8498d2;
  justify-content: right;
  text-align: right;
`;

export const SearchBox = styled.input.attrs({
  type: "text"
})`
  width: 200px;
  height: 20px;
  font-size: 0.75rem;
  color: #7f8178;
  margin: 0 10px;
  background: #31353e;
  border-radius: 2px;
  border: 1px solid #41454d !important;
  outline-width: 0;
  padding: 0 5px 0px 5px;
`;
