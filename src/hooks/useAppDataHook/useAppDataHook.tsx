import React from "react";
import { AppContext } from "../../context";
import { IntAppData } from "./../../types";

const useAppData = () => {
  const appData: IntAppData = React.useContext(AppContext);
  return appData;
};

export default useAppData;
