import * as React from "react";
import _cloneDeep from "lodash/cloneDeep";
import _findIndex from "lodash/findIndex";
import { IntProfile } from "../../types";
import useGlobalData from "./../useGlobalDataHook/useGlobalDataHook";

enum DragDropStates {
  DragStart = "dragstart",
  DragEnd = "dragend"
}

enum DragDropDataKeys {
  Action = "dndAction",
  DragId = "dragId"
}

type TAllowDrop = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragEnd = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragStart = (e: React.DragEvent<HTMLDivElement>, _id: string) => void;
type TItemDrop = (e: React.DragEvent<HTMLDivElement>, _id: string) => void;

interface IntUseDragDropHook {
  dragDropRef: any;
  allowDrop: TAllowDrop;
  itemDrop: TItemDrop;
}

const useDragDropHook = (draggingId: string): IntUseDragDropHook => {
  const globalData = useGlobalData();
  const dragDropRef = React.useRef<any>(null);

  React.useEffect(() => {
    let buttonPadRefCleanUp = dragDropRef.current;

    const menuDragEnd: TDragEnd = e => {};

    const menuDragStart: TDragStart = (e, _id) => {
      e.dataTransfer.setData(DragDropDataKeys.DragId, _id);
    };

    buttonPadRefCleanUp.addEventListener(
      DragDropStates.DragStart,
      (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e, draggingId)
    );
    buttonPadRefCleanUp.addEventListener(
      DragDropStates.DragEnd,
      (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
    );

    return () => {
      buttonPadRefCleanUp.removeEventListener(
        DragDropStates.DragStart,
        (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e, draggingId)
      );

      buttonPadRefCleanUp.removeEventListener(
        DragDropStates.DragEnd,
        (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
      );

      buttonPadRefCleanUp = null;
    };
  }, [dragDropRef, draggingId]);

  const allowDrop: TAllowDrop = e => {
    e.preventDefault();
  };

  const itemDrop: TItemDrop = (e, _id) => {
    const newState = _cloneDeep(globalData.state);

    const dragId = e.dataTransfer.getData(DragDropDataKeys.DragId);

    const dragIndex = _findIndex(
      newState.profiles,
      (f: IntProfile) => f._id === dragId
    );

    const dropIndex = _findIndex(
      newState.profiles,
      (f: IntProfile) => f._id === _id
    );
    const dragProfile = newState.profiles[dragIndex];

    if (dragIndex > dropIndex) {
      newState.profiles.splice(dragIndex, 1);
      newState.profiles.splice(dropIndex, 0, dragProfile);
    }

    if (dragIndex < dropIndex) {
      newState.profiles.splice(dropIndex + 1, 0, dragProfile);
      newState.profiles.splice(dragIndex, 1);
    }

    dragIndex !== dropIndex && globalData.setState(newState);
  };

  return {
    dragDropRef,
    allowDrop,
    itemDrop
  };
};

export default useDragDropHook;
