import React from "react";
import _map from "lodash/map";
import * as Styled from "./navigation.style";
import { useGlobalData } from "../../../../hooks";
import NavigationItem from "./navigationItem";
import { IntProfile } from "../../../../types";
import NavigationSearch from "./navSearch";
import _filter from "lodash/filter";
import _includes from "lodash/includes";
import _size from "lodash/size";
import _toLower from "lodash/toLower";

const Navigation: React.FC = () => {
  const globalData = useGlobalData();
  const [searchText, setSearchText] = React.useState<string>("");
  const profiles = globalData?.state?.profiles || [];

  const filteredProfiles = searchText
    ? _filter(profiles, (profile: IntProfile) =>
        _includes(_toLower(profile.profileName), _toLower(searchText))
      )
    : profiles;

  return (
    <>
      <NavigationSearch
        count={_size(filteredProfiles)}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Styled.NavigationWrapper>
        {_map(
          filteredProfiles,
          (profile: IntProfile): React.ReactElement => (
            <NavigationItem key={profile._id} profile={profile} />
          )
        )}
      </Styled.NavigationWrapper>
    </>
  );
};

export default Navigation;
