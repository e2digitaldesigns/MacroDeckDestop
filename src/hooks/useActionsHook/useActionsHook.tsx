import _findIndex from "lodash/findIndex";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _size from "lodash/size";

import { useAppData, useGlobalData } from "../";
import { useObj } from "../../hooks";

import {
  IntActions,
  IntAppData,
  IntAppContextInterface,
  IntGlobalContextInterface,
  IntGlobalData
} from "../../types";

export interface IntUseActionHooks {
  activateAction: (_id: string) => void;
  getActions: () => IntActions[];
  getAction: (_id: string) => IntActions | undefined;
  getActiveAction: () => IntActions | undefined;
  createAction: () => void;
  deleteAction: (_id: string) => void;
  updateAction: (action: any) => void;
  actionCount: () => number;
}

const useActionHooks = (): IntUseActionHooks => {
  const globalData: IntGlobalData = useGlobalData();
  const appData: IntAppData = useAppData();
  const { actionObj } = useObj();

  const activateAction: IntUseActionHooks["activateAction"] = (_id): void => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    appState.active.actionId = _id;
    appData.setAppState(appState);
  };

  const createAction: IntUseActionHooks["createAction"] = (): void => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    if (!appState.active.buttonPadId) return;

    const action = actionObj();
    action.profileId = appState.active.profileId;
    action.pageId = appState.active.pageId;
    action.buttonPadId = appState.active.buttonPadId;
    state.actions.push(action);
    globalData?.setState(state);

    appState.active.actionId = action._id;
    appData.setAppState(appState);
  };

  const getActions: IntUseActionHooks["getActions"] = () => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);

    const actions = _filter(
      state.actions,
      (f: IntActions) => f.buttonPadId === appState.active.buttonPadId
    );

    return actions;
  };

  const getAction: IntUseActionHooks["getAction"] = _id => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const action: IntActions | undefined = _find(
      state.actions,
      (f: IntActions) => f._id === _id
    );

    return action;
  };

  const getActiveAction: IntUseActionHooks["getActiveAction"] = () => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);

    const action: IntActions | undefined = _find(
      state.actions,
      (f: IntActions) => f._id === appState.active.actionId
    );

    return action;
  };

  const deleteAction: IntUseActionHooks["deleteAction"] = (
    _id: string
  ): void => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const actions = _filter(state.actions, (f: IntActions) => f._id !== _id);
    state.actions = actions;
    globalData?.setState(state);

    if (appState.active.actionId === _id) {
      appState.active.actionId = "";
      appData.setAppState(appState);
    }
  };

  const updateAction: IntUseActionHooks["updateAction"] = (
    action: IntActions
  ) => {
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const index = _findIndex(
      state.actions,
      (f: IntActions) => f._id === action._id
    );

    if (index === -1) return;
    state.actions[index] = { ...action };
    globalData?.setState(state);
  };

  const actionCount: IntUseActionHooks["actionCount"] = () => {
    return _size(getActions());
  };

  return {
    activateAction,
    getActions,
    getAction,
    getActiveAction,
    createAction,
    deleteAction,
    updateAction,
    actionCount
  };
};

export default useActionHooks;
