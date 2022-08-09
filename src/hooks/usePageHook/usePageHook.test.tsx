import React from "react";
import "@testing-library/jest-dom";
import usePage from "./usePageHook";
import initGlobalState from "../../__mock_data__/globalState.json";
import initAppState from "../../__mock_data__/appState.json";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _size from "lodash/size";

import {
  IntActions,
  IntAppData,
  IntButtonPads,
  IntGlobalContextInterface,
  IntGlobalData,
  IntPages
} from "../../types";

const mockState: IntGlobalData = {
  state: _cloneDeep(initGlobalState),
  setState: jest.fn(state => state)
};

const mockAppState: IntAppData = {
  appState: _cloneDeep(initAppState),
  setAppState: jest.fn(appState => appState)
};

const mockHooks = {
  useAppData: mockAppState,
  useGlobalData: mockState,
  pageObj: jest.fn(),
  profileObj: jest.fn(),
  buttonPadObj: jest.fn(),
  actionObj: jest.fn()
};

jest.mock("./../../hooks", () => ({
  useAppData: () => mockHooks.useAppData,
  useGlobalData: () => mockHooks.useGlobalData,
  useObj: () => ({
    pageObj: () => mockHooks.pageObj,
    buttonPadObj: () => mockHooks.buttonPadObj,
    actionObj: () => mockHooks.actionObj
  })
}));

beforeEach(() => {
  mockState.state = _cloneDeep(initGlobalState);
  mockAppState.appState = _cloneDeep(initAppState);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Use Page Hook", () => {
  const { activatePage, createPage, deletePage, readPage, readPages } =
    usePage();

  it("Should activate a page", () => {
    activatePage(mockState.state.pages[0]._id);
    const newState = { ...mockAppState.appState };

    newState.active.pageId = mockState.state.pages[0]._id;
    newState.active.buttonPadId = mockState.state.buttonPads[1]._id;
    newState.active.actionId = mockState.state.actions[1]._id;

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newState);
  });

  it("Should create a page", () => {
    createPage();
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalled();
  });

  it("Should read all pages", () => {
    const profileId = mockState.state.profiles[0]._id;
    mockAppState.appState.active.profileId = profileId;
    const filtered = _filter(
      mockState.state.pages,
      f => f.profileId === profileId
    );

    filtered[0].number = 1;
    filtered[1].number = 2;

    const pages = readPages();
    expect(pages.length).toBe(_size(filtered));
    expect(pages).toStrictEqual(filtered);
  });

  it("Should read a page", () => {
    const pager = { ...mockState.state.pages[0], number: 1 };
    mockAppState.appState.active.pageId = pager._id;
    const page = readPage(pager._id);
    expect(typeof page).toBe("object");
    expect(typeof page._id).toBe("string");
    expect(page).toStrictEqual(pager);
  });

  it("Should read a page NOT Found", () => {
    mockAppState.appState.active.pageId = "not-found";
    const page = readPage("not-found");
    expect(typeof page).toBe("undefined");
  });

  it("Should delete a page and return next page", () => {
    const { _id: pageId, profileId } = mockState.state.pages[0];
    mockAppState.appState.active.profileId = profileId;
    mockAppState.appState.active.pageId = pageId;

    const newAppState = _cloneDeep(mockAppState.appState);
    const newGlobalState: IntGlobalContextInterface = { ...mockState.state };

    deletePage();

    newGlobalState.pages = _filter(
      newGlobalState.pages,
      (f: IntPages) => f.profileId === profileId && f._id !== pageId
    );

    newGlobalState.buttonPads = _filter(
      newGlobalState.buttonPads,
      (f: IntButtonPads) => f.pageId !== pageId
    );

    newGlobalState.actions = _filter(
      newGlobalState.actions,
      (f: IntActions) => f.pageId !== pageId
    );

    newAppState.active.pageId = newGlobalState.pages[0]._id;
    newAppState.active.buttonPadId = "";
    newAppState.active.actionId = "";

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalled();
    //

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should NOT delete last page", () => {
    const page = mockState.state.pages[0];
    mockAppState.appState.active.pageId = page._id;
    mockAppState.appState.active.profileId = page.profileId;
    mockState.state.pages = [page];
    deletePage();
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should NOT delete a page", () => {
    mockState.state.pages = [];
    deletePage();
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });
});
