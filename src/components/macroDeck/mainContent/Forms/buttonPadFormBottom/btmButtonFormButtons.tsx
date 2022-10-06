import React from "react";
import { useActions, useButton } from "../../../../../hooks";
import * as Styled from "./btmButtonFormButtons.styles";
import * as FormStyles from "../../../../../styles/form.styles";
import _isEqual from "lodash/isEqual";
import _size from "lodash/size";

import { IntButtonPads } from "../../../../../types";
export interface IntButtonFormButtons {
  defaultElements: Partial<IntButtonPads>;
  handleFormSubmit: (e: React.MouseEvent<HTMLElement>) => void;
  handleResetButtonDefault: (e: React.MouseEvent<HTMLElement>) => void;
  handleRevertButtonSaved: (e: React.MouseEvent<HTMLElement>) => void;
  isDisabled: boolean;
  isVisible: boolean;
  state: IntButtonPads;
}

const isDefaultMatch = (
  defaultElements: Partial<IntButtonPads>,
  state: IntButtonPads
) => {
  return _isEqual(defaultElements, {
    textColor: state.textColor,
    iconColor: state.iconColor,
    bgColor: state.bgColor
  });
};

const BtmButtonFormButtons: React.FC<IntButtonFormButtons> = ({
  defaultElements,
  handleFormSubmit,
  handleResetButtonDefault,
  handleRevertButtonSaved,
  isDisabled,
  isVisible,
  state
}) => {
  const { deleteButtonPad, getActiveButton, playButtonPad } = useButton();
  const { actionCount } = useActions();
  const buttonPad = getActiveButton();
  const revertToSavedDisabled = isDisabled || _isEqual(buttonPad, state);
  const resetToDefaultDisabled = !!(
    isDisabled ||
    (buttonPad && isDefaultMatch(defaultElements, state))
  );

  const isPlayable = actionCount() > 0;
  const isSaveDisabled = _isEqual(state, buttonPad) || isDisabled;

  const handleButtonPadDelete = () => {
    buttonPad?._id && deleteButtonPad(buttonPad._id);
  };

  if (!isVisible) return <div data-testid="button_form_buttons__submit_null" />;

  return (
    <>
      <Styled.ButtonGrid>
        <Styled.ActionButton
          data-testid="button_form__submit"
          disabled={isSaveDisabled}
          onClick={handleFormSubmit}
        >
          Save
        </Styled.ActionButton>

        <Styled.ActionButton
          data-testid="button_form__revert"
          disabled={revertToSavedDisabled}
          onClick={handleRevertButtonSaved}
        >
          Revert
        </Styled.ActionButton>

        <Styled.ActionButton
          data-testid="button_form__reset"
          disabled={resetToDefaultDisabled}
          onClick={handleResetButtonDefault}
        >
          Reset
        </Styled.ActionButton>
      </Styled.ButtonGrid>

      <Styled.PlayButton
        data-testid="button_form__reset"
        disabled={!isPlayable}
        onClick={() => playButtonPad()}
      >
        Play Actions
      </Styled.PlayButton>

      <Styled.DeleteButton
        data-testid="button_form__reset"
        disabled={!isPlayable}
        onClick={handleButtonPadDelete}
      >
        Delete Button Pad
      </Styled.DeleteButton>
    </>
  );
};

export default BtmButtonFormButtons;
