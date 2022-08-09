import React from "react";
import "@testing-library/jest-dom";
import useProfile from "./useProfileHook";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";

import initAppState from "../../__mock_data__/appState.json";
import initGlobalState from "../../__mock_data__/globalState.json";
import { IntAppData, IntGlobalData } from "../../types";

const mockAppState: IntAppData = {
  appState: _cloneDeep(initAppState),
  setAppState: jest.fn(appState => appState)
};

const mockGlobalState: IntGlobalData = {
  state: _cloneDeep(initGlobalState),
  setState: jest.fn(state => state)
};

const profile = mockGlobalState.state.profiles[0];

const mockHooks = {
  useAppData: mockAppState,
  useGlobalData: mockGlobalState,
  pageObj: jest.fn(),
  profileObj: jest.fn(),
  page: { profileId: "", _id: profile._id, order: 0 },
  profile: {
    _id: profile._id,
    profileName: profile.profileName,
    buttonPads: profile.buttonPads
  },

  mockFn: jest.fn()
};

jest.mock("./../../hooks", () => ({
  useAppData: () => mockHooks.useAppData,
  useGlobalData: () => mockHooks.useGlobalData,
  useObj: () => ({
    actionObj: () => ({}),
    buttonPadObj: () => ({}),
    pageObj: () => mockHooks.page,
    profileObj: () => mockHooks.profile
  })
}));

beforeEach(() => {
  mockGlobalState.state = _cloneDeep(initGlobalState);
  mockAppState.appState = _cloneDeep(initAppState);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Use Profile Hook", () => {
  const {
    activateProfile,
    createProfile,
    readProfiles,
    readProfile,
    updateProfile,
    deleteProfile,
    profileCount
  } = useProfile();

  it("Should activate a profile", () => {
    const profile = mockGlobalState.state.profiles[0];
    activateProfile(profile._id);
    const newAppState = _cloneDeep(mockAppState.appState);

    newAppState.active.profileId = profile._id;
    newAppState.active.pageId = mockGlobalState.state.pages[0]._id;
    newAppState.active.buttonPadId = "0b188018-092e-4d28-add1-10da87482b39";
    newAppState.active.actionId = "8093c0d6-bc3e-4c9a-bc0f-51834b32aae0";

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should create a profile", () => {
    createProfile();
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalled();
  });

  it("Should read all profiles", () => {
    const profiles = readProfiles();
    expect(profiles.length).toBe(mockGlobalState.state.profiles.length);
    expect(profiles).toEqual(mockGlobalState.state.profiles);
  });

  it("Should read a profile", () => {
    mockAppState.appState.active.profileId =
      mockGlobalState.state.profiles[0]._id;
    const profile = readProfile();
    expect(typeof profile).toBe("object");
    expect(typeof profile?._id).toBe("string");
    expect(profile).toEqual(mockGlobalState.state.profiles[0]);
  });

  it("Should update a profile", () => {
    const profile = mockGlobalState.state.profiles[0];
    const state = {
      editing: true,
      profileName: "Cool Name Dude",
      buttonPads: 12
    };

    updateProfile(profile._id, state);
    const newState = { ...mockGlobalState.state };
    newState.profiles[0].profileName = state.profileName;
    newState.profiles[0].buttonPads = state.buttonPads;
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(newState);
  });

  it("Should delete a profile", () => {
    const profileId = mockGlobalState.state.profiles[1]._id;
    const newGlobalState = _cloneDeep(mockGlobalState.state);
    deleteProfile(profileId);

    newGlobalState.profiles = newGlobalState.profiles.filter(
      (obj: any) => obj._id !== profileId
    );

    newGlobalState.pages = newGlobalState.pages.filter(
      (obj: any) => obj.profileId !== profileId
    );

    newGlobalState.buttonPads = newGlobalState.buttonPads.filter(
      (obj: any) => obj.profileId !== profileId
    );

    newGlobalState.actions = newGlobalState.actions.filter(
      (obj: any) => obj.profileId !== profileId
    );

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );
  });

  it("Should not delete a profile", () => {
    const profile = mockGlobalState.state.profiles[1];
    mockGlobalState.state.profiles = [profile];
    deleteProfile(profile._id);
    expect(mockHooks.useGlobalData.setState).not.toHaveBeenCalled();
  });

  it("Should delete a profile and reset active", () => {
    const profileId = mockGlobalState.state.profiles[1]._id;
    mockAppState.appState.active.profileId = profileId;
    const newGlobalState = _cloneDeep(mockGlobalState.state);
    deleteProfile(profileId);

    newGlobalState.profiles = newGlobalState.profiles.filter(
      (obj: any) => obj._id !== profileId
    );

    newGlobalState.pages = newGlobalState.pages.filter(
      (obj: any) => obj.profileId !== profileId
    );

    newGlobalState.buttonPads = newGlobalState.buttonPads.filter(
      (obj: any) => obj.profileId !== profileId
    );

    newGlobalState.actions = newGlobalState.actions.filter(
      (obj: any) => obj.profileId !== profileId
    );

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
  });

  it("Should return profile count", () => {
    const count = profileCount();
    expect(count).toBe(mockGlobalState.state.profiles.length);
  });
});
