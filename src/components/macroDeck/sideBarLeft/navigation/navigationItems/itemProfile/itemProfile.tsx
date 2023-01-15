import React from "react";
import { Folder2, FolderFill, PencilSquare } from "react-bootstrap-icons";
//https://icons.getbootstrap.com/

import { useAppData, useDragDrop, useProfile } from "../../../../../../hooks";
import * as Styled from "../navigationItems.style";
import { IntProfile } from "../../../../../../types";

interface IntNavigationItem {
  handleOpenProfileEdit: (e: React.MouseEvent<HTMLDivElement>) => void;
  profile: IntProfile;
}

const NavigationItem: React.FC<IntNavigationItem> = ({
  handleOpenProfileEdit,
  profile
}) => {
  const { activateProfile } = useProfile();
  const { appState } = useAppData();
  const { allowDrop, itemDrop, dragDropRef } = useDragDrop(profile._id);
  const [isHover, setIsHover] = React.useState<boolean | null>(null);

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
          <Styled.IconWrapper
            onClick={handleOpenProfileEdit}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Styled.IconFolderWrapper isHover={isHover}>
              <FolderFill />
            </Styled.IconFolderWrapper>

            <Styled.IconEditWrapper isHover={isHover}>
              <PencilSquare />
            </Styled.IconEditWrapper>
          </Styled.IconWrapper>
        ) : (
          <Folder2 />
        )}
      </div>
      <div>{profile.profileName}</div>
      <div>{profile.buttonPads}</div>
    </Styled.ItemProfile>
  );
};

export default NavigationItem;
