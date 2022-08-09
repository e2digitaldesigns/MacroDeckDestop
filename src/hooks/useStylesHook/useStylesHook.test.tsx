import React from "react";
import "@testing-library/jest-dom";
import useStyles from "./useStylesHook";
import initState from "./../__mocks__/mockState.json";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _size from "lodash/size";

const mockState: any = {
  ..._cloneDeep(initState),
  setState: jest.fn(state => state)
};

const mockHooks = {
  useGlobalData: mockState,
  pageObj: jest.fn(),
  profileObj: jest.fn(),
  page: { profileId: "", _id: "page-id-002", order: 0 },
  profile: {
    _id: "profile-id-004",
    profileName: "New Profile",
    buttonPads: 12
  },

  mockFn: jest.fn()
};

jest.mock("./../../hooks", () => ({
  useGlobalData: () => mockHooks.useGlobalData,
  useObj: () => ({
    profileObj: () => mockHooks.profile,
    pageObj: () => mockHooks.page
  }),
  useStyles: () => ({})
}));

beforeEach(() => {
  mockState.state = _cloneDeep(initState.state);
});

afterEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Use Profile Hook", () => {
  const { createStyle, readStyles, deleteStyle, styleCount } = useStyles();

  it("Should create a style", () => {
    createStyle("1", mockState.state.pages[0]._id);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
  });

  it("Should NOT create a style", () => {
    createStyle("55", mockState.state.pages[0]._id);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should read styles", () => {
    const styles = readStyles();
    expect(_size(mockState.state.styles)).toEqual(_size(styles));
  });

  it("Should delete style", () => {
    const styleId = mockState.state.styles[0]._id;
    const newState = { ...mockState.state };
    deleteStyle(styleId);
    newState.styles = newState.styles.filter((obj: any) => obj._id !== styleId);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(newState);
  });

  it("Should return number of styles", () => {
    const count = styleCount();
    expect(count).toEqual(mockHooks.useGlobalData.state.styles.length);
  });
});
