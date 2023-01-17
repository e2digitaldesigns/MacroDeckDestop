import React from "react";
import _upperFirst from "lodash/upperFirst";
import _map from "lodash/map";
import _range from "lodash/range";
import _toNumber from "lodash/toNumber";
import * as Styled from "../../actionForm.styles";

import { IntActions } from "../../../../../../../types/globalContextType";
import SETTINGS from "../../../../../../../settings/system.json";
// import { SelectField } from "../../../../../../../../theme";

export interface IntFormFieldNumbersProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  seconds?: boolean;
  state: IntActions;
}

const FormFieldNumbers: React.FC<IntFormFieldNumbersProps> = ({
  name,
  onChange,
  seconds = false,
  state
}) => {
  const range = _range(0.5, SETTINGS.MAX_DELAY_SECONDS, 0.5);
  const value = _toNumber(state[name as keyof IntActions]);

  return (
    <>
      <Styled.Label
        data-testid="form_field_numberField__label"
        htmlFor="action"
      >
        {_upperFirst(name)}:
      </Styled.Label>

      <Styled.SelectField
        data-testid="form_field_numberField__input"
        name={name}
        onChange={onChange}
        value={value}
      >
        {_map(range, (m: number) => (
          <option
            data-testid="form_field_numberField__options"
            key={m}
            value={seconds ? m * 1000 : m}
          >
            {m.toFixed(1)} seconds
          </option>
        ))}
      </Styled.SelectField>
    </>
  );
};

export default FormFieldNumbers;
