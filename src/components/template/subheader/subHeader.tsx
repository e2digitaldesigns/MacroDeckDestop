import React from "react";
import * as Styled from "./subHeader.style";
import { ChevronRight } from "react-bootstrap-icons";
import BreadCrumb from "./breadCrumb/breadCrumb";

export const TemplateSubHeader: React.FC = () => {
  return (
    <Styled.SubHeader>
      <BreadCrumb label="repository" title="EJS Desktop" />
      <Styled.BreadCrumbHolder>
        <ChevronRight />
      </Styled.BreadCrumbHolder>

      <BreadCrumb label="page" title="2 / 5" />
      <Styled.BreadCrumbHolder>
        <ChevronRight />
      </Styled.BreadCrumbHolder>

      <BreadCrumb label="button pad" title="5 / 16" />
      <Styled.BreadCrumbHolder>
        <ChevronRight />
      </Styled.BreadCrumbHolder>

      <BreadCrumb label="action" title="Go to profile" />
    </Styled.SubHeader>
  );
};
