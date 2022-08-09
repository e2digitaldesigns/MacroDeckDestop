import React from "react";
import { useStyles } from "../../../../../../hooks";
import {
  DragAndDropDataTypes,
  DragAndDropOptions,
  IntStyles
} from "../../../../../../types";
import * as Styled from "../navigationItems.style";

import {
  Grid3x3GapFill,
  Trash2Fill,
  DropletFill,
  VectorPen
} from "react-bootstrap-icons";

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
        <Grid3x3GapFill />
      </Styled.Drag>
      <div>
        <Grid3x3GapFill color={data.iconColor} />
      </div>
      <div>
        <VectorPen color={data.textColor} />
      </div>
      <div>
        <DropletFill color={data.bgColor} />
      </div>

      <div />

      <Styled.Remove onClick={handleStyleDelete}>
        <Trash2Fill />
      </Styled.Remove>
    </Styled.ItemStyle>
  );
};

export default ItemStyle;
