import React from "react";
import {
  Clipboard2PlusFill,
  PlusSquareFill,
  TrashFill
} from "react-bootstrap-icons";
import { useAppData, useButton, useDropZone } from "../../../../hooks";
import {
  ButtonPadGridCopyStateType,
  DragAndDropDataTypes,
  DragAndDropOptions,
  IntAppData,
  IntButtonPads
} from "../../../../types";
// import { AddBox, Delete, Edit, FileCopy, Restore } from "@material-ui/icons";
// import Iconic from "../../../../../utils/icons/icons";
import * as Styled from "./buttonPadParser.style";
import _cloneDeep from "lodash/cloneDeep";

interface IntButtonPadParser {
  buttonPadNumber: number;
  copyState: ButtonPadGridCopyStateType;
  handleButtonCopy: (buttonPad: IntButtonPads) => void;
}

const ButtonPadParser: React.FC<IntButtonPadParser> = ({
  buttonPadNumber,
  copyState,
  handleButtonCopy
}) => {
  const [isDragOver, setIsdragOver] = React.useState<boolean>(false);
  const appData: IntAppData = useAppData();
  const { dropZoneState, setDropZoneState } = useDropZone();
  const {
    activateButtonPad,
    addStyleToButtonPad,
    createButtonPad,
    deleteButtonPad,
    overWriteButtonPad,
    swapButtonPad,
    readButtonPad,
    pasteButtonPad
  } = useButton();

  const buttonPad = readButtonPad(buttonPadNumber);
  const activeButtonPadId = appData.appState.active.buttonPadId;
  const buttonPadRef = React.useRef<any>(null);

  React.useEffect(() => {
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      const dropZoneStateClone = _cloneDeep(dropZoneState);
      dropZoneStateClone.dropZones.buttonPads = true;
      dropZoneStateClone.dropZones.styleHeader = true;
      setDropZoneState(dropZoneStateClone);

      if (event?.dataTransfer?.setData) {
        const dndAction = event.ctrlKey
          ? DragAndDropOptions.CopyButtonPad
          : DragAndDropOptions.SwapButtonPad;

        event.dataTransfer.setData(DragAndDropDataTypes.Action, dndAction);

        event.dataTransfer.setData(
          DragAndDropDataTypes.PageId,
          appData?.appState?.active?.pageId
        );

        event.dataTransfer.setData(
          DragAndDropDataTypes.OriginPadNumber,
          buttonPadNumber.toString()
        );
      }
    };

    const handleDragEnd = () => {
      const dropZoneStateClone = _cloneDeep(dropZoneState);
      dropZoneStateClone.dropZones.buttonPads = false;
      dropZoneStateClone.dropZones.styleHeader = false;
      setDropZoneState(dropZoneStateClone);
    };

    let buttonPadRefCleanUp = buttonPadRef.current;
    buttonPadRefCleanUp?.addEventListener("dragstart", handleDragStart);
    buttonPadRefCleanUp?.addEventListener("dragend", handleDragEnd);

    return () => {
      buttonPadRefCleanUp?.removeEventListener("dragstart", handleDragStart);
      buttonPadRefCleanUp?.removeEventListener("dragend", handleDragEnd);
      buttonPadRefCleanUp = null;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonPadRef, buttonPadNumber]);

  const handleDrop = async (ev: any, destinationPadNumber: number) => {
    setIsdragOver(false);
    const dndAction = ev.dataTransfer.getData(DragAndDropDataTypes.Action);

    switch (dndAction) {
      case DragAndDropOptions.StyleButtonPad:
        addStyleToButtonPad(
          ev.dataTransfer.getData(DragAndDropDataTypes.StyleId),
          appData?.appState?.active?.pageId,
          buttonPadNumber
        );
        break;

      case DragAndDropOptions.CopyButtonPad:
        if (!ev.ctrlKey) return;
        overWriteButtonPad(
          parseInt(
            ev.dataTransfer.getData(DragAndDropDataTypes.OriginPadNumber)
          ),
          destinationPadNumber
        );
        break;

      case DragAndDropOptions.SwapButtonPad:
        swapButtonPad(
          parseInt(
            ev.dataTransfer.getData(DragAndDropDataTypes.OriginPadNumber)
          ),
          destinationPadNumber
        );
        break;

      default:
        break;
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsdragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsdragOver(false);
  };

  const handleButtonCreate = (e: React.DragEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    createButtonPad(buttonPadNumber);
  };

  const handleButtonActivate = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    buttonPad && activateButtonPad(buttonPad._id);
  };

  const handleDeleteButton = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    buttonPad && deleteButtonPad(buttonPad._id);
  };

  const handlePasteToButton = (): void => {
    pasteButtonPad(buttonPad, copyState);
  };

  if (!buttonPadNumber) return <Styled.ButtonPadNone />;

  if (!buttonPad)
    return (
      <Styled.ButtonPadEmpty onClick={handleButtonCreate}>
        <PlusSquareFill />
      </Styled.ButtonPadEmpty>
    );

  return (
    <Styled.ButtonPad
      bgColor={buttonPad?.bgColor}
      draggable={buttonPad?._id ? true : false}
      isDropZone={dropZoneState.dropZones.buttonPads}
      isActive={buttonPad?._id === activeButtonPadId}
      onClick={handleButtonActivate}
      onDragLeave={e => handleDragLeave(e)}
      onDragOver={e => handleDragOver(e)}
      onDrop={e => handleDrop(e, buttonPadNumber)}
      ref={buttonPadRef}
    >
      <Styled.ButtonPadOptionDelete
        data-testid="button_pad_parser__option-delete"
        onClick={e => handleDeleteButton(e)}
      >
        <TrashFill />
      </Styled.ButtonPadOptionDelete>

      <Styled.ButtonPadOptionEdit
        data-testid="button_pad_parser__option-edit"
        onClick={e => handleButtonActivate(e)}
      >
        <Clipboard2PlusFill />
      </Styled.ButtonPadOptionEdit>

      <Styled.ButtonPadOptionCopy
        data-testid="button_pad_parser__option-copy"
        onClick={() => handleButtonCopy(buttonPad)}
      >
        <Clipboard2PlusFill />
      </Styled.ButtonPadOptionCopy>

      <Styled.ButtonPadOptionPaste
        data-testid="button_pad_parser__option-paste"
        onClick={handlePasteToButton}
      >
        <Clipboard2PlusFill />
      </Styled.ButtonPadOptionPaste>

      <Styled.ButtonPadIcon>{buttonPad?.icon}</Styled.ButtonPadIcon>

      <Styled.ButtonPadText
        color={buttonPad?.textColor}
        data-testid="button_pad_parser__text"
      >
        {isDragOver ? "Drop Here" : buttonPad?.text}
      </Styled.ButtonPadText>

      {/* <div onClick={() => handleButtonCopy(buttonPad)}>copy</div>
      <div onClick={handlePasteToButton}>paste</div>
      <div onClick={e => handleDeleteButton(e)}>delete</div> */}
    </Styled.ButtonPad>
  );
};

export default ButtonPadParser;
