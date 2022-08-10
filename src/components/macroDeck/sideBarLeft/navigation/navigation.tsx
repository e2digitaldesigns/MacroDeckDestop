import React from "react";
import ItemStyle from "./navigationItems/itemStyle/itemStyle";

import { useProfile, useStyles } from "../../../../hooks";
import { IntProfile, IntStyles } from "../../../../types";

import ProfileSearch from "./profileSearch/profileSearch";
import ItemProfile from "./navigationItems/itemProfile/itemProfile";

import _filter from "lodash/filter";
import _includes from "lodash/includes";
import _size from "lodash/size";
import _toLower from "lodash/toLower";
import _map from "lodash/map";
import ProfileButton from "./profileButton/profileButton";
import StylesHeader from "./stylesHeader/stylesHeader";

const Navigation: React.FC = () => {
  const { readProfiles } = useProfile();
  const { readStyles } = useStyles();
  const [searchText, setSearchText] = React.useState<string>("");

  const profiles = readProfiles();
  const styles = readStyles();

  const filteredProfiles = searchText
    ? _filter(profiles, (profile: IntProfile) =>
        _includes(_toLower(profile.profileName), _toLower(searchText))
      )
    : profiles;

  return (
    <>
      <ProfileButton />

      <ProfileSearch
        count={_size(filteredProfiles)}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <div>
        {_map(
          filteredProfiles,
          (profile: IntProfile): React.ReactElement => (
            <ItemProfile key={profile._id} profile={profile} />
          )
        )}
      </div>

      <StylesHeader />

      <div>
        {_map(
          styles,
          (style: IntStyles): React.ReactElement => (
            <ItemStyle key={style._id} data={style} />
          )
        )}
      </div>
    </>
  );
};

export default Navigation;
