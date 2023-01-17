import timestamp from "time-stamp";
import { idGenerator } from "../../utils";
import SETTINGS from "../../settings/system.json";

import {
  IntActions,
  IntButtonPads,
  IntPages,
  IntProfile
} from "./../../types/globalContextType";

type TActionObj = (_id?: string) => IntActions;
type TButtonPadObj = (_id?: string) => IntButtonPads;
type TProfileObj = (_id?: string) => IntProfile;
type TPageObj = (_id?: string) => IntPages;

export interface IntUseObjHooks {
  actionObj: TActionObj;
  buttonPadObj: TButtonPadObj;
  profileObj: TProfileObj;
  pageObj: TPageObj;
}

const useObjHooks = (): IntUseObjHooks => {
  const actionObj: TActionObj = _id => {
    return {
      profileId: "",
      pageId: "",
      buttonPadId: "",
      _id: _id || idGenerator(),
      order: 0,
      action: SETTINGS.DEFAULT_STATE.ACTIONS.action,
      subAction: SETTINGS.DEFAULT_STATE.ACTIONS.subAction,
      seconds: 0,
      url: "",
      text: "",
      scene: "",
      layer: "",
      path: "",
      page: "",
      profile: "",
      volume: 100
    };
  };

  const buttonPadObj: TButtonPadObj = (_id): IntButtonPads => {
    return {
      profileId: "",
      pageId: "string",
      _id: _id || idGenerator(),
      buttonPadNum: 0,
      text: SETTINGS.DEFAULT_STATE.BUTTON_PADS.text,
      textColor: SETTINGS.DEFAULT_STATE.BUTTON_PADS.textColor,
      icon: SETTINGS.DEFAULT_STATE.BUTTON_PADS.icon,
      iconColor: SETTINGS.DEFAULT_STATE.BUTTON_PADS.iconColor,
      image: "",
      bgColor: SETTINGS.DEFAULT_STATE.BUTTON_PADS.bgColor
    };
  };

  const pageObj: TPageObj = _id => {
    return {
      profileId: "",
      _id: _id || idGenerator(),
      order: Number(timestamp("YYYYMMDDmmssms"))
    };
  };

  const profileObj: TProfileObj = _id => {
    return {
      _id: _id || idGenerator(),
      profileName: "New Profile",
      buttonPads: 12
    };
  };

  return { actionObj, buttonPadObj, profileObj, pageObj };
};

export default useObjHooks;
