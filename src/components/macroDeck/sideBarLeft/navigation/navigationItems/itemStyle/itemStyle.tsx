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
        <MacroDeckIcon icon={"Grid"} />
      </Styled.Drag>

      <Styled.InnerGrid data-testid="cccc">
        <div>
          <MacroDeckIcon color={data.iconColor} icon={data.icon} />
        </div>
        <div>
          <MacroDeckIcon color={data.textColor} icon="PenTool" />
        </div>
        <div>
          <MacroDeckIcon color={data.bgColor} icon="Droplet" />
        </div>
      </Styled.InnerGrid>

      <Styled.Remove onClick={handleStyleDelete}>
        <MacroDeckIcon icon="Trash2" />
      </Styled.Remove>
    </Styled.ItemStyle>
  );
};

export default ItemStyle;
