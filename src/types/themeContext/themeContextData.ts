import { DefaultTheme } from "styled-components";

export type IntThemeContext = DefaultTheme;

export interface IntThemeContextState {
  themeState: IntThemeContext;
  setThemeState: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export type IntThemeData = IntThemeContextState;
