import { IntGlobalContextInterface } from "../../types";

export const defaultState: IntGlobalContextInterface = {
  userInformation: { _id: "", name: "" },
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
  profiles: [],
  pages: [],
  buttonPads: [],
  actions: [],
  styles: []
};
