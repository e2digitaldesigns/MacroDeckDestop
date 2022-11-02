import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _map from "lodash/map";
import _size from "lodash/size";
import _sortBy from "lodash/sortBy";
import axios from "axios";

import { useAppData, useGlobalData } from "../";
import { useObj } from "../../hooks";
import { idGenerator } from "../../utils";

import {
  ButtonPadGridCopyStateType,
  IntActions,
  IntAppData,
  IntButtonPads,
  IntGlobalData,
  IntStyles,
  IntAppContextInterface,
  IntGlobalContextInterface
} from "../../types";

export interface IntUseButtonHook {
  activateButtonPad: (_id: string) => void;
  addStyleToButtonPad: (
    styleId: string,
    pageId: string,
    buttonPadNumber: number
  ) => void;
  buttonPadCount: () => number;
  createButtonPad: (padNumber: number, data?: { _id?: string }) => void;
  readButtonPad: (padNumber: number) => IntButtonPads | undefined;
  readButtonPads: () => IntButtonPads[];
  updateButtonPad: (data: IntButtonPads) => void;
  deleteButtonPad: (_id: string) => void;
  overWriteButtonPad: (origin: number, destination: number) => void;
  swapButtonPad: (origin: number, destination: number) => void;
  getActiveButton: () => IntButtonPads | undefined;
  getActiveButtonIndex: () => number;
  pasteButtonPad: (
    buttonPad: IntButtonPads | undefined,
    copyState: ButtonPadGridCopyStateType
  ) => void;
  playButtonPad: (buttonPadId?: string) => Promise<void>;
}

const useButtonHook = (): IntUseButtonHook => {
  const globalData: IntGlobalData = useGlobalData();
  const appData: IntAppData = useAppData();
  const { actionObj, buttonPadObj } = useObj();

  const activateButtonPad: IntUseButtonHook["activateButtonPad"] = (
    _id: string
  ): void => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    if (_id === appState.active.buttonPadId) return;

    const action = _find(
      state.actions,
      (f: IntActions) => f.buttonPadId === _id
    );

    globalData.setState(state);

    appState.active.buttonPadId = _id;
    appState.active.actionId = action ? action._id : "";
    appData.setAppState(appState);
  };

  const createButtonPad: IntUseButtonHook["createButtonPad"] = (
    padNumber,
    data = {}
  ) => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPad = { ...buttonPadObj(), ...data };
    buttonPad.pageId = appState.active.pageId;

    buttonPad.buttonPadNum = padNumber;
    buttonPad.text = String(padNumber);

    buttonPad.profileId = appState.active.profileId;
    buttonPad.pageId = appState.active.pageId;

    state.buttonPads.push(buttonPad);

    appState.active.buttonPadId = buttonPad._id;
    appState.active.actionId = "";

    if (!data._id) {
      const action = actionObj();
      action.profileId = appState.active.profileId;
      action.pageId = appState.active.pageId;
      action.buttonPadId = appState.active.buttonPadId;
      state.actions.push(action);
      appState.active.actionId = action._id;
    }

    appData.setAppState(appState);
    globalData.setState(state);
  };

  const readButtonPads: IntUseButtonHook["readButtonPads"] = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const activePageId = appState.active.pageId;

    const buttonPads = _sortBy(
      _filter(
        state?.buttonPads,
        (f: IntButtonPads) => f.pageId === activePageId
      ),
      "buttonPadNum"
    );
    return buttonPads;
  };

  const readButtonPad: IntUseButtonHook["readButtonPad"] = (
    padNumber: number
  ) => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPad = _find(
      state.buttonPads,
      (f: IntButtonPads) =>
        f.buttonPadNum === padNumber && f.pageId === appState.active.pageId
    );

    return buttonPad;
  };

  const getActiveButton: IntUseButtonHook["getActiveButton"] = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPad = _find(
      state.buttonPads,
      (f: IntButtonPads) => f._id === appState.active.buttonPadId
    );

    return buttonPad;
  };

  const getActiveButtonIndex: IntUseButtonHook["getActiveButtonIndex"] = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPad = _findIndex(
      state.buttonPads,
      (f: IntButtonPads) => f._id === appState.active.buttonPadId
    );

    return buttonPad;
  };

  const updateButtonPad: IntUseButtonHook["updateButtonPad"] = (data): void => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const index = _findIndex(
      state.buttonPads,
      (f: IntButtonPads) => f._id === data._id
    );

    if (index === -1) return;
    state.buttonPads[index] = { ...data };
    globalData?.setState(state);

    appState.active.buttonPadId = data._id;
    appData.setAppState(appState);
  };

  const deleteButtonPad: IntUseButtonHook["deleteButtonPad"] = _id => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPads = _filter(
      state.buttonPads,
      (f: IntButtonPads) => f._id !== _id
    );

    const actions = _filter(
      state.actions,
      (f: IntActions) => f.buttonPadId !== _id
    );

    state.buttonPads = buttonPads;
    state.actions = actions;

    globalData.setState(state);

    if (appState.active.buttonPadId === _id) {
      appState.active.buttonPadId = "";
      appState.active.actionId = "";
      appData.setAppState(appState);
    }
  };

  const addStyleToButtonPad: IntUseButtonHook["addStyleToButtonPad"] = (
    styleId: string,
    pageId: string,
    buttonPadNumber: number
  ): void => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const buttonPad = readButtonPad(buttonPadNumber);
    if (!buttonPad) return;

    const index = _findIndex(
      state.buttonPads,
      (f: IntButtonPads) => f._id === buttonPad._id && f.pageId === pageId
    );
    if (index === -1) return;

    const style = _find(state.styles, (f: IntStyles) => f._id === styleId);
    if (!style) return;

    state.buttonPads[index] = {
      ...state.buttonPads[index],
      textColor: style.textColor,
      icon: style.icon,
      iconColor: style.iconColor,
      image: style.image,
      bgColor: style.bgColor
    };
    globalData.setState(state);
  };

  const swapButtonPad: IntUseButtonHook["swapButtonPad"] = (
    origin: number,
    destination: number
  ) => {
    if (origin === destination) return;
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const originPad = readButtonPad(origin);
    const destinationPad = readButtonPad(destination);

    if (!originPad) return;

    const originIndex = _findIndex(
      state.buttonPads,
      (f: IntButtonPads) => f._id === originPad?._id
    );

    const destinationIndex = destinationPad
      ? _findIndex(
          state.buttonPads,
          (f: IntButtonPads) => f._id === destinationPad?._id
        )
      : -1;

    if (originIndex > -1)
      state.buttonPads[originIndex].buttonPadNum = destination;
    if (destinationIndex > -1)
      state.buttonPads[destinationIndex].buttonPadNum = origin;
    globalData.setState(state);
  };

  const overWriteButtonPad: IntUseButtonHook["overWriteButtonPad"] = (
    origin: number,
    destination: number
  ) => {
    if (origin === destination) return;
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const originPad = readButtonPad(origin);
    const destinationCheck = readButtonPad(destination);

    if (!originPad) return;
    const newButtonPadId = destinationCheck?._id || idGenerator();

    const attributes = {
      ...originPad,
      _id: newButtonPadId,
      buttonPadNum: destination
    };

    if (destinationCheck) {
      const index = _findIndex(
        state.buttonPads,
        (f: IntButtonPads) => f._id === destinationCheck._id
      );

      state.buttonPads.splice(index, 1);
    }

    state.actions = _filter(
      state.actions,
      (f: IntActions) => f.buttonPadId !== destinationCheck?._id
    );

    // const originAction = _filter(
    //   state.actions,
    //   (f: IntActions) => f.buttonPadId === originPad._id
    // );

    // _map(originAction, (action: IntActions) => {
    //   state.actions.push({
    //     ...action,
    //     _id: idGenerator(),
    //     buttonPadId: newButtonPadId
    //   });
    // });

    _filter(state.actions, (action: IntActions) => {
      if (action.buttonPadId === originPad._id) {
        state.actions.push({
          ...action,
          _id: idGenerator(),
          buttonPadId: newButtonPadId
        });
      }
    });

    const buttonPad = { ...buttonPadObj(), ...attributes };
    state.buttonPads.push(buttonPad);
    globalData.setState(state);

    appState.active.buttonPadId = buttonPad._id;
    appState.active.actionId = "";
    appData.setAppState(appState);
  };

  const pasteButtonPad: IntUseButtonHook["pasteButtonPad"] = (
    buttonPad: IntButtonPads | undefined,
    copyState: ButtonPadGridCopyStateType
  ) => {
    if (!buttonPad || !copyState?.buttonPad) return;
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPadIndex = _findIndex(
      state.buttonPads,
      (f: IntButtonPads) => f._id === buttonPad._id
    );

    state.buttonPads[buttonPadIndex] = {
      ...state.buttonPads[buttonPadIndex],
      ...copyState.buttonPad
    };

    state.actions = _filter(
      state.actions,
      (action: IntActions) => action.buttonPadId !== buttonPad._id
    );

    _map(copyState.actions, (action: IntActions) => {
      let thisAction: IntActions = {
        ...action,
        profileId: buttonPad.profileId,
        pageId: buttonPad.pageId,
        _id: idGenerator(),
        buttonPadId: buttonPad._id
      };

      state.actions.push(thisAction);
    });

    globalData.setState(state);

    appState.active.buttonPadId = buttonPad._id;
    appData.setAppState(appState);
  };

  const buttonPadCount: IntUseButtonHook["buttonPadCount"] = () => {
    return _size(readButtonPads());
  };

  const playButtonPad: IntUseButtonHook["playButtonPad"] =
    async buttonPadId => {
      const _id = buttonPadId
        ? buttonPadId
        : appData.appState.active.buttonPadId;

      const { ipAddress, port } = globalData.state.settings.md;

      if (!ipAddress || !port || !_id) return;

      axios.post(`http://${ipAddress}:${port}/api/v1/mobile/actions/`, {
        _id
      });
    };

  return {
    activateButtonPad,
    addStyleToButtonPad,
    buttonPadCount,
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
    playButtonPad
  };
};

export default useButtonHook;
