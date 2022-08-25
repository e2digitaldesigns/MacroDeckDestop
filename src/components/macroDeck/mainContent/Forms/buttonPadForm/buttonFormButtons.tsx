import React from "react";
import { useButton } from "../../../../../hooks";
// import * as Styled from "./buttonForm.styles";
import _isEqual from "lodash/isEqual";

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

const ButtonFormButtons: React.FC<IntButtonFormButtons> = ({
  defaultElements,
  handleFormSubmit,
  handleResetButtonDefault,
  handleRevertButtonSaved,
  isDisabled,
  isVisible,
  state
}) => {
  const { getActiveButton } = useButton();
  const buttonPad = getActiveButton();
  const revertToSavedDisabled = isDisabled || _isEqual(buttonPad, state);
  const resetToDefaultDisabled = !!(
    isDisabled ||
    (buttonPad && isDefaultMatch(defaultElements, state))
  );

  const isSaveDisabled = _isEqual(state, buttonPad) || isDisabled;

  if (!isVisible) return <div data-testid="button_form_buttons__submit_null" />;

  return (
    <div>
      <button
        data-testid="button_form__submit"
        disabled={isSaveDisabled}
        onClick={handleFormSubmit}
      >
        Save
      </button>

      <button
        data-testid="button_form__revert"
        disabled={revertToSavedDisabled}
        onClick={handleRevertButtonSaved}
      >
        Revert to Saved
      </button>

      <button
        data-testid="button_form__reset"
        disabled={resetToDefaultDisabled}
        onClick={handleResetButtonDefault}
      >
        Reset to Default
      </button>
    </div>
  );
};

export default ButtonFormButtons;
