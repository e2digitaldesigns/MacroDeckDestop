import { IntAppContextInterface } from "../../types";

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
  breadCrumbMenus: ""
};
