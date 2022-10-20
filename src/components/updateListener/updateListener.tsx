import React from "react";
import { useElectron, useGlobalData } from "../../hooks";

import SETTINGS from "../../settings/system.json";
import _isEqual from "lodash/isEqual";
import _size from "lodash/size";
import {
  IntGlobalContextCheckers,
  IntGlobalContextInterface
} from "../../types";

const UpdateListener: React.FC = () => {
  const { saveAppData, updateMobileDevice } = useElectron();
  const { state } = useGlobalData();

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

  const checkersMobile = React.useRef<Partial<IntGlobalContextCheckers>>({
    profiles: state.profiles,
    pages: state.pages,
    buttonPads: state.buttonPads
  });

  React.useEffect(() => {
    let stillHereA = true;
    const keys = SETTINGS.UPDATE_ON_CHANGE_PARAMS;
    const stateCheck: Partial<IntGlobalContextInterface> = {};
    const refCheck: Partial<IntGlobalContextInterface> = {};

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      refCheck[key as keyof IntGlobalContextInterface] =
        checkersMobile.current[key as keyof IntGlobalContextCheckers];
      stateCheck[key as keyof IntGlobalContextInterface] =
        state[key as keyof IntGlobalContextInterface];
    }

    if (!_isEqual(stateCheck, refCheck) && _size(refCheck)) {
      for (let i = 0; i < _size(keys); i++) {
        checkersMobile.current[keys[i] as keyof IntGlobalContextCheckers] =
          state[keys[i] as keyof IntGlobalContextInterface];
      }

      state?.settings?.ipAddress && stillHereA && updateMobileDevice(state);
    }

    return () => {
      stillHereA = false;
    };
  }, [state, updateMobileDevice]);

  return <div />;
};

export default UpdateListener;
