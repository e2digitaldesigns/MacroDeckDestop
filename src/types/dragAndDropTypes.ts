export enum DragAndDropOptions {
  CopyButtonPad = "CopyButtonPad",
  MoveButtonPad = "MoveButtonPad",
  OverwriteButtonPad = "OverwriteButtonPad",
  PasteButtonPad = "PasteButtonPad",
  StyleButtonPad = "StyleButtonPad",
  SwapButtonPad = "SwapButtonPad"
}

export enum DragAndDropDataTypes {
  Action = "DragAndDropAction",
  PageId = "DragAndDropPageId",
  StyleId = "DragAndDropStyleId",
  OriginPadNumber = "DragAndDropOriginPadNumber"
}

interface IntDropZones {
  actionList: boolean;
  buttonPads: boolean;
  sideBarProfiles: boolean;
  sideBarStyles: boolean;
  styleHeader: boolean;
}

export interface IntDragAndDropInterface {
  dropZones: IntDropZones;
}

export interface IntIntDragAndDropContextStateInterface {
  dropZoneState: IntDragAndDropInterface;
  setDropZoneState: React.Dispatch<
    React.SetStateAction<IntDragAndDropInterface>
  >;
}

export type IntDragAndDropData = IntIntDragAndDropContextStateInterface;
