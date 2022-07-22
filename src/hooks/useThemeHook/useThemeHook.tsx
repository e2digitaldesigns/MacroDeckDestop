import React from "react";
import { ThemeContext } from "../../context";
import { IntThemeContextState } from "../../types";

const useThemeData = () => {
  const themeData: IntThemeContextState = React.useContext(ThemeContext);
  return themeData;
};

export default useThemeData;
