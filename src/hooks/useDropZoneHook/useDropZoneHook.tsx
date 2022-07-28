import React from "react";
import { IntDragAndDropData } from "../../types";
import { DropZoneContext } from "../../context";

const useDropZone = () => {
  const dropZone: IntDragAndDropData = React.useContext(DropZoneContext);
  return dropZone;
};

export default useDropZone;
