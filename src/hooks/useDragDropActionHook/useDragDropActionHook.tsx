import * as React from "react";
import _cloneDeep from "lodash/cloneDeep";
import _findIndex from "lodash/findIndex";
import { IntActions } from "../../types";
import useGlobalData from "../useGlobalDataHook/useGlobalDataHook";

enum DragDropStates {
  DragStart = "dragstart",
  DragEnd = "dragend"
}

enum DragDropDataKeys {
  Action = "dndAction",
  DragId = "dragId"
}

enum DragDropDataValues {
  Action = "Action"
}

type TAllowDrop = (e: React.DragEvent<HTMLLIElement>) => void;
type TDragEnd = (e: React.DragEvent<HTMLLIElement>) => void;
type TDragStart = (e: React.DragEvent<HTMLLIElement>, _id: string) => void;
type TItemDrop = (e: React.DragEvent<HTMLLIElement>, _id: string) => void;

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

    const dragEnd: TDragEnd = e => {};

    const dragStart: TDragStart = (e, _id) => {
      e.dataTransfer.setData(DragDropDataKeys.DragId, _id);
      e.dataTransfer.setData(
        DragDropDataKeys.Action,
        DragDropDataValues.Action
      );
    };

    buttonPadRefCleanUp.addEventListener(
      DragDropStates.DragStart,
      (e: React.DragEvent<HTMLLIElement>) => dragStart(e, draggingId)
    );
    buttonPadRefCleanUp.addEventListener(
      DragDropStates.DragEnd,
      (e: React.DragEvent<HTMLLIElement>) => dragEnd(e)
    );

    return () => {
      buttonPadRefCleanUp.removeEventListener(
        DragDropStates.DragStart,
        (e: React.DragEvent<HTMLLIElement>) => dragStart(e, draggingId)
      );

      buttonPadRefCleanUp.removeEventListener(
        DragDropStates.DragEnd,
        (e: React.DragEvent<HTMLLIElement>) => dragEnd(e)
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
    const action = e.dataTransfer.getData(DragDropDataKeys.Action);
    if (action !== DragDropDataValues.Action) return;

    const dragIndex = _findIndex(
      newState.actions,
      (f: IntActions) => f._id === dragId
    );

    const dropIndex = _findIndex(
      newState.actions,
      (f: IntActions) => f._id === _id
    );

    const dragProfile = newState.actions[dragIndex];

    if (dragIndex > dropIndex) {
      newState.actions.splice(dragIndex, 1);
      newState.actions.splice(dropIndex, 0, dragProfile);
    }

    if (dragIndex < dropIndex) {
      newState.actions.splice(dropIndex + 1, 0, dragProfile);
      newState.actions.splice(dragIndex, 1);
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
