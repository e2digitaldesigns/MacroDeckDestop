import * as React from "react";
import _cloneDeep from "lodash/cloneDeep";
import { DragAndDropDataTypes, DragAndDropOptions } from "../../types";
import useAppData from "../useAppDataHook/useAppDataHook";
import { useButton, useDropZone } from "..";

enum DragDropStates {
  DragStart = "dragstart",
  DragEnd = "dragend"
}

type TAllowDrop = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragEnd = (e: React.DragEvent<HTMLDivElement>) => void;
type TDragOver = () => void;
type TDragStart = (e: React.DragEvent<HTMLDivElement>) => void;
type TItemDrop = (
  e: React.DragEvent<HTMLDivElement>,
  destinationPadNumber: number
) => void;

interface IntUseDragDropHook {
  dragDropRef: any;
  isDragOver: boolean;
  allowDrop: TAllowDrop;
  itemDrop: TItemDrop;
  dragOver: TDragOver;
  dragLeave: TDragEnd;
}

const useDragDropButtonPadsHook = (
  buttonPadNumber: number
): IntUseDragDropHook => {
  const appData = useAppData();
  const dragDropRef = React.useRef<any>(null);
  const [isDragOver, setIsdragOver] = React.useState<boolean>(false);
  const { addStyleToButtonPad, overWriteButtonPad, swapButtonPad } =
    useButton();

  const { dropZoneState, setDropZoneState } = useDropZone();

  React.useEffect(() => {
    const menuDragEnd: TDragEnd = e => {
      const dropZoneStateClone = _cloneDeep(dropZoneState);
      dropZoneStateClone.dropZones.buttonPads = false;
      dropZoneStateClone.dropZones.styleHeader = false;
      setDropZoneState(dropZoneStateClone);
    };

    const menuDragStart: TDragStart = e => {
      const dropZoneStateClone = _cloneDeep(dropZoneState);
      dropZoneStateClone.dropZones.buttonPads = true;
      dropZoneStateClone.dropZones.styleHeader = true;
      setDropZoneState(dropZoneStateClone);

      if (e?.dataTransfer?.setData) {
        const dndAction = e.ctrlKey
          ? DragAndDropOptions.CopyButtonPad
          : DragAndDropOptions.SwapButtonPad;

        e.dataTransfer.setData(DragAndDropDataTypes.Action, dndAction);

        e.dataTransfer.setData(
          DragAndDropDataTypes.PageId,
          appData?.appState?.active?.pageId
        );

        e.dataTransfer.setData(
          DragAndDropDataTypes.OriginPadNumber,
          buttonPadNumber.toString()
        );
      }
    };

    let buttonPadRefCleanUp = dragDropRef.current;
    buttonPadRefCleanUp?.addEventListener(
      DragDropStates.DragStart,
      (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e)
    );

    buttonPadRefCleanUp?.addEventListener(
      DragDropStates.DragEnd,
      (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
    );

    return () => {
      buttonPadRefCleanUp?.removeEventListener(
        DragDropStates.DragStart,
        (e: React.DragEvent<HTMLDivElement>) => menuDragStart(e)
      );

      buttonPadRefCleanUp?.removeEventListener(
        DragDropStates.DragEnd,
        (e: React.DragEvent<HTMLDivElement>) => menuDragEnd(e)
      );
      buttonPadRefCleanUp = null;
    };
    // eslint-disable-next-line
  }, [dragDropRef, buttonPadNumber, appData?.appState?.active?.pageId]);

  const allowDrop: TAllowDrop = e => {
    e.preventDefault();
  };

  const itemDrop: TItemDrop = (e, destinationPadNumber) => {
    const dndAction = e.dataTransfer.getData(DragAndDropDataTypes.Action);
    setIsdragOver(false);

    switch (dndAction) {
      case DragAndDropOptions.StyleButtonPad:
        addStyleToButtonPad(
          e.dataTransfer.getData(DragAndDropDataTypes.StyleId),
          appData?.appState?.active?.pageId,
          buttonPadNumber
        );
        break;

      case DragAndDropOptions.CopyButtonPad:
        if (!e.ctrlKey) return;
        const originPadNumberCopy = parseInt(
          e.dataTransfer.getData(DragAndDropDataTypes.OriginPadNumber)
        );

        if (originPadNumberCopy === destinationPadNumber) return;

        overWriteButtonPad(originPadNumberCopy, destinationPadNumber);
        break;

      case DragAndDropOptions.SwapButtonPad:
        const originPadNumberSwap = parseInt(
          e.dataTransfer.getData(DragAndDropDataTypes.OriginPadNumber)
        );

        if (originPadNumberSwap === destinationPadNumber) return;

        swapButtonPad(originPadNumberSwap, destinationPadNumber);
        break;

      default:
        break;
    }
  };

  const dragOver: TDragOver = () => {
    setIsdragOver(true);
  };

  const dragLeave: TDragEnd = () => {
    setIsdragOver(false);
  };

  return {
    allowDrop,
    dragDropRef,
    dragLeave,
    dragOver,
    isDragOver,
    itemDrop
  };
};

export default useDragDropButtonPadsHook;
