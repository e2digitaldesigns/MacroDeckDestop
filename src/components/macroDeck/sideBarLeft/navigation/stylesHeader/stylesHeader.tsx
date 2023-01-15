import React from "react";
import { useDropZone, useStyles } from "../../../../../hooks";
import * as Styled from "./stylesHeader.styles";
import MacroDeckIcon from "../../../../../utils/icons/macroDeckIcons";
import { DragAndDropDataTypes } from "../../../../../types";

const StylesHeader: React.FC = () => {
  const { createStyle, styleCount } = useStyles();
  const { dropZoneState } = useDropZone();

  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  const handleDrop = async (ev: any) => {
    const buttonPadNum = ev.dataTransfer.getData(
      DragAndDropDataTypes.OriginPadNumber
    );
    const pageId = ev.dataTransfer.getData(DragAndDropDataTypes.PageId);
    createStyle(buttonPadNum, pageId);
  };

  return (
    <Styled.StylesHeader
      active={dropZoneState.dropZones.styleHeader}
      data-testid="sidebar_style_header__component"
      onDragOver={e => allowDrop(e)}
      onDrop={e => handleDrop(e)}
    >
      <Styled.StylesHeaderIconHolder
        active={dropZoneState.dropZones.styleHeader}
      >
        <MacroDeckIcon icon="Grid" />
      </Styled.StylesHeaderIconHolder>
      <div>
        <div>
          Available Styles{" "}
          <Styled.StylesHeaderCount>({styleCount()})</Styled.StylesHeaderCount>
          <br />
          <Styled.StylesHeaderMessage>
            Drop Button here 2 save style.
          </Styled.StylesHeaderMessage>
        </div>
      </div>
    </Styled.StylesHeader>
  );
};

export default StylesHeader;
