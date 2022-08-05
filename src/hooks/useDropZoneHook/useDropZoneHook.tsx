import React from "react";
import { IntDragAndDropData } from "../../types";
import { DropZoneContext } from "../../context";

const useDropZoneHook = () => {
  const dropZone: IntDragAndDropData = React.useContext(DropZoneContext);

  return dropZone;
};

export default useDropZoneHook;
