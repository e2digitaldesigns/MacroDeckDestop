import * as React from "react";

import _cloneDeep from "lodash/cloneDeep";
import _findIndex from "lodash/findIndex";

import { IntProfile } from "../../types";
import useGlobalData from "./../useGlobalDataHook/useGlobalDataHook";

type TMenuAllowDrop = (e: React.DragEvent<HTMLDivElement>) => void;
type TMenuDragEnd = (e: React.DragEvent<HTMLDivElement>) => void;
type TMenuDragStart = (e: React.DragEvent<HTMLDivElement>, _id: string) => void;
type TMenuItemDrop = (e: React.DragEvent<HTMLDivElement>, _id: string) => void;

interface IntUseDragDropHook {
  menuAllowDrop: TMenuAllowDrop;
  menuDragEnd: TMenuDragEnd;
  menuDragStart: TMenuDragStart;
  menuItemDrop: TMenuItemDrop;
}

const useDragDropHook = (): IntUseDragDropHook => {
  const globalData = useGlobalData();

  const menuAllowDrop: TMenuAllowDrop = e => {
    e.preventDefault();
  };

  const menuDragEnd: TMenuDragEnd = e => {
    console.log(27, "handleDragEnd HOOK");
  };

  const menuDragStart: TMenuDragStart = (e, _id) => {
    e.dataTransfer.setData("dndAction", "sideBarProfileSort");
    e.dataTransfer.setData("dragId", _id);
  };

  const menuItemDrop: TMenuItemDrop = (e, _id) => {
    const newState = _cloneDeep(globalData.state);

    const dragId = e.dataTransfer.getData("dragId");

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

    if (dragIndex !== dropIndex) globalData.setState(newState);
  };

  return {
    menuAllowDrop,
    menuDragEnd,
    menuDragStart,
    menuItemDrop
  };
};

export default useDragDropHook;
