import "@testing-library/jest-dom";
import useButton from "./useButtonHook";
import initGlobalState from "../../__mock_data__/globalState.json";
import initAppState from "../../__mock_data__/appState.json";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _map from "lodash/map";
import * as utils from "../../utils";

import { IntGlobalData, IntAppData, IntActions } from "../../types";

const mockState: IntGlobalData = {
  state: _cloneDeep(initGlobalState),
  setState: jest.fn(state => state)
};

const mockAppState: IntAppData = {
  appState: _cloneDeep(initAppState),
  setAppState: jest.fn(appState => appState)
};

const mockAction: IntActions = {
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

const mockButton = {
  profileId: "",
  pageId: "string",
  _id: "new-button-id",
  buttonPadNum: 0,
  text: "New Button",
  textColor: "#dddddd",
  icon: "",
  iconColor: "defaultColor",
  image: "",
  bgColor: "defaultColor"
};

const mockHooks = {
  useAppData: mockAppState,
  useGlobalData: mockState,
  pageObj: jest.fn(),
  page: { profileId: "", _id: "page-id-002", order: 0 },
  action: {
    ...mockAction
  },
  button: { ...mockButton }
};

jest.mock("./../../hooks", () => ({
  useAppData: () => mockHooks.useAppData,
  useGlobalData: () => mockHooks.useGlobalData,
  useObj: () => ({
    actionObj: () => mockHooks.action,
    pageObj: () => mockHooks.page,
    buttonPadObj: () => mockHooks.button
  })
}));

const idGeneratorID = "idGenerator";

jest.mock("../../utils", () => ({
  idGenerator: () => idGeneratorID
}));

beforeEach(() => {
  mockState.state = _cloneDeep(initGlobalState);
  mockAppState.appState = _cloneDeep(initAppState);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Use Button Hook", () => {
  const {
    activateButtonPad,
    addStyleToButtonPad,
    createButtonPad,
    deleteButtonPad,
    getActiveButton,
    getActiveButtonIndex,
    overWriteButtonPad,
    pasteButtonPad,
    readButtonPad,
    readButtonPads,
    swapButtonPad,
    updateButtonPad,
    buttonPadCount
  } = useButton();

  it("Should activate button", () => {
    const buttonPadId = mockState.state.buttonPads[0]._id;
    activateButtonPad(buttonPadId);
    const newAppState = { ...mockAppState.appState };

    newAppState.active.buttonPadId = buttonPadId;
    newAppState.active.actionId = mockState.state.actions[0]._id;
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should activate button and set no actionId", () => {
    const buttonPadId = mockState.state.buttonPads[1]._id;
    mockState.state.actions = [];
    activateButtonPad(buttonPadId);
    const newAppState = { ...mockAppState.appState };

    newAppState.active.buttonPadId = buttonPadId;
    newAppState.active.actionId = "";
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should NOT activate button", () => {
    const buttonPadId = mockState.state.buttonPads[1]._id;
    mockAppState.appState.active.buttonPadId = buttonPadId;
    activateButtonPad(buttonPadId);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should NOT activate button", () => {
    const buttonPadId = mockState.state.buttonPads[1]._id;
    mockAppState.appState.active.buttonPadId = buttonPadId;
    activateButtonPad(buttonPadId);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should add style to button", () => {
    const buttonPad = mockState.state.buttonPads[2];
    const style = mockState.state.styles[0];
    const styleId = style._id,
      pageId = buttonPad.pageId,
      buttonPadNumber = buttonPad.buttonPadNum;

    mockAppState.appState.active.pageId = pageId;

    addStyleToButtonPad(styleId, pageId, buttonPadNumber);
    const newGlobalState = { ...mockState.state };
    newGlobalState.buttonPads[2].bgColor = style.bgColor;
    newGlobalState.buttonPads[2].icon = style.icon;

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );
  });

  it("Should NOT add style to button", () => {
    const buttonPad = mockState.state.buttonPads[2];
    const style = mockState.state.styles[0];
    const styleId = style._id,
      pageId = buttonPad.pageId,
      buttonPadNumber = buttonPad.buttonPadNum;

    mockAppState.appState.active.pageId = pageId;

    addStyleToButtonPad("badStyleID", pageId, buttonPadNumber);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);

    addStyleToButtonPad(styleId, pageId, 9999);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);

    addStyleToButtonPad(styleId, "pageId", buttonPadNumber);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should create a new button", () => {
    mockAppState.appState.active.profileId = "a";
    mockAppState.appState.active.pageId = "b";
    createButtonPad(6);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
  });

  it("Should delete button", () => {
    const buttonPadId = mockState.state.buttonPads[0]._id;
    deleteButtonPad(buttonPadId);

    const newGlobalState = _cloneDeep(mockState.state);
    newGlobalState.buttonPads = _filter(
      newGlobalState.buttonPads,
      f => f._id !== buttonPadId
    );
    newGlobalState.actions = _filter(
      newGlobalState.actions,
      f => f.buttonPadId !== buttonPadId
    );

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledTimes(0);
  });

  it("Should delete button and update active", () => {
    const buttonPadId = mockState.state.buttonPads[0]._id;
    mockAppState.appState.active.buttonPadId = buttonPadId;
    deleteButtonPad(buttonPadId);

    const newGlobalState = _cloneDeep(mockState.state);
    newGlobalState.buttonPads = _filter(
      newGlobalState.buttonPads,
      f => f._id !== buttonPadId
    );
    newGlobalState.actions = _filter(
      newGlobalState.actions,
      f => f.buttonPadId !== buttonPadId
    );

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    const newAppState = _cloneDeep(mockAppState.appState);
    newAppState.active.buttonPadId = "";
    newAppState.active.actionId = "";

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should get active Button", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    mockAppState.appState.active.buttonPadId = button._id;
    const active = getActiveButton();
    expect(active).toEqual(button);
  });

  it("Should get Index of active Button", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    mockAppState.appState.active.buttonPadId = button._id;
    const active = getActiveButtonIndex();
    expect(active).toEqual(0);
  });

  it("Should overwrite Button", () => {
    const destIndex = 5;
    const button1 = _cloneDeep(mockState.state.buttonPads[2]);
    const button2 = _cloneDeep(mockState.state.buttonPads[destIndex]);
    mockAppState.appState.active.pageId = button1.pageId;

    overWriteButtonPad(button1.buttonPadNum, button2.buttonPadNum);

    const newGlobalState = _cloneDeep(mockState.state);

    const attributes = {
      ...button1,
      _id: button2._id,
      buttonPadNum: button2.buttonPadNum
    };

    newGlobalState.buttonPads.splice(destIndex, 1);

    const buttonPad = { ...mockButton, ...attributes };
    newGlobalState.buttonPads.push(buttonPad);

    newGlobalState.actions = _filter(
      newGlobalState.actions,
      (f: IntActions) => f.buttonPadId !== button2._id
    );

    _filter(newGlobalState.actions, (action: IntActions) => {
      if (action.buttonPadId === button1._id) {
        newGlobalState.actions.push({
          ...action,
          _id: idGeneratorID,
          buttonPadId: button2._id
        });
      }
    });

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );
  });

  it("Should Not overwrite Button", () => {
    overWriteButtonPad(8, 8);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);

    overWriteButtonPad(7, 8);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should Paste Button Pad", () => {
    const buttonIndex = 0;
    const buttonPad = _cloneDeep(mockState.state.buttonPads[buttonIndex]);
    const copyState = {
      buttonPad: {
        bgColor: "color",
        icon: "icon",
        iconColor: "iconColor",
        text: "text",
        textColor: "textColor"
      },
      actions: []
    };

    pasteButtonPad(buttonPad, copyState);

    const newGlobalState = _cloneDeep(mockState.state);
    newGlobalState.buttonPads[buttonIndex] = {
      ...buttonPad,
      ...copyState.buttonPad
    };

    newGlobalState.actions = _filter(
      newGlobalState.actions,
      (f: IntActions) => f.buttonPadId !== buttonPad._id
    );

    _map(copyState.actions, (action: IntActions) => {
      let thisAction: IntActions = {
        ...action,
        profileId: buttonPad.profileId,
        pageId: buttonPad.pageId,
        _id: idGeneratorID,
        buttonPadId: buttonPad._id
      };

      newGlobalState.actions.push(thisAction);
    });

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    const newAppState = _cloneDeep(mockAppState.appState);
    newAppState.active.buttonPadId = buttonPad._id;

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should Not Paste Button Pad", () => {
    const buttonIndex = 0;
    const buttonPad = _cloneDeep(mockState.state.buttonPads[buttonIndex]);
    const copyState = {
      buttonPad: {
        bgColor: "color",
        icon: "icon",
        iconColor: "iconColor",
        text: "text",
        textColor: "textColor"
      },
      actions: []
    };

    pasteButtonPad(undefined, copyState);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);

    pasteButtonPad(buttonPad, undefined);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should read buttonPads", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    mockAppState.appState.active.pageId = button.pageId;
    const buttonPad = readButtonPads();
    expect(buttonPad.length).toEqual(12);
  });

  it("Should read buttonPad", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    mockAppState.appState.active.pageId = button.pageId;
    const buttonPad = readButtonPad(button.buttonPadNum);
    expect(buttonPad).toEqual(button);
  });

  it("Should swap buttonPad", () => {
    const origIndex = 2;
    const destIndex = 5;
    const button1 = _cloneDeep(mockState.state.buttonPads[origIndex]);
    const button2 = _cloneDeep(mockState.state.buttonPads[destIndex]);
    mockAppState.appState.active.pageId = button1.pageId;

    swapButtonPad(button1.buttonPadNum, button2.buttonPadNum);

    const newGlobalState = _cloneDeep(mockState.state);
    newGlobalState.buttonPads[origIndex].buttonPadNum = button2.buttonPadNum;
    newGlobalState.buttonPads[destIndex].buttonPadNum = button1.buttonPadNum;

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );
  });

  it("Should update button", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    const newText = "XXXXX update XXXXX";
    button.text = newText;
    updateButtonPad(button);

    const newGlobalState = _cloneDeep(mockState.state);
    newGlobalState.buttonPads[0].text = newText;

    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledWith(
      newGlobalState
    );

    const newAppState = _cloneDeep(mockAppState.appState);
    newAppState.active.buttonPadId = button._id;

    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledTimes(1);
    expect(mockHooks.useAppData.setAppState).toHaveBeenCalledWith(newAppState);
  });

  it("Should NOT update button", () => {
    updateButtonPad(mockButton);
    expect(mockHooks.useGlobalData.setState).toHaveBeenCalledTimes(0);
  });

  it("Should return button pad count", () => {
    const button = _cloneDeep(mockState.state.buttonPads[0]);
    mockAppState.appState.active.pageId = button.pageId;
    const count = buttonPadCount();
    expect(count).toBe(12);
  });
});
