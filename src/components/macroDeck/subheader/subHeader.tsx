import React from "react";
import * as Styled from "./subHeader.style";
import { ChevronRight } from "react-bootstrap-icons";
import BreadCrumb from "./breadCrumb/breadCrumb";
import {
  useActions,
  useAppData,
  useButton,
  usePage,
  useProfile
} from "../../../hooks";
import { BreadCrumbMenuTypes, allActionMap } from "../../../types";

interface IntBreadWrapper {
  activeBreadCrumbMenu: BreadCrumbMenuTypes | null;
  dropDownType: BreadCrumbMenuTypes;
  label: string;
  showChev?: boolean;
  handleSetActiveBreadCrumbMenu: (
    activeMenu: BreadCrumbMenuTypes | null
  ) => void;
  title: string;
}

const BreadWrapper: React.FC<IntBreadWrapper> = ({
  activeBreadCrumbMenu,
  dropDownType,
  label,
  showChev = true,
  handleSetActiveBreadCrumbMenu,
  title
}) => {
  return (
    <>
      {showChev && (
        <Styled.BreadCrumbHolder>
          <ChevronRight />
        </Styled.BreadCrumbHolder>
      )}
      <BreadCrumb
        activeBreadCrumbMenu={activeBreadCrumbMenu}
        dropDownType={dropDownType}
        label={label}
        title={title}
        handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
      />
    </>
  );
};

export const MacroDeckSubHeader: React.FC = () => {
  const [activeBreadCrumbMenu, setActiveBreadCrumbMenu] =
    React.useState<BreadCrumbMenuTypes | null>(BreadCrumbMenuTypes.Page);
  const { readPage, pageCount } = usePage();
  const { readProfile } = useProfile();
  const { appState } = useAppData();
  const { getActiveButton } = useButton();
  const { getActiveAction } = useActions();

  const profile = readProfile();
  const page = readPage();
  const pagesCount = pageCount();
  const activeButton = getActiveButton();
  const activeAction = getActiveAction();

  const profileTitle = profile?.profileName || "Select a Profile";
  const pageNumber = page?.number || "0";
  const pageTitle = `${pageNumber} / ${pagesCount}`;

  const buttonPadCount = profile?.buttonPads || 0;
  const buttonPadNum = activeButton?.buttonPadNum || 0;
  const buttonPadTitle = `${buttonPadNum} / ${buttonPadCount}`;

  let actionTitle = activeAction?.subAction || activeAction?.action || null;
  actionTitle = actionTitle ? allActionMap[actionTitle] : "No Action";

  React.useEffect(() => {
    setActiveBreadCrumbMenu(activeBreadCrumbMenu => null);
  }, [appState.active]);

  const handleSetActiveBreadCrumbMenu = (
    activeMenu: BreadCrumbMenuTypes | null
  ) => {
    setActiveBreadCrumbMenu(activeMenu);
  };

  return (
    <Styled.SubHeader>
      <BreadWrapper
        activeBreadCrumbMenu={activeBreadCrumbMenu}
        dropDownType={BreadCrumbMenuTypes.Profile}
        showChev={false}
        label="profile"
        handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        title={profileTitle}
      />

      <BreadWrapper
        activeBreadCrumbMenu={activeBreadCrumbMenu}
        dropDownType={BreadCrumbMenuTypes.Page}
        label="page"
        handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        title={pageTitle}
      />

      <BreadWrapper
        activeBreadCrumbMenu={activeBreadCrumbMenu}
        dropDownType={BreadCrumbMenuTypes.ButtonPad}
        label="button pad"
        handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        title={buttonPadTitle}
      />

      <BreadWrapper
        activeBreadCrumbMenu={activeBreadCrumbMenu}
        dropDownType={BreadCrumbMenuTypes.Action}
        label="action"
        handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
        title={actionTitle}
      />
    </Styled.SubHeader>
  );
};
