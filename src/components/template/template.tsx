import React from "react";
import { TemplateFooter } from "./footer/footer";
import { TemplateHeader } from "./header/header";
import { TemplateMainContent } from "./mainContent/mainContent";

export interface IAppTemplateComponents {
  Footer: React.ElementType;
  Header: React.ElementType;
  MainContent: React.ElementType;
}

export const AppTemplate: React.FC & IAppTemplateComponents = () => <div />;

AppTemplate.Footer = TemplateFooter;
AppTemplate.Header = TemplateHeader;
AppTemplate.MainContent = TemplateMainContent;
