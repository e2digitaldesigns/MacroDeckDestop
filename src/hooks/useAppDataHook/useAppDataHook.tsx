import React from "react";
import { AppContext } from "./appContext";
import { IntAppData } from "./../../types";

const useAppData = () => {
  const appData: IntAppData = React.useContext(AppContext);
  return appData;
};

export default useAppData;
