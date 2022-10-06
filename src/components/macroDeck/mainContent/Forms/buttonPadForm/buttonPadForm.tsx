import React from "react";
import { useAppData, useButton, useGlobalData } from "../../../../../hooks";
import SETTINGS from "../../../../../settings/system.json";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";
import _replace from "lodash/replace";
import _truncate from "lodash/truncate";

// import * as Styled from "./buttonForm.styles";
// import IconSelector from "./iconSelector/iconSelector";

import * as FormStyles from "../../../../../styles/form.styles";
import ButtonFormButtons from "./buttonFormButtons";
import { IntButtonPads } from "../../../../../types";

export interface IntButtonForm {
  newIcon?: string;
}

const ButtonPadForm: React.FC<IntButtonForm> = ({ newIcon }) => {
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
  const [state, setState] = React.useState(defaultButtonPad);

  const isIconSelectVisible = appState.iconSelector.isVisible;
  const isDisabled = !appState?.active?.buttonPadId;

  const defaultButtonPadElements: Partial<IntButtonPads> = {
    textColor: defaultButtonPad.textColor,
    iconColor: defaultButtonPad.iconColor,
    bgColor: defaultButtonPad.bgColor
  };

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

  React.useEffect(() => {
    console.log(56, newIcon);
    newIcon && setState({ ...state, icon: newIcon });
  }, [newIcon]);

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
    setState({ ...buttonPad, ...defaultButtonPadElements });
    buttonPad &&
      state &&
      updateButtonPad({ ...buttonPad, ...defaultButtonPadElements });
  };

  const handleRevertButtonSaved = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setState({ ...buttonPad });
  };

  const handleSelectIcon = (icon: string) => {
    setState({ ...state, icon });
  };

  return (
    <>
      <div>
        <div>
          <FormStyles.FieldSet>
            <div>
              <FormStyles.TextField
                data-testid="button_form__text-field-text"
                disabled={isDisabled}
                name="text"
                onChange={e => handleFormChange(e)}
                placeholder="Button Text"
                type="text"
                value={state.text}
              />

              <FormStyles.ColorField
                disabled={isDisabled}
                data-testid="button_form__text-field-text-color"
                name="textColor"
                onChange={e => handleFormChange(e)}
                type="color"
                value={state.textColor}
              />
            </div>
          </FormStyles.FieldSet>

          <FormStyles.FieldSet>
            <div>
              <FormStyles.ColorField
                data-testid="button_form__bg-color"
                disabled={isDisabled}
                name="bgColor"
                onChange={e => handleFormChange(e)}
                type="color"
                value={state?.bgColor || defaultButtonPad.bgColor}
              />
            </div>{" "}
          </FormStyles.FieldSet>
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
      </div>

      {/* <button onClick={() => playButtonPad()}>Play</button> */}
    </>
  );
};

export default ButtonPadForm;
