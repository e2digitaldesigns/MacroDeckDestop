import React from "react";
import * as Styled from "./breadCrumb.style";
import { CaretDownFill } from "react-bootstrap-icons";
import BreadCrumbMenu from "./breadCrumbMenu";
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

  const widthMap: { [key: string]: number } = {
    profile: 4.375,
    page: 3.4375,
    buttonPad: 3.4375,
    action: 7.5
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
