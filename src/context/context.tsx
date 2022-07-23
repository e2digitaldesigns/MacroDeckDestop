import React from "react";
import { TemplateContext, TemplateContextProvider } from "./templateContext";
import { ThemeContextProvider } from "./themeContext";

export interface IThemeComponents {
  TemplateProvider: React.ElementType;
  ThemeProvider: React.ElementType;
}

export const AppContext: React.FC & IThemeComponents = () => <div />;

AppContext.TemplateProvider = TemplateContextProvider;
AppContext.ThemeProvider = ThemeContextProvider;
