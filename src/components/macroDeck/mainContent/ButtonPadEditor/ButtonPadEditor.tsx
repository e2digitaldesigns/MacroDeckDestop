import React from "react";
import {
  useButton,
  useDragDropButtonPads,
  useDropZone
} from "../../../../hooks";
import ButtonPadForm from "../Forms/buttonPadForm/buttonPadForm";
import SETTINGS from "../../../../settings/system.json";
import * as Styled from "./ButtonPadEditor.style";
import { IntButtonPads } from "../../../../types";
import {
  Clipboard2PlusFill,
  PlusSquareFill,
  TrashFill
} from "react-bootstrap-icons";
import MacroDeckIcon from "../../../../utils/icons/macroDeckIcons";
import IconSelector from "./iconSelector/iconSelector";
import ButtonPadMenu from "./ButtonPadMenu/ButtonPadMenu";
import ActionManager from "./ActionManager/ActionManager";

const ButtonPadEditor: React.FC = () => {
  const {
    getActiveButton,
    getActiveButtonIndex,
    playButtonPad,
    updateButtonPad
  } = useButton();

  const defaultButtonPad: IntButtonPads = SETTINGS.DEFAULT_STATE.BUTTON_PADS;
  const buttonPad = getActiveButton() || defaultButtonPad;
  const { dropZoneState } = useDropZone();
  const [newIcon, setNewIcon] = React.useState<string>("");

  const { dragDropRef, dragLeave, dragOver, isDragOver, itemDrop } =
    useDragDropButtonPads(buttonPad.buttonPadNum);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    dragOver();
  };

  const handleSelectIcon = (icon: string) => {
    setNewIcon(icon);
  };

  return (
    <Styled.ButtonPadEditor>
      <section>
        <Styled.ButtonPadWrapper
          bgColor={buttonPad?.bgColor}
          isDropZone={dropZoneState.dropZones.buttonPads}
          isEmpty={buttonPad?._id ? false : true}
          onDragLeave={e => dragLeave(e)}
          onDragOver={e => handleDragOver(e)}
          onDrop={e => itemDrop(e, buttonPad.buttonPadNum)}
          ref={dragDropRef}
        >
          <Styled.ButtonPadIcon>
            <MacroDeckIcon
              color={buttonPad.iconColor}
              data-testid="button_pad_parser__icon"
              icon={buttonPad.icon}
              size={64}
            />
          </Styled.ButtonPadIcon>

          <Styled.ButtonPadText
            color={!isDragOver ? buttonPad?.textColor : undefined}
          >
            {isDragOver ? "Drop Here" : buttonPad?.text}
          </Styled.ButtonPadText>
        </Styled.ButtonPadWrapper>

        <div>
          <ButtonPadForm newIcon={newIcon} />
        </div>
      </section>

      <Styled.LeftSectionWrapper>
        <ButtonPadMenu />
        {/* <IconSelector handleSelectIcon={handleSelectIcon} /> */}
        <ActionManager />
      </Styled.LeftSectionWrapper>
    </Styled.ButtonPadEditor>
  );
};

export default ButtonPadEditor;
