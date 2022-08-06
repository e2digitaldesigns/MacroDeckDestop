import React from "react";
import {
  Clipboard2PlusFill,
  PlusSquareFill,
  TrashFill
} from "react-bootstrap-icons";
import {
  useAppData,
  useButton,
  useDragDropButtonPads,
  useDropZone
} from "../../../../hooks";
import {
  ButtonPadGridCopyStateType,
  IntAppData,
  IntButtonPads
} from "../../../../types";
// import { AddBox, Delete, Edit, FileCopy, Restore } from "@material-ui/icons";
// import Iconic from "../../../../../utils/icons/icons";
import * as Styled from "./buttonPadParser.style";

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
  const appData: IntAppData = useAppData();
  const { dropZoneState } = useDropZone();
  const {
    activateButtonPad,
    createButtonPad,
    deleteButtonPad,
    readButtonPad,
    pasteButtonPad
  } = useButton();

  const { dragDropRef, dragLeave, dragOver, isDragOver, itemDrop } =
    useDragDropButtonPads(buttonPadNumber);

  const buttonPad = readButtonPad(buttonPadNumber);
  const activeButtonPadId = appData.appState.active.buttonPadId;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    dragOver(e);
  };

  const handleButtonCreate = (e: React.MouseEvent<HTMLDivElement>): void => {
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

  return (
    <Styled.ButtonPad
      bgColor={buttonPad?.bgColor}
      data-testid="bbbbb"
      draggable={buttonPad?._id ? true : false}
      isDropZone={dropZoneState.dropZones.buttonPads}
      isActive={buttonPad?._id === activeButtonPadId}
      onClick={handleButtonActivate}
      onDragLeave={e => dragLeave(e)}
      onDragOver={e => handleDragOver(e)}
      onDrop={e => itemDrop(e, buttonPadNumber)}
      ref={dragDropRef}
    >
      {buttonPad?._id && (
        <>
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
        </>
      )}

      {!buttonPad && (
        <Styled.ButtonPadIconPlus>
          <PlusSquareFill />
        </Styled.ButtonPadIconPlus>
      )}

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
