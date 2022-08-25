import React from "react";
import { useGlobalData, useProfile } from "../../../../hooks";
import _cloneDeep from "lodash/clone";
import _filter from "lodash/filter";
import _map from "lodash/map";
import _range from "lodash/range";
import { buttonMapper } from "./buttonMapper";

import {
  AdjustGridButtonPadNums,
  ButtonPadGridCopyStateType,
  ButtonPadGridSize,
  ButtonPadNums,
  IntActions,
  IntButtonPads
} from "../../../../types";

import * as Styled from "./buttonPadGrid.style";
import ButtonPadParser from "./../buttonPadParser/buttonPadParser";

const ButtonPadGrid: React.FC = () => {
  const [copyState, setCopyState] =
    React.useState<ButtonPadGridCopyStateType>(undefined);
  const { state } = useGlobalData();
  const { readProfile } = useProfile();
  const profile = readProfile();

  const isGrid6x15 =
    (profile?.buttonPads &&
      AdjustGridButtonPadNums.includes(profile.buttonPads as ButtonPadNums)) ||
    false;

  const numberOfPads = isGrid6x15
    ? ButtonPadGridSize.BPGS36
    : ButtonPadGridSize.BPGS32;

  const buttonPadArray: number[] = _range(1, numberOfPads + 1);

  const buttonPadParserNumbering = (padNumber: number): number => {
    const padCount = profile?.buttonPads;

    const buttonPadNumber: number =
      padCount && buttonMapper?.[padCount]?.[padNumber]
        ? Number(buttonMapper[padCount][padNumber])
        : 0;

    return buttonPadNumber;
  };

  const handleButtonCopy = (buttonPad: IntButtonPads) => {
    const newState = _cloneDeep(state);
    const actions = _filter(
      newState.actions,
      (f: IntActions) => f.buttonPadId === buttonPad._id
    );

    setCopyState({
      buttonPad: {
        bgColor: buttonPad.bgColor,
        icon: buttonPad.icon,
        iconColor: buttonPad.iconColor,
        text: buttonPad.text,
        textColor: buttonPad.textColor
      },
      actions
    });
  };

  // if (!appState?.active?.profileId) {
  //   return <div data-testid="button_pad_grid_wrapper__null" />;
  // }

  return (
    <>
      <Styled.ButtonWrapperGrid
        data-testid="button_pad_grid_wrapper"
        isGrid6x15={isGrid6x15}
      >
        {_map(
          buttonPadArray,
          (number: number): React.ReactElement => (
            <ButtonPadParser
              key={number}
              buttonPadNumber={buttonPadParserNumbering(number)}
              copyState={copyState}
              handleButtonCopy={handleButtonCopy}
            />
          )
        )}
      </Styled.ButtonWrapperGrid>
    </>
  );
};

export default ButtonPadGrid;
