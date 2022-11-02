import React from "react";
import { useElectron, useGlobalData } from "../../hooks";

import _isEqual from "lodash/isEqual";
import _size from "lodash/size";
import { IntGlobalContextInterface } from "../../types";

const UpdateListener: React.FC = () => {
  const { saveAppData, updateMobileDevice } = useElectron();
  const { state } = useGlobalData();

  const checkers = React.useRef<Partial<IntGlobalContextInterface>>({
    settings: state.settings,
    profiles: state.profiles,
    pages: state.pages,
    buttonPads: state.buttonPads,
    actions: state.actions,
    styles: state.styles
  });

  React.useEffect(() => {
    let stillHere = true;

    console.log(24);

    const refChecking = {
      ...checkers.current
    };

    const stateChecking = {
      settings: state.settings,
      profiles: state.profiles,
      pages: state.pages,
      buttonPads: state.buttonPads,
      actions: state.actions,
      styles: state.styles
    };

    if (!_isEqual(refChecking, stateChecking) && _size(refChecking)) {
      checkers.current = {
        ...stateChecking
      };
      console.log(43);

      state?.settings?.md?.ipAddress && stillHere && saveAppData(state);
      console.log(47, state?.settings?.md?.ipAddress, stillHere);
      state?.settings?.md?.ipAddress && stillHere && console.log(46, "save me");
    }
  }, [state, saveAppData]);

  const checkersMobile = React.useRef<Partial<IntGlobalContextInterface>>({
    profiles: state.profiles,
    pages: state.pages,
    buttonPads: state.buttonPads
  });

  React.useEffect(() => {
    let stillHereA = true;

    const refCheckingMobile = {
      ...checkersMobile.current
    };

    const stateCheckingMobile = {
      profiles: state.profiles,
      pages: state.pages,
      buttonPads: state.buttonPads
    };

    if (!_isEqual(refCheckingMobile, stateCheckingMobile)) {
      checkersMobile.current = {
        ...stateCheckingMobile
      };

      state?.settings?.md?.ipAddress && stillHereA && updateMobileDevice(state);
    }

    return () => {
      stillHereA = false;
    };
  }, [state, updateMobileDevice]);

  return <div />;
};

export default UpdateListener;
