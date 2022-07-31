import React from "react";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import * as Styled from "./navSearch.style";
import { useGlobalData } from "../../../../hooks";
import _filter from "lodash/filter";
import _includes from "lodash/includes";
import _toLower from "lodash/toLower";
import _size from "lodash/size";
import { IntProfile } from "../../../../types";

interface IntNavigationSearch {
  count: number;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationSearch: React.FC<IntNavigationSearch> = ({
  count,
  searchText,
  setSearchText
}) => {
  const globalData = useGlobalData();
  const profiles = globalData?.state?.profiles || [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Styled.SearchWrapper>
      <Styled.SearchStats>
        <ArrowLeftCircleFill />
        <div>
          Viewing
          <Styled.SearchStatsCount>
            {count}/ {_size(profiles)}{" "}
          </Styled.SearchStatsCount>
        </div>

        <Styled.SearchShowAll>
          <span onClick={() => setSearchText("")}>Show All</span>
        </Styled.SearchShowAll>
      </Styled.SearchStats>

      <div>
        <Styled.SearchBox value={searchText} onChange={handleSearchChange} />
      </div>
    </Styled.SearchWrapper>
  );
};

export default NavigationSearch;
