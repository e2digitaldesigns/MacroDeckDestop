import React from "react";
import _map from "lodash/map";
import * as Styled from "./navigation.style";
import NavigationItem from "./navigationItem";
import { IntProfile } from "../../../../types";
import NavigationSearch from "./navSearch";

const Navigation: React.FC = () => {
  const [filterProfiles, setFilterProfiles] = React.useState<IntProfile[]>([]);

  return (
    <>
      <NavigationSearch setFilterProfiles={setFilterProfiles} />
      <Styled.NavigationWrapper>
        {_map(
          filterProfiles,
          (profile: IntProfile): React.ReactElement => (
            <NavigationItem key={profile._id} profile={profile} />
          )
        )}
      </Styled.NavigationWrapper>
    </>
  );
};

export default Navigation;
