import React from "react";
import _map from "lodash/map";
import _range from "lodash/range";
import { useActions, useAppData } from "../../../../../../hooks";
import { IntActions } from "../../../../../../types/globalContextType";
import SubActionParser from "./subActionParser/subActionParser";
import * as Styled from "./actionList.styles";
import { Trash2 } from "react-bootstrap-icons";

const ActionList: React.FC<{}> = () => {
  const { appState } = useAppData();
  const actionId = appState.active?.actionId;
  const { activateAction, createAction, getActions, deleteAction } =
    useActions();
  const actions: IntActions[] = getActions();

  const handleSelectActionSet = (_id: string): void => {
    activateAction(_id);
  };

  const handleCreateAction = (): void => {
    createAction();
  };

  const handleDeleteAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _id: string
  ): void => {
    e.stopPropagation();
    deleteAction(_id);
  };

  const defaultCount = 8;
  const plCount =
    actions.length >= defaultCount ? 0 : defaultCount - actions.length;

  return (
    <>
      <Styled.ActionListWrapper>
        <Styled.ActionListWrapperScroll>
          <ul>
            {actions &&
              _map(
                actions,
                (m: IntActions): React.ReactElement => (
                  <Styled.ActionListItem
                    data-testid="action-list__action-item-activate"
                    isActive={m._id === actionId}
                    key={m._id}
                    onClick={() => handleSelectActionSet(m._id)}
                  >
                    <Styled.ActionListItemInfo>
                      <div>{m.action}</div>
                      <div> | </div>
                      <SubActionParser action={m} />
                    </Styled.ActionListItemInfo>

                    <Styled.ActionListItemButton
                      data-testid="action-list__action-item-delete"
                      onClick={(e: any) => handleDeleteAction(e, m._id)}
                    >
                      <Trash2 size={16} />
                    </Styled.ActionListItemButton>
                  </Styled.ActionListItem>
                )
              )}

            {_map(_range(plCount), (index: number) => (
              <Styled.ActionListItem key={index} />
            ))}
          </ul>
        </Styled.ActionListWrapperScroll>
      </Styled.ActionListWrapper>

      <Styled.ActionListNewButton
        data-testid="action-list__action-item-new"
        disabled={!appState?.active?.buttonPadId}
        onClick={handleCreateAction}
      >
        New Action
      </Styled.ActionListNewButton>
    </>
  );
};

export default ActionList;
