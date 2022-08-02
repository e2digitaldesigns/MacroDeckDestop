import React from "react";
import { Folder2 } from "react-bootstrap-icons";
//https://icons.getbootstrap.com/

import {
  useAppData,
  useDragDrop,
  useGlobalData,
  useProfile
} from "../../../../hooks";
import * as Styled from "./navigation.style";
import { IntProfile } from "../../../../types";

interface IntNavigationItem {
  profile: IntProfile;
}

const NavigationItem: React.FC<IntNavigationItem> = ({ profile }) => {
  const globalData = useGlobalData();
  const { activateProfile } = useProfile();
  const { appState } = useAppData();
  const { menuAllowDrop, menuDragEnd, menuDragStart, menuItemDrop } =
    useDragDrop();
  const profileItemRef = React.useRef<any>(null);

  React.useEffect(() => {
    profileItemRef?.current?.addEventListener("dragstart", (e: any) =>
      menuDragStart(e, profile._id)
    );
    profileItemRef?.current?.addEventListener("dragend", menuDragEnd);

    return () => {
      profileItemRef?.current?.removeEventListener("dragstart", (e: any) =>
        menuDragStart(e, profile._id)
      );

      profileItemRef?.current?.removeEventListener("dragend", menuDragEnd);
    };
  }, [profileItemRef, profile._id]);

  const handleProfileActivate = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    event.stopPropagation();
    profile?._id && activateProfile(profile?._id);
  };

  return (
    <Styled.NavigationItem
      active={appState?.active?.profileId === profile._id}
      data-testid="side_bar_item__component"
      draggable={true}
      onClick={handleProfileActivate}
      onDragOver={menuAllowDrop}
      onDrop={e => menuItemDrop(e, profile._id)}
      ref={profileItemRef}
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
