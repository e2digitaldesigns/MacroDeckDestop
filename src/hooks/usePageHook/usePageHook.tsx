import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _sortBy from "lodash/sortBy";

import { useAppData, useGlobalData } from "../";
import { useObj } from "../../hooks";

import {
  IntActions,
  IntAppContextInterface,
  IntAppData,
  IntButtonPads,
  IntGlobalContextInterface,
  IntGlobalData,
  IntPages
} from "../../types";

type TTotalPages = () => number;
type TDeletePage = (_id?: string) => void;
export interface IntUsePageHook {
  activatePage: (_id: string) => void;
  createPage: () => void;
  deletePage: TDeletePage;
  readPage: (_id?: string) => any;
  readPages: () => IntPages[];
  pageCount: TTotalPages;
}

const usePageHook = (): IntUsePageHook => {
  const globalData: IntGlobalData = useGlobalData();
  const appData: IntAppData = useAppData();
  const { actionObj, buttonPadObj, pageObj } = useObj();

  const sortPages = (profileId: string | null = null) => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const theProfileId = profileId ? profileId : appState.active.profileId;

    const pages = _sortBy(
      _filter(state?.pages, (f: IntPages) => f.profileId === theProfileId),
      "order"
    );

    return pages;
  };

  const activatePage: IntUsePageHook["activatePage"] = _id => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    const buttonPadId =
      _sortBy(
        _filter(state?.buttonPads, (f: IntButtonPads) => f.pageId === _id),
        "buttonPadNum"
      )?.[0]?._id || "";

    const actionId =
      _filter(
        state?.actions,
        (f: IntActions) => f.buttonPadId === buttonPadId
      )?.[0]?._id || "";

    appState.active.pageId = _id;
    appState.active.buttonPadId = buttonPadId;
    appState.active.actionId = actionId;
    appData.setAppState(appState);
  };

  const readPage: IntUsePageHook["readPage"] = _id => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    let page: IntPages | undefined;

    if (_id) {
      page = _find(state?.pages, (f: IntPages) => f._id === _id);
    } else {
      page = _find(
        state.pages,
        (f: IntPages) => f._id === appState.active.pageId
      );
    }

    const pages = page ? sortPages(page.profileId) : [];
    const index = _findIndex(pages, f => f._id === page?._id);
    if (page && index > -1) page.number = index + 1;
    return page;
  };

  const readPages: IntUsePageHook["readPages"] = () => {
    const pages = sortPages();
    pages.forEach((page: IntPages, index: number) => (page.number = index + 1));
    return pages;
  };

  const pageCount: TTotalPages = () => {
    const pages = sortPages() || [];
    return pages.length;
  };

  const createPage = () => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);

    if (!appState?.active?.profileId) return;

    const page: IntPages = pageObj();
    page.profileId = appState.active.profileId;

    const buttonPad: IntButtonPads = buttonPadObj();
    buttonPad.profileId = page.profileId;
    buttonPad.pageId = page._id;
    buttonPad.buttonPadNum = 1;

    const action: IntActions = actionObj();
    action.profileId = page.profileId;
    action.pageId = page._id;
    action.buttonPadId = buttonPad._id;

    state.pages.push(page);
    state.buttonPads.push(buttonPad);
    state.actions.push(action);
    globalData.setState(state);

    appState.active.profileId = page.profileId;
    appState.active.pageId = page._id;
    appState.active.buttonPadId = buttonPad._id;
    appState.active.actionId = action._id;
    appData.setAppState(appState);
  };

  const deletePage: TDeletePage = _id => {
    const appState: IntAppContextInterface = _cloneDeep(appData.appState);
    const state: IntGlobalContextInterface = _cloneDeep(globalData.state);
    const pageId = _id ? _id : appState.active.pageId;

    const pageCheck = _filter(
      state.pages,
      (f: IntPages) =>
        f.profileId === appState.active.profileId && f._id !== pageId
    );

    if (pageCheck.length === 0) return;

    state.pages = _filter(state.pages, (f: IntPages) => f._id !== pageId);

    state.buttonPads = _filter(
      state.buttonPads,
      (f: IntButtonPads) => f.pageId !== pageId
    );

    state.actions = _filter(
      state.actions,
      (f: IntActions) => f.pageId !== pageId
    );

    globalData.setState(state);

    appState.active.pageId = pageCheck[0]._id;
    if (!_id) {
      appState.active.buttonPadId = "";
      appState.active.actionId = "";
    }
    appData.setAppState(appState);
  };

  return {
    activatePage,
    createPage,
    deletePage,
    readPage,
    readPages,
    pageCount
  };
};

export default usePageHook;
