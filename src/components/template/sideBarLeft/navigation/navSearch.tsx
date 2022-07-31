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
  setFilterProfiles: React.Dispatch<React.SetStateAction<IntProfile[]>>;
}

const NavigationSearch: React.FC<IntNavigationSearch> = ({
  setFilterProfiles
}) => {
  const globalData = useGlobalData();
  const profiles = globalData?.state?.profiles || [];
  const [searchText, setSearchText] = React.useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredProfiles = searchText
    ? _filter(profiles, (profile: IntProfile) =>
        _includes(_toLower(profile.profileName), _toLower(searchText))
      )
    : profiles;

  React.useEffect(() => {
    setFilterProfiles(filteredProfiles);
  }, [filteredProfiles]);

  return (
    <Styled.SearchWrapper>
      <Styled.SearchStats>
        <ArrowLeftCircleFill />
        <div>
          Viewing
          <Styled.SearchStatsCount>
            {_size(filteredProfiles)}/ {_size(profiles)}{" "}
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
