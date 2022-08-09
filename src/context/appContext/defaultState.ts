import { IntAppContextInterface } from "../../types";

export const appDefaultState: IntAppContextInterface = {
  iconSelector: {
    isVisible: false,
    icon: ""
  },
  active: {
    profileId: "",
    pageId: "",
    buttonPadId: "",
    actionId: ""
  }
};
