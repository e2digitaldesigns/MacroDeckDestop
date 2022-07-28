import React from "react";
import { IntDragAndDropData, IntDragAndDropInterface } from "../../types";

import { dropZoneDefaultState } from "./defaultState";

const DropZoneContext = React.createContext<IntDragAndDropData>({
  dropZoneState: dropZoneDefaultState,
  setDropZoneState: (): void => {}
});

interface IntDropZoneContextProvider {
  children: React.ReactNode;
}

const DropZoneContextProvider: React.FC<IntDropZoneContextProvider> = ({
  children
}) => {
  const [dropZoneState, setDropZoneState] =
    React.useState<IntDragAndDropInterface>({
      ...dropZoneDefaultState
    });

  const dropZoneContextValue = React.useMemo(
    () => ({ dropZoneState, setDropZoneState }),
    [dropZoneState, setDropZoneState]
  );

  return dropZoneContextValue ? (
    <>
      <DropZoneContext.Provider value={dropZoneContextValue}>
        {children}
      </DropZoneContext.Provider>
    </>
  ) : null;
};

export { DropZoneContext, DropZoneContextProvider };
