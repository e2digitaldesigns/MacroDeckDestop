import { IntGlobalContextInterface } from "../../types";

export const defaultState: IntGlobalContextInterface = {
  userInformation: { _id: "", name: "" },
  templateInformation: { sideBarState: "" },
  settings: {
    ipAddress: "",
    port: "",
    features: {
      obs: {
        status: false,
        ipAddress: "",
        port: "",
        password: ""
      },
      twitch: {
        status: false,
        channel: "icon33"
      }
    }
  },
  active: {
    profileId: "",
    pageId: "",
    buttonPadId: "",
    actionId: ""
  },
  profiles: [],
  pages: [],
  buttonPads: [],
  actions: [],
  styles: []
};
