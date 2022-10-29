import React from "react";
import { useElectron } from "../../hooks";
import {
  IntGlobalData,
  IntGlobalContextInterface,
  IpcRendererTypes
} from "../../types";

import { defaultState } from "./defaultState";

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
  const { ipcRenderParser, loadAppData } = useElectron();
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

  return globalContextValue ? (
    <>
      <GlobalContext.Provider value={globalContextValue}>
        {children}
      </GlobalContext.Provider>
    </>
  ) : null;
};

export { GlobalContext, GlobalContextProvider };
