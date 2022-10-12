import React from "react";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import * as Styled from "./profileSearch.style";
import { useGlobalData } from "../../../../../hooks";
import _size from "lodash/size";

interface IntProfileSearch {
  count: number;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileSearch: React.FC<IntProfileSearch> = ({
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
    <Styled.ProfileSearchWrapper>
      <Styled.ProfileSearchStats>
        <ArrowLeftCircleFill />
        <div>
          Viewing{" "}
          <Styled.ProfileSearchStatsCount>
            {count}/ {_size(profiles)}{" "}
          </Styled.ProfileSearchStatsCount>
        </div>

        <Styled.ProfileSearchShowAll>
          <span onClick={() => setSearchText("")}>Show All</span>
        </Styled.ProfileSearchShowAll>
      </Styled.ProfileSearchStats>

      <div>
        <Styled.ProfileSearchBox
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
    </Styled.ProfileSearchWrapper>
  );
};

export default ProfileSearch;
