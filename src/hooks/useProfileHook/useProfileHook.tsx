import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _sortBy from "lodash/sortBy";

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
  readProfile: () => IntProfile;
  updateProfile: (_id: string, profileState: IntEditState) => void;
  deleteProfile: (_id: string) => void;
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

  const readProfiles = (): IntProfile[] | any => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const profiles = state.profiles;
    return profiles;
  };

  const readProfile = (): IntProfile | any => {
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

  return {
    activateProfile,
    createProfile,
    readProfiles,
    readProfile,
    updateProfile,
    deleteProfile
  };
};

export default useProfileHook;
