import React from "react";
import * as Styled from "./breadCrumb.style";
import { CaretDownFill } from "react-bootstrap-icons";
import BreadCrumbMenu from "./breadCrumbMenu";
import { useAppData } from "../../../../hooks";
import { BreadCrumbMenuTypes } from "../../../../types";

export interface IntBreadCrumb {
  activeBreadCrumbMenu: BreadCrumbMenuTypes | null;
  dropDownType: BreadCrumbMenuTypes;
  label: string;
  handleSetActiveBreadCrumbMenu: (
    activeMenu: BreadCrumbMenuTypes | null
  ) => void;
  title: string;
}
const BreadCrumb: React.FC<IntBreadCrumb> = ({
  activeBreadCrumbMenu,
  dropDownType,
  label,
  handleSetActiveBreadCrumbMenu,
  title
}) => {
  const handleBreadCrumbMenu = (): void => {
    handleSetActiveBreadCrumbMenu(
      activeBreadCrumbMenu === dropDownType ? null : dropDownType
    );
  };

  const widthMap = {
    profile: 70,
    page: 55,
    buttonPad: 55,
    action: 60
  };

  return (
    <>
      <Styled.BreadCrumbWrapper>
        <Styled.BreadCrumb onClick={handleBreadCrumbMenu}>
          <Styled.Label>{label}</Styled.Label>
          <Styled.TitleDiv>
            <Styled.Title width={widthMap[dropDownType]}>{title}</Styled.Title>
            <Styled.CaretHolder>
              <CaretDownFill />
            </Styled.CaretHolder>
          </Styled.TitleDiv>
        </Styled.BreadCrumb>

        {activeBreadCrumbMenu === dropDownType && (
          <BreadCrumbMenu
            dropDownType={dropDownType}
            handleSetActiveBreadCrumbMenu={handleSetActiveBreadCrumbMenu}
          />
        )}
      </Styled.BreadCrumbWrapper>
    </>
  );
};

export default BreadCrumb;
