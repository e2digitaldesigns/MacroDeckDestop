import React from "react";
import { TemplateFooter } from "./footer/footer";
import { TemplateHeader } from "./header/header";
import { TemplateMainContent } from "./mainContent/mainContent";
import { TemplateSidebarLeft } from "./sideBarLeft/sideBarLeft";
import { TemplateSubHeader } from "./subheader/subHeader";

export interface ITemplateComponents {
  Footer: React.ElementType;
  Header: React.ElementType;
  MainContent: React.ElementType;
  SidebarLeft: React.ElementType;
  SubHeader: React.ElementType;
}

export const Template: React.FC & ITemplateComponents = () => <div />;

Template.Footer = TemplateFooter;
Template.Header = TemplateHeader;
Template.MainContent = TemplateMainContent;
Template.SidebarLeft = TemplateSidebarLeft;
Template.SubHeader = TemplateSubHeader;
