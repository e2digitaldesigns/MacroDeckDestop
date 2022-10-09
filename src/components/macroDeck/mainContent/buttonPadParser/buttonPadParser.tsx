import React from "react";
import {
  Clipboard2PlusFill,
  PencilSquare,
  XSquareFill
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
import MacroDeckIcon from "../../../../utils/icons/macroDeckIcons";
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
  const [isHover, setIsHover] = React.useState(false);
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
    dragOver();
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
      draggable={buttonPad?._id ? true : false}
      isDropZone={dropZoneState.dropZones.buttonPads}
      isActive={buttonPad?._id === activeButtonPadId}
      isEmpty={buttonPad?._id ? false : true}
      onClick={handleButtonActivate}
      onDragLeave={e => dragLeave(e)}
      onDragOver={e => handleDragOver(e)}
      onDrop={e => itemDrop(e, buttonPadNumber)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={dragDropRef}
    >
      {buttonPad?._id && (
        <>
          {isHover && (
            <>
              <Styled.ButtonPadOptionDelete
                data-testid="button_pad_parser__option-delete"
                onClick={e => handleDeleteButton(e)}
              >
                <XSquareFill />
              </Styled.ButtonPadOptionDelete>

              <Styled.ButtonPadOptionCopy
                data-testid="button_pad_parser__option-edit"
                onClick={() => handleButtonCopy(buttonPad)}
              >
                <PencilSquare />
              </Styled.ButtonPadOptionCopy>

              <Styled.ButtonPadOptionPaste
                data-testid="button_pad_parser__option-paste"
                onClick={handlePasteToButton}
              >
                <Clipboard2PlusFill />
              </Styled.ButtonPadOptionPaste>
            </>
          )}

          <Styled.ButtonPadIcon>
            <MacroDeckIcon
              color={buttonPad.iconColor}
              data-testid="button_pad_parser__icon"
              icon={buttonPad.icon}
              size={32}
            />
          </Styled.ButtonPadIcon>
        </>
      )}

      {!buttonPad && (
        <Styled.ButtonPadIconPlus
          data-testid="ButtonPadIconPlus"
          onClick={handleButtonCreate}
        >
          <Styled.ButtonPadIcon>
            <MacroDeckIcon
              color="#444"
              data-testid="button_pad_parser__icon"
              icon="PlusSquare"
              size={32}
            />
          </Styled.ButtonPadIcon>
        </Styled.ButtonPadIconPlus>
      )}

      {buttonPad && (
        <Styled.ButtonPadText
          color={buttonPad?.textColor}
          data-testid="button_pad_parser__text"
        >
          {isDragOver ? "Drop Here" : buttonPad?.text}
        </Styled.ButtonPadText>
      )}
    </Styled.ButtonPad>
  );
};

export default ButtonPadParser;
