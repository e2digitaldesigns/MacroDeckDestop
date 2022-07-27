import React from "react";
import * as Styled from "./breadCrumb.style";
import { CaretDownFill } from "react-bootstrap-icons";
import BreadCrumbMenu from "./breadCrumbMenu";

export interface IntBreadCrumb {
  label: string;
  title: string;
}
const BreadCrumb: React.FC<IntBreadCrumb> = ({ label, title }) => {
  return (
    <>
      <Styled.BreadCrumbWrapper>
        <Styled.BreadCrumb>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Title>
            <span>{title}</span>
            <Styled.CaretHolder>
              <CaretDownFill />
            </Styled.CaretHolder>
          </Styled.Title>
        </Styled.BreadCrumb>
        {/* <BreadCrumbMenu type="buttonPads" /> */}
      </Styled.BreadCrumbWrapper>
    </>
  );
};

export default BreadCrumb;
