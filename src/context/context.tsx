import React from "react";
import { TemplateContextProvider } from "./templateContext";
import { ThemeContextProvider } from "./themeContext";

export interface IThemeComponents {
  TemplateProvider: React.ElementType;
  ThemeProvider: React.ElementType;
}

export const ApplicationContext: React.FC & IThemeComponents = () => <div />;

ApplicationContext.TemplateProvider = TemplateContextProvider;
ApplicationContext.ThemeProvider = ThemeContextProvider;
