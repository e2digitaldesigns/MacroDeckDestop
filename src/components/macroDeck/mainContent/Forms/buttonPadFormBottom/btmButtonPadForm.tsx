import React from "react";
import {
  useActions,
  useAppData,
  useButton,
  useGlobalData
} from "../../../../../hooks";
import SETTINGS from "../../../../../settings/system.json";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import _replace from "lodash/replace";
import _truncate from "lodash/truncate";

import * as Styled from "./btmButtonPadForm.styles";
import { IntButtonPads } from "../../../../../types";

export interface IntButtonForm {
  newIcon: string;
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

const BtmButtonPadForm: React.FC<IntButtonForm> = ({ newIcon }) => {
  const globalData = useGlobalData();
  const { appState, setAppState } = useAppData();
  const { actionCount } = useActions();
  const {
    deleteButtonPad,
    getActiveButton,
    getActiveButtonIndex,
    playButtonPad,
    updateButtonPad
  } = useButton();
  const defaultButtonPad: IntButtonPads = SETTINGS.DEFAULT_STATE.BUTTON_PADS;
  const buttonPad = getActiveButton() || defaultButtonPad;
  const buttonPadIndex = getActiveButtonIndex();
  const [state, setState] = React.useState(defaultButtonPad);

  const defaultButtonPadElements: Partial<IntButtonPads> = {
    textColor: defaultButtonPad.textColor,
    iconColor: defaultButtonPad.iconColor,
    bgColor: defaultButtonPad.bgColor
  };

  const isDisabled = !appState?.active?.buttonPadId;
  const isPlayable = actionCount() > 0;
  const isSaveDisabled = _isEqual(state, buttonPad) || isDisabled;
  const revertToSavedDisabled = isDisabled || _isEqual(buttonPad, state);
  const resetToDefaultDisabled = !!(
    isDisabled ||
    (buttonPad && isDefaultMatch(defaultButtonPadElements, state))
  );

  React.useEffect(() => {
    console.log(64, newIcon);
    setState({ ...state, icon: newIcon });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIcon]);

  React.useEffect(() => {
    if (buttonPad && !_isEqual(buttonPad, state)) {
      setState(state => buttonPad);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalData.state.buttonPads[buttonPadIndex]]);

  React.useEffect(() => {
    buttonPad && setState(state => buttonPad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.active.buttonPadId]);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let { name, value } = event.target;
    if (name === "text") {
      value = _replace(value, new RegExp(/[^\da-zA-Z-_\s]/g), "");
      value = _truncate(value, {
        length: SETTINGS.APPLICATION.ButtonPadTextCharLength,
        omission: ""
      });
    }
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    buttonPad && state && updateButtonPad(state);
  };

  const handleResetButtonDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState({ ...buttonPad, ...defaultButtonPadElements });
    buttonPad &&
      state &&
      updateButtonPad({ ...buttonPad, ...defaultButtonPadElements });
  };

  const handleRevertButtonSaved = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState({ ...buttonPad });
  };

  const handleButtonPadDelete = () => {
    buttonPad?._id && deleteButtonPad(buttonPad._id);
  };

  const handleOpenIconSelector = () => {
    if (!appState.active.buttonPadId) return;
    const newAppState = _cloneDeep(appState);
    newAppState.iconSelector.isVisible = true;
    setAppState(newAppState);
  };

  return (
    <Styled.Wrapper>
      <Styled.FieldSet>
        <Styled.TextField
          data-testid="button_form__text-field-text"
          disabled={isDisabled}
          name="text"
          onChange={e => handleFormChange(e)}
          placeholder="Button Text"
          type="text"
          value={state.text}
        />

        <Styled.ColorField
          disabled={isDisabled}
          data-testid="button_form__text-field-text-color"
          name="textColor"
          onChange={e => handleFormChange(e)}
          type="color"
          value={state.textColor}
        />
      </Styled.FieldSet>

      <Styled.FieldSet>
        <Styled.ButtonFormTextField
          data-testid="button_form__text-field-icon"
          onClick={handleOpenIconSelector}
          readOnly
          type="text"
          value={state.icon}
        />

        <Styled.ColorField
          disabled={isDisabled}
          data-testid="button_form__text-field-text-color"
          name="iconColor"
          onChange={e => handleFormChange(e)}
          type="color"
          value={state.iconColor}
        />
      </Styled.FieldSet>

      <Styled.FieldSet>
        <Styled.ColorField
          data-testid="button_form__bg-color"
          disabled={isDisabled}
          name="bgColor"
          onChange={e => handleFormChange(e)}
          type="color"
          value={state?.bgColor || defaultButtonPad.bgColor}
        />
      </Styled.FieldSet>

      <Styled.FieldSet noGrid={true}>
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
      </Styled.FieldSet>

      <Styled.FieldSetBottom>
        <Styled.DeleteButton
          data-testid="button_form__reset"
          disabled={!isPlayable}
          onClick={handleButtonPadDelete}
        >
          Delete
        </Styled.DeleteButton>

        <Styled.PlayButton
          data-testid="button_form__reset"
          disabled={!isPlayable}
          onClick={() => playButtonPad()}
        >
          Play
        </Styled.PlayButton>
      </Styled.FieldSetBottom>
    </Styled.Wrapper>
  );
};

export default BtmButtonPadForm;
