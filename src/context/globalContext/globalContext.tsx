import React from "react";
import { useElectron } from "../../hooks";
import {
  IntGlobalData,
  IntGlobalContextInterface,
  IpcRendererTypes,
  IntGlobalContextCheckers
} from "../../types";

import { defaultState } from "./defaultState";

import SETTINGS from "../../settings/system.json";
import _isEqual from "lodash/isEqual";
import _size from "lodash/size";

const GlobalContext = React.createContext<IntGlobalData>({
  state: defaultState,
  setState: (): void => {}
});

interface IntGlobalContextProvider {
  children: React.ReactNode;
}

const GlobalContextProvider: React.FC<IntGlobalContextProvider> = ({
  children
}) => {
  const { ipcRenderParser, loadAppData, saveAppData } = useElectron();
  const [state, setState] = React.useState<IntGlobalContextInterface>({
    ...defaultState
  });

  const globalContextValue = React.useMemo(
    () => ({ state, setState }),
    [state, setState]
  );

  React.useEffect(() => {
    let stillHere = true;
    const ipcRenderer = ipcRenderParser();

    ipcRenderer &&
      ipcRenderer.on(
        IpcRendererTypes.databaseReturn,
        (e: unknown, data: IntGlobalContextInterface) => {
          if (typeof data === "object" && stillHere) {
            setState(data);
          }
        }
      );

    return () => {
      stillHere = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    loadAppData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkers = React.useRef<IntGlobalContextCheckers>({
    profiles: state.profiles,
    pages: state.pages,
    buttonPads: state.buttonPads,
    actions: state.actions,
    styles: state.styles
  });

  React.useEffect(() => {
    let stillHere = true;
    const keys = SETTINGS.SAVE_ON_CHANGE_PARAMS;
    const stateCheck: Partial<IntGlobalContextInterface> = {};
    const refCheck: Partial<IntGlobalContextInterface> = {};

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      refCheck[key as keyof IntGlobalContextInterface] =
        checkers.current[key as keyof IntGlobalContextCheckers];
      stateCheck[key as keyof IntGlobalContextInterface] =
        state[key as keyof IntGlobalContextInterface];
    }

    if (!_isEqual(stateCheck, refCheck) && _size(refCheck)) {
      for (let i = 0; i < _size(keys); i++) {
        checkers.current[keys[i] as keyof IntGlobalContextCheckers] =
          state[keys[i] as keyof IntGlobalContextInterface];
      }

      state?.settings?.ipAddress && stillHere && saveAppData(state);
    }

    return () => {
      stillHere = false;
    };
  }, [state, saveAppData]);

  return globalContextValue ? (
    <>
      <GlobalContext.Provider value={globalContextValue}>
        {children}
      </GlobalContext.Provider>
    </>
  ) : null;
};

export { GlobalContext, GlobalContextProvider };
