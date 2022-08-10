import React from "react";
import { useStyles } from "../../../../../../hooks";
import {
  DragAndDropDataTypes,
  DragAndDropOptions,
  IntStyles
} from "../../../../../../types";
import * as Styled from "../navigationItems.style";

import MacroDeckIcon from "../../../../../../utils/icons/macroDeckIcons";

interface IntItemStyle {
  data: IntStyles;
}
const ItemStyle: React.FC<IntItemStyle> = ({ data }) => {
  const { deleteStyle } = useStyles();
  const styleItemRef = React.useRef<HTMLDivElement>(null);
  const iconSize = 14;

  React.useEffect(() => {
    const handleDragStart = (ev: any) => {
      ev.dataTransfer.setData(
        DragAndDropDataTypes.Action,
        DragAndDropOptions.StyleButtonPad
      );
      ev.dataTransfer.setData(DragAndDropDataTypes.StyleId, data._id);
    };

    styleItemRef?.current?.addEventListener("dragstart", handleDragStart);
  }, [styleItemRef, data._id]);

  const handleStyleDelete = () => {
    deleteStyle(data._id);
  };

  return (
    <Styled.ItemStyle draggable={true} ref={styleItemRef}>
      <Styled.Drag>
        <MacroDeckIcon icon={"Grid"} size={iconSize} />
      </Styled.Drag>
      <div>
        <MacroDeckIcon
          color={data.iconColor}
          icon={data.icon}
          size={iconSize}
        />
      </div>
      <div>
        <MacroDeckIcon color={data.textColor} icon="PenTool" size={iconSize} />
      </div>
      <div>
        <MacroDeckIcon color={data.bgColor} icon="Droplet" size={iconSize} />
      </div>

      <div />

      <Styled.Remove onClick={handleStyleDelete}>
        <MacroDeckIcon icon="Trash2" size={iconSize} />
      </Styled.Remove>
    </Styled.ItemStyle>
  );
};

export default ItemStyle;
