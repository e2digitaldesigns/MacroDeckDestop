import React from "react";
import { Folder2, FolderFill } from "react-bootstrap-icons";
//https://icons.getbootstrap.com/

import { useAppData, useDragDrop, useProfile } from "../../../../../../hooks";
import * as Styled from "../navigationItems.style";
import { IntProfile } from "../../../../../../types";

interface IntNavigationItem {
  profile: IntProfile;
}

const NavigationItem: React.FC<IntNavigationItem> = ({ profile }) => {
  const { activateProfile } = useProfile();
  const { appState } = useAppData();
  const { allowDrop, itemDrop, dragDropRef } = useDragDrop(profile._id);

  const handleProfileActivate = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    event.stopPropagation();
    profile?._id && activateProfile(profile?._id);
  };

  return (
    <Styled.ItemProfile
      active={appState?.active?.profileId === profile._id}
      data-testid="side_bar_item__component"
      draggable={true}
      onClick={handleProfileActivate}
      onDragOver={allowDrop}
      onDrop={e => itemDrop(e, profile._id)}
      ref={dragDropRef}
    >
      <div>
        {appState?.active?.profileId === profile._id ? (
          <FolderFill size={16} />
        ) : (
          <Folder2 size={16} />
        )}
      </div>
      <div>{profile.profileName}</div>
      <div>{profile.buttonPads}</div>
    </Styled.ItemProfile>
  );
};

export default NavigationItem;
