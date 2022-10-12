import React from "react";
import _map from "lodash/map";
import _range from "lodash/range";
import { useActions, useAppData } from "../../../../../hooks";
import { IntActions } from "../../../../../types/globalContextType";
import * as Styled from "./actionList.styles";
import ActionListItem from "./actionListItem";

const ActionList: React.FC<{}> = () => {
  const { appState } = useAppData();
  const { createAction, getActions } = useActions();
  const actions: IntActions[] = getActions();

  const handleCreateAction = (): void => {
    createAction();
  };

  const defaultCount = 5;
  const plCount =
    actions.length >= defaultCount ? 0 : defaultCount - actions.length;

  return (
    <Styled.Wrapper>
      <Styled.ActionListWrapper>
        <Styled.ActionListScroll>
          <ul>
            {actions &&
              _map(
                actions,
                (theAction: IntActions): React.ReactElement => (
                  <ActionListItem key={theAction._id} action={theAction} />
                )
              )}

            {/* {_map(_range(plCount), (index: number) => (
              <Styled.ActionListItem key={index} isPlaceHolder={true} />
            ))} */}
          </ul>
        </Styled.ActionListScroll>
      </Styled.ActionListWrapper>
      <Styled.FieldSet>
        <Styled.ActionListNewButton
          data-testid="action-list__action-item-new"
          disabled={!appState?.active?.buttonPadId}
          onClick={handleCreateAction}
        >
          New Action
        </Styled.ActionListNewButton>
      </Styled.FieldSet>
    </Styled.Wrapper>
  );
};

export default ActionList;
