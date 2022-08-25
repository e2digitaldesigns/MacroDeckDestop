import React, { useEffect, useState } from "react";
import { useAppData, useButton, useGlobalData } from "../../../../../hooks";
import SETTINGS from "../../../../../settings/system.json";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import _replace from "lodash/replace";
import _truncate from "lodash/truncate";

// import * as Styled from "./buttonForm.styles";
// import IconSelector from "./iconSelector/iconSelector";
import ButtonFormButtons from "./buttonFormButtons";
import { IntButtonPads } from "../../../../../types";

export interface IntButtonForm {}

const ButtonPadForm: React.FC<IntButtonForm> = () => {
  const globalData = useGlobalData();
  const { appState, setAppState } = useAppData();
  const {
    getActiveButton,
    getActiveButtonIndex,
    playButtonPad,
    updateButtonPad
  } = useButton();
  const defaultButtonPad: IntButtonPads = SETTINGS.DEFAULT_STATE.BUTTON_PADS;
  const buttonPad = getActiveButton() || defaultButtonPad;
  const buttonPadIndex = getActiveButtonIndex();
  const [state, setState] = useState(defaultButtonPad);

  const isIconSelectVisible = appState.iconSelector.isVisible;
  const isDisabled = !appState?.active?.buttonPadId;

  const defaultButtonPadElements: Partial<IntButtonPads> = {
    textColor: defaultButtonPad.textColor,
    iconColor: defaultButtonPad.iconColor,
    bgColor: defaultButtonPad.bgColor
  };

  useEffect(() => {
    if (buttonPad && !_isEqual(buttonPad, state)) {
      setState(state => buttonPad);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalData.state.buttonPads[buttonPadIndex]]);

  useEffect(() => {
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

  const handleOpenIconSelector = () => {
    // const newAppState = _cloneDeep(appState);
    // newAppState.iconSelector.isVisible = true;
    // setAppState({ ...newAppState });
  };

  const handleResetButtonDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState({ ...globalData.state.buttonPads[buttonPadIndex] });
  };

  const handleRevertButtonSaved = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState({ ...state, ...buttonPad });
  };

  const handleSelectIcon = (icon: string) => {
    setState({ ...state, icon });
  };

  return (
    <>
      <div>
        <div>
          <div>
            <label htmlFor="text">Text:</label>

            <input
              data-testid="button_form__text-field-text"
              disabled={isDisabled}
              name="text"
              onChange={e => handleFormChange(e)}
              type="text"
              value={state.text}
            />

            <input
              disabled={isDisabled}
              data-testid="button_form__text-field-text-color"
              name="textColor"
              onChange={e => handleFormChange(e)}
              type="color"
              value={state.textColor}
            />
          </div>

          <div>
            <label htmlFor="icon">Icon:</label>
            {/* <IconSelector
              handleSelectIcon={handleSelectIcon}
              isVisible={isIconSelectVisible}
            /> */}

            {!isIconSelectVisible && (
              <input
                data-testid="button_form__text-field-icon"
                onClick={handleOpenIconSelector}
                readOnly
                type="text"
                value={state.icon}
              />
            )}

            <input
              data-testid="button_form__icon-color"
              disabled={isDisabled}
              name="iconColor"
              onChange={e => handleFormChange(e)}
              type="color"
              value={state.iconColor}
            />
          </div>

          {!isIconSelectVisible && (
            <div>
              <label htmlFor="bgColor">BG Color:</label>
              <input
                data-testid="button_form__bg-color"
                disabled={isDisabled}
                name="bgColor"
                onChange={e => handleFormChange(e)}
                type="color"
                value={state?.bgColor || defaultButtonPad.bgColor}
              />
            </div>
          )}
        </div>

        <ButtonFormButtons
          defaultElements={defaultButtonPadElements}
          handleFormSubmit={handleFormSubmit}
          handleResetButtonDefault={handleResetButtonDefault}
          handleRevertButtonSaved={handleRevertButtonSaved}
          isDisabled={isDisabled}
          isVisible={!isIconSelectVisible}
          state={state}
        />

        <button onClick={handleFormSubmit}>submit</button>
      </div>

      <button onClick={() => playButtonPad()}>Play</button>
    </>
  );
};

export default ButtonPadForm;
