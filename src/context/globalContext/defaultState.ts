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
      }
    }
  },
  profiles: [],
  pages: [],
  buttonPads: [],
  actions: [],
  styles: []
};
