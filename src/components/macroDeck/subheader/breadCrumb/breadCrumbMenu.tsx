import React from "react";
import * as Styled from "./breadCrumbMenu.style";
import {
  BreadCrumbMenuTypes,
  IntButtonPads,
  IntPages,
  IntProfile
} from "../../../../types";
import {
  useActions,
  useAppData,
  useButton,
  usePage,
  useProfile
} from "../../../../hooks";
import _map from "lodash/map";
import { IntActions } from "./../../../../types/globalContextType";

export interface IntBreadCrumbMenu {
  dropDownType: string;
  handleSetActiveBreadCrumbMenu: (
    activeMenu: BreadCrumbMenuTypes | null
  ) => void;
}

const BreadCrumbMenu: React.FC<IntBreadCrumbMenu> = ({
  dropDownType,
  handleSetActiveBreadCrumbMenu
}) => {
  const { appState } = useAppData();
  const { activateProfile, profileCount, readProfiles } = useProfile();
  const { activatePage, pageCount, readPages } = usePage();
  const { activateButtonPad, buttonPadCount, readButtonPads } = useButton();
  const { activateAction, actionCount, getActions } = useActions();

  const handleOnClick = (func: (_id: string) => void, _id: string): void => {
    handleSetActiveBreadCrumbMenu(null);
    func(_id);
  };

  if (dropDownType === BreadCrumbMenuTypes.Profile && profileCount() > 1) {
    return (
      <Styled.BreadCrumbMenu>
        {_map(readProfiles(), (item: IntProfile) => (
          <Styled.BreadCrumbMenuItem
            active={item._id === appState.active.profileId}
            key={item._id}
            onClick={() => handleOnClick(activateProfile, item._id)}
          >
            {item.profileName}
          </Styled.BreadCrumbMenuItem>
        ))}
      </Styled.BreadCrumbMenu>
    );
  }

  if (dropDownType === BreadCrumbMenuTypes.Page && pageCount() > 1) {
    return (
      <Styled.BreadCrumbMenu>
        {_map(readPages(), (item: IntPages) => (
          <Styled.BreadCrumbMenuItem
            active={item._id === appState.active.pageId}
            key={item._id}
            onClick={() => handleOnClick(activatePage, item._id)}
          >
            page: {item.number}
          </Styled.BreadCrumbMenuItem>
        ))}
      </Styled.BreadCrumbMenu>
    );
  }

  if (dropDownType === BreadCrumbMenuTypes.ButtonPad && buttonPadCount() > 1) {
    return (
      <Styled.BreadCrumbMenu>
        {_map(readButtonPads(), (item: IntButtonPads) => (
          <Styled.BreadCrumbMenuItem
            active={item._id === appState.active.buttonPadId}
            key={item._id}
            onClick={() => handleOnClick(activateButtonPad, item._id)}
          >
            button pad: {item.buttonPadNum}
          </Styled.BreadCrumbMenuItem>
        ))}
      </Styled.BreadCrumbMenu>
    );
  }

  if (dropDownType === BreadCrumbMenuTypes.Action && actionCount() > 1) {
    return (
      <Styled.BreadCrumbMenu>
        {_map(getActions(), (item: IntActions) => (
          <Styled.BreadCrumbMenuItem
            active={item._id === appState.active.actionId}
            key={item._id}
            onClick={() => handleOnClick(activateAction, item._id)}
          >
            {item.order} | {item.action}
          </Styled.BreadCrumbMenuItem>
        ))}
      </Styled.BreadCrumbMenu>
    );
  }

  return null;
};

export default BreadCrumbMenu;
