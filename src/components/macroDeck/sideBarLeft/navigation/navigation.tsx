import React from "react";
import * as Styled from "./navigation.style";

import { useProfile, useStyles } from "../../../../hooks";
import { IntProfile, IntStyles } from "../../../../types";

import _filter from "lodash/filter";
import _includes from "lodash/includes";
import _map from "lodash/map";
import _range from "lodash/range";
import _size from "lodash/size";
import _toLower from "lodash/toLower";

import ProfileButton from "./profileButton/profileButton";
import ProfileSearch from "./profileSearch/profileSearch";
import ItemProfile from "./navigationItems/itemProfile/itemProfile";
import StylesHeader from "./stylesHeader/stylesHeader";
import ItemStyle from "./navigationItems/itemStyle/itemStyle";
import ProfileEditor from "./profileEditor/profileEditor";

interface IntItemPlaceHolders {
  itemCount: number;
}

const ItemPlaceHolders: React.FC<IntItemPlaceHolders> = ({ itemCount }) => {
  return (
    <>
      {_map(
        _range(itemCount),
        (i): React.ReactElement => (
          <Styled.PlaceHolder key={i} />
        )
      )}
    </>
  );
};

enum PlaceHolderType {
  Profile = "profile",
  Style = "style"
}

const placeHolderParser = (
  count: number,
  type: PlaceHolderType = PlaceHolderType.Profile
) => {
  const minProfileCount = 10;
  const minStylesCount = 5;

  const baseNum =
    type === PlaceHolderType.Style ? minStylesCount : minProfileCount;

  return count >= baseNum ? 0 : baseNum - count;
};

const Navigation: React.FC = () => {
  const { readProfiles } = useProfile();
  const { readStyles, styleCount } = useStyles();
  const [searchText, setSearchText] = React.useState<string>("");
  const [isEditMode, setIsEditMode] = React.useState<boolean | null>(null);

  const profiles = readProfiles();
  const styles = readStyles();
  const sytleNum = styleCount();

  const filteredProfiles = searchText
    ? _filter(profiles, (profile: IntProfile) =>
        _includes(_toLower(profile.profileName), _toLower(searchText))
      )
    : profiles;

  const profilePlaceHolder = placeHolderParser(_size(filteredProfiles));
  const stylePlaceHolder = placeHolderParser(sytleNum, PlaceHolderType.Style);

  const handleOpenProfileEdit = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsEditMode(true);
  };

  return (
    <>
      <Styled.ProfileWrapper>
        <Styled.ProfileListWrapper isEditMode={isEditMode}>
          <ProfileButton />

          <ProfileSearch
            count={_size(filteredProfiles)}
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <Styled.ItemProfileWrapper>
            <div>
              {_map(
                filteredProfiles,
                (profile: IntProfile): React.ReactElement => (
                  <ItemProfile
                    key={profile._id}
                    handleOpenProfileEdit={handleOpenProfileEdit}
                    profile={profile}
                  />
                )
              )}

              <ItemPlaceHolders itemCount={profilePlaceHolder} />
            </div>
          </Styled.ItemProfileWrapper>
        </Styled.ProfileListWrapper>

        <Styled.ProfileEditWrapper isEditMode={isEditMode}>
          <ProfileEditor setIsEditMode={setIsEditMode} />
        </Styled.ProfileEditWrapper>
      </Styled.ProfileWrapper>

      <StylesHeader />

      <Styled.ItemStyleWrapper>
        <div>
          {_map(
            styles,
            (style: IntStyles): React.ReactElement => (
              <ItemStyle key={style._id} data={style} />
            )
          )}

          <ItemPlaceHolders itemCount={stylePlaceHolder} />
        </div>
      </Styled.ItemStyleWrapper>
    </>
  );
};

export default Navigation;
