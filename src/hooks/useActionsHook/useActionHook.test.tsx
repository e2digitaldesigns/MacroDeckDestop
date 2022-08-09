import "@testing-library/jest-dom";
import useAction from "./useActionsHook";
import initGlobalState from "../../__mock_data__/globalState.json";
import initAppState from "../../__mock_data__/appState.json";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _size from "lodash/size";

import { IntAppData, IntGlobalData, IntActions } from "../../types";

const mockState: IntGlobalData = {
  state: _cloneDeep(initGlobalState),
  setState: jest.fn(state => state)
};

const mockAppState: IntAppData = {
  appState: _cloneDeep(initAppState),
  setAppState: jest.fn(appState => appState)
};

const mockAction = {
  profileId: "",
  pageId: "",
  buttonPadId: "",
  _id: "new-action-id",
  order: 0,
  action: "md",
  subAction: "",
  seconds: 0,
  url: "",
  text: "",
  scene: "",
  layer: "",
  path: "",
  page: "",
  profile: ""
};

const mockHooks = {
  useAppData: mockAppState,
  useGlobalData: mockState,
  pageObj: jest.fn(),
  page: { profileId: "", _id: "page-id-002", order: 0 },
  action: {
    ...mockAction
  }
};

jest.mock("./../../hooks", () => ({
  useAppData: () => mockHooks.useAppData,
  useGlobalData: () => mockHooks.useGlobalData,
  useObj: () => ({
    actionObj: () => mockHooks.action,
    pageObj: () => mockHooks.page
  })
}));

beforeEach(() => {
  mockState.state = _cloneDeep(initGlobalState);
  mockAppState.appState = _cloneDeep(initAppState);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Use Actions Hook", () => {
  const {
    activateAction,
    getActions,
    getAction,
    createAction,
    deleteAction,
    updateAction
  } = useAction();

  it("Should activate action", () => {
    const actionId = mockState.state.actions[0]._id;
    activateAction(actionId);
    const newAppState = { ...mockAppState.appState };
    newAppState.active.actionId = actionId;
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should get actions", () => {
    const buttonPadId = mockState.state.buttonPads[0]._id;
    mockAppState.appState.active.buttonPadId = buttonPadId;

    const filtered = _filter(
      mockState.state.actions,
      f => f.buttonPadId === buttonPadId
    );

    const actions = getActions();
    expect(actions.length).toBe(_size(filtered));
    expect(actions).toEqual(filtered);
  });

  it("Should get an action", () => {
    const action = mockState.state.actions[0];
    const theAction = getAction(action._id);
    expect(typeof theAction).toBe("object");
    expect(theAction).toEqual(action);
  });

  it("Should create an action", () => {
    const buttonPad = mockState.state.buttonPads[0];

    mockAppState.appState.active.profileId = buttonPad.profileId;
    mockAppState.appState.active.pageId = buttonPad.pageId;
    mockAppState.appState.active.buttonPadId = buttonPad._id;
    createAction();

    const newGlobalState = _cloneDeep(mockState.state);
    const newAppState = _cloneDeep(mockAppState.appState);
    const parseAction = mockAction;

    parseAction.profileId = buttonPad.profileId;
    parseAction.pageId = buttonPad.pageId;
    parseAction.buttonPadId = buttonPad._id;

    newGlobalState.actions.push(parseAction);
    newAppState.active.actionId = mockAction._id;

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should NOT create an action", () => {
    createAction();
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should delete action", () => {
    const _id = mockState.state.actions[0]._id;
    deleteAction(_id);

    const newState = { ...mockState.state };
    newState.actions = _filter(
      newState.actions,
      (f: IntActions) => f._id !== _id
    );

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(newState);
  });

  it("Should delete action and set active to blank", () => {
    const _id = mockState.state.actions[0]._id;
    mockAppState.appState.active.actionId = _id;
    deleteAction(_id);

    const newState = { ...mockState.state };
    newState.actions = _filter(
      newState.actions,
      (f: IntActions) => f._id !== _id
    );

    const newAppState = _cloneDeep(mockAppState.appState);
    newAppState.active.actionId = "";

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(newState);

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalled();
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should update action", () => {
    const newGlobalState = _cloneDeep(mockState.state);
    const newAppState = _cloneDeep(mockAppState.appState);

    newAppState.active.actionId = mockState.state.actions[0]._id;
    const newAction = { ...newGlobalState.actions[0], text: "new action" };
    updateAction(newAction);

    const newState = { ...mockState.state };
    newState.actions[0] = newAction;

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(newState);
  });

  it("Should NOT update action", () => {
    updateAction(mockAction);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });
});
