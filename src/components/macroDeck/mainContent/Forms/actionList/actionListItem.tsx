import React from "react";
import * as Styled from "./actionList.styles";
import { Trash2 } from "react-bootstrap-icons";

import {
  useActions,
  useAppData,
  useDragDropActions
} from "../../../../../hooks";
import SubActionParser from "./subActionParser/subActionParser";
import { IntActions } from "../../../../../types";

interface IActionListItem {
  action: IntActions;
}

const ActionListItem: React.FC<IActionListItem> = ({ action }) => {
  const { appState } = useAppData();
  const { activateAction, deleteAction } = useActions();
  const { allowDrop, itemDrop, dragDropRef } = useDragDropActions(action._id);
  const actionId = appState.active?.actionId;

  const handleSelectActionSet = (_id: string): void => {
    activateAction(_id);
  };

  const handleDeleteAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _id: string
  ): void => {
    e.stopPropagation();
    deleteAction(_id);
  };

  return (
    <Styled.ActionListItem
      data-testid="action-list__action-item-activate"
      draggable={true}
      isActive={action._id === actionId}
      key={action._id}
      onClick={() => handleSelectActionSet(action._id)}
      onDragOver={allowDrop}
      onDrop={e => itemDrop(e, action._id)}
      ref={dragDropRef}
    >
      <Styled.ActionListItemInfo>
        <div>{action.action}</div>
        <div> | </div>
        <SubActionParser action={action} />
      </Styled.ActionListItemInfo>

      <Styled.ActionListItemButton
        data-testid="action-list__action-item-delete"
        onClick={(e: any) => handleDeleteAction(e, action._id)}
      >
        <Trash2 size={16} />
      </Styled.ActionListItemButton>
    </Styled.ActionListItem>
  );
};

export default ActionListItem;
