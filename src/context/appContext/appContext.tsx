import React from "react";
import { IntAppData, IntAppContextInterface } from "../../types";

import { appDefaultState } from "./defaultState";

const AppContext = React.createContext<IntAppData>({
  appState: appDefaultState,
  setAppState: (): void => {}
});

interface IntAppContextProvider {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<IntAppContextProvider> = ({ children }) => {
  const [appState, setAppState] = React.useState<IntAppContextInterface>({
    ...appDefaultState
  });

  const appContextValue = React.useMemo(
    () => ({ appState, setAppState }),
    [appState, setAppState]
  );

  return appContextValue ? (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  ) : null;
};

export { AppContext, AppContextProvider };
