import React from "react";
import { Trash2Fill, PlusCircle, XCircle } from "react-bootstrap-icons";
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
import SubActionParser from "../../mainContent/forms/actionList/subActionParser/subActionParser";

interface ICloseButton {
  handleCloseBreadCrumbMenu: (activeMenu: BreadCrumbMenuTypes | null) => void;
}
const CloseButton: React.FC<ICloseButton> = ({ handleCloseBreadCrumbMenu }) => {
  return (
    <Styled.BreadCrumbMenuItemClose
      onClick={() => handleCloseBreadCrumbMenu(null)}
    >
      <XCircle />
      <div>Close</div>
    </Styled.BreadCrumbMenuItemClose>
  );
};
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
  const { activatePage, createPage, deletePage, pageCount, readPages } =
    usePage();
  const { activateButtonPad, buttonPadCount, readButtonPads } = useButton();
  const { activateAction, actionCount, getActions } = useActions();

  const handleCreateNewPage = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    createPage();
    handleSetActiveBreadCrumbMenu(null);
  };

  const handleDeletePage = (e: React.MouseEvent<SVGElement>, _id: string) => {
    e.stopPropagation();
    deletePage(_id);
    handleSetActiveBreadCrumbMenu(null);
  };

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

        <CloseButton
          handleCloseBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        />
      </Styled.BreadCrumbMenu>
    );
  }

  if (
    dropDownType === BreadCrumbMenuTypes.Page &&
    appState?.active?.profileId
  ) {
    return (
      <Styled.BreadCrumbMenu>
        <Styled.BreadCrumbMenuItemNewPage onClick={handleCreateNewPage}>
          <div>
            <PlusCircle />
          </div>

          <div>Create New Page</div>
        </Styled.BreadCrumbMenuItemNewPage>

        {_map(readPages(), (item: IntPages) => (
          <Styled.BreadCrumbMenuItemPage
            active={item._id === appState.active.pageId}
            key={item._id}
            onClick={() => handleOnClick(activatePage, item._id)}
          >
            <div>page: {item.number}</div>

            <div>
              {pageCount() > 1 && (
                <Trash2Fill
                  onClick={(e: React.MouseEvent<SVGElement>) =>
                    handleDeletePage(e, item._id)
                  }
                />
              )}
            </div>
          </Styled.BreadCrumbMenuItemPage>
        ))}

        <CloseButton
          handleCloseBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        />
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

        <CloseButton
          handleCloseBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        />
      </Styled.BreadCrumbMenu>
    );
  }

  if (dropDownType === BreadCrumbMenuTypes.Action && actionCount() > 1) {
    return (
      <Styled.BreadCrumbMenu>
        {_map(getActions(), (action: IntActions) => (
          <Styled.BreadCrumbMenuItem
            active={action._id === appState.active.actionId}
            key={action._id}
            onClick={() => handleOnClick(activateAction, action._id)}
          >
            <SubActionParser action={action} />
          </Styled.BreadCrumbMenuItem>
        ))}

        <CloseButton
          handleCloseBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        />
      </Styled.BreadCrumbMenu>
    );
  }

  return null;
};

export default BreadCrumbMenu;
