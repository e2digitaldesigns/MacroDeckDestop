import React from "react";
import { Folder2 } from "react-bootstrap-icons";
//https://icons.getbootstrap.com/

import { useAppData, useProfile } from "../../../../hooks";
import * as Styled from "./navigation.style";

interface IntNavigationItem {
  profile: any;
}
const NavigationItem: React.FC<IntNavigationItem> = ({ profile }) => {
  const { activateProfile } = useProfile();
  const { appState } = useAppData();

  const handleProfileActivate = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    event.stopPropagation();
    profile?._id && activateProfile(profile?._id);
  };

  return (
    <Styled.NavigationItem
      active={appState?.active?.profileId === profile._id}
      onClick={handleProfileActivate}
    >
      <div>
        <Folder2 size={16} />
      </div>
      <div>{profile.profileName}</div>
      <div>{profile.buttonPads}</div>
    </Styled.NavigationItem>
  );
};

export default NavigationItem;
