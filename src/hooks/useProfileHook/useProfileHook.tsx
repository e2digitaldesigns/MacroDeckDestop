import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _map from "lodash/map";
import _sortBy from "lodash/sortBy";
import _size from "lodash/size";

import { useAppData, useGlobalData } from "..";
import {
  IntProfile,
  IntButtonPads,
  IntActions,
  IntAppData,
  IntGlobalData,
  IntPages,
  IntAppContextInterface,
  IntGlobalContextInterface
} from "../../types";

import { useObj } from "../../hooks";
import { subActionMap } from "./../../types/subActionTypes";

export interface IntEditState {
  editing?: boolean;
  profileName: string;
  buttonPads: number;
}

type TActivateProfile = (_id: string) => void;

export interface IntUseProfileHook {
  activateProfile: TActivateProfile;
  createProfile: () => void;
  readProfiles: () => IntProfile[];
  readProfile: () => IntProfile | undefined;
  updateProfile: (_id: string, profileState: IntEditState) => void;
  deleteProfile: (_id: string) => void;
  profileCount: () => number;
}

const useProfileHook = (): IntUseProfileHook => {
  const globalData: IntGlobalData = useGlobalData();
  const appData: IntAppData = useAppData();
  const { actionObj, buttonPadObj, pageObj, profileObj } = useObj();

  const activateProfile: TActivateProfile = _id => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const pageId =
      _sortBy(
        _filter(state?.pages, (f: IntPages) => f.profileId === _id),
        "order"
      )?.[0]?._id || "";

    const buttonPadId =
      _sortBy(
        _filter(state?.buttonPads, (f: IntButtonPads) => f.pageId === pageId),
        "buttonPadNum"
      )?.[0]?._id || "";

    const actionId =
      _filter(
        state?.actions,
        (f: IntActions) => f.buttonPadId === buttonPadId
      )?.[0]?._id || "";

    appState.active.profileId = _id;
    appState.active.pageId = pageId;
    appState.active.buttonPadId = buttonPadId;
    appState.active.actionId = actionId;
    appData.setAppState(appState);
  };

  const createProfile = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const profile = profileObj();
    const page = pageObj();
    page.profileId = profile._id;

    const actionType = "md";
    const buttonArr = ["mdHome", "mdProfileSelector", "mdReset", "mdSettings"];

    const btnArrayIds: string[] = [];
    const actionArrayIds: string[] = [];

    _map(buttonArr, (thisAction: string, index: number) => {
      const buttonPad = buttonPadObj();
      buttonPad.profileId = profile._id;
      buttonPad.pageId = page._id;
      buttonPad.text = thisAction.split(actionType)[1];
      buttonPad.buttonPadNum = index + 1;
      state.buttonPads.push(buttonPad);
      btnArrayIds.push(buttonPad._id);

      const action = actionObj();
      action.action = actionType;
      action.subAction = thisAction;
      action.profileId = profile._id;
      action.pageId = page._id;
      action.buttonPadId = btnArrayIds[index];
      state.actions.push(action);
      actionArrayIds.push(action._id);
    });

    state.profiles.push(profile);
    state.pages.push(page);

    globalData.setState(state);

    appState.active.profileId = profile._id;
    appState.active.pageId = page._id;
    appState.active.buttonPadId = btnArrayIds[0];
    appState.active.actionId = actionArrayIds[0];
    appData.setAppState(appState);
  };

  const createProfileXXX = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const profile = profileObj();
    const page = pageObj();
    page.profileId = profile._id;

    const buttonPad = buttonPadObj();
    buttonPad.profileId = profile._id;
    buttonPad.pageId = page._id;
    buttonPad.buttonPadNum = 1;

    const action = actionObj();
    action.profileId = profile._id;
    action.pageId = page._id;
    action.buttonPadId = buttonPad._id;

    state.profiles.push(profile);
    state.pages.push(page);
    state.buttonPads.push(buttonPad);
    state.actions.push(action);
    globalData.setState(state);

    appState.active.profileId = profile._id;
    appState.active.pageId = page._id;
    appState.active.buttonPadId = buttonPad._id;
    appState.active.actionId = action._id;
    appData.setAppState(appState);
  };

  const readProfiles = (): IntProfile[] => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const profiles = state.profiles;
    return profiles;
  };

  const readProfile = (): IntProfile | undefined => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const profile = _find(
      state.profiles,
      (f: IntProfile) => f._id === appState.active.profileId
    );

    return profile;
  };

  const updateProfile = (_id: string, profileState: IntEditState): void => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const profileIndex = _findIndex(
      state.profiles,
      (f: IntProfile) => f._id === _id
    );

    state.profiles[profileIndex].profileName = profileState.profileName;
    state.profiles[profileIndex].buttonPads = Number(profileState.buttonPads);
    globalData.setState(state);
  };

  const deleteProfile = (_id: string): void => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);

    state.profiles = _filter(state.profiles, (f: IntProfile) => f._id !== _id);
    if (state.profiles.length === 0) return;

    state.pages = _filter(state.pages, (f: IntPages) => f.profileId !== _id);

    state.buttonPads = _filter(
      state.buttonPads,
      (f: IntButtonPads) => f.profileId !== _id
    );

    state.actions = _filter(
      state.actions,
      (f: IntActions) => f.profileId !== _id
    );

    globalData.setState(state);

    const profileToSet = state.profiles?.[0]?._id;

    if (appState.active.profileId === _id) {
      if (!profileToSet) {
        clearAllActivations();
      } else if (profileToSet) {
        activateProfile(profileToSet);
      }
    }
  };

  const clearAllActivations = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    appState.active.profileId = "";
    appState.active.pageId = "";
    appState.active.buttonPadId = "";
    appState.active.actionId = "";
    appData.setAppState(appState);
  };

  const profileCount: IntUseProfileHook["profileCount"] = () => {
    return _size(readProfiles());
  };

  return {
    activateProfile,
    createProfile,
    readProfiles,
    readProfile,
    updateProfile,
    deleteProfile,
    profileCount
  };
};

export default useProfileHook;
