import { createContext } from "react";
import { IntAppData, IntAppContextInterface } from "./../../types";

export const appDefaultState: IntAppContextInterface = {
  iconSelector: {
    isVisible: false,
    icon: ""
  },
  dropZones: {
    actionList: false,
    buttonPads: false,
    sideBarProfiles: false,
    sideBarStyles: false,
    styleHeader: false
  },
  active: {
    profileId: "",
    pageId: "",
    buttonPadId: "",
    actionId: ""
  },
  breadCrumbMenus: {
    profileId: false,
    pageId: false,
    buttonPadId: false,
    actionId: false
  }
};

export const AppContext = createContext<IntAppData>({
  appState: appDefaultState,
  setAppState: (): void => {}
});
