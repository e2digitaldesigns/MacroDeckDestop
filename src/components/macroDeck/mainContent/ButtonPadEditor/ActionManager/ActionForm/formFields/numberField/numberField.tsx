import React from "react";
import _upperFirst from "lodash/upperFirst";
import _map from "lodash/map";
import _range from "lodash/range";
import _toNumber from "lodash/toNumber";

import { IntActions } from "../../../../../../../../types/globalContextType";
import SETTINGS from "../../../../../../../../settings/system.json";
// import { SelectField } from "../../../../../../../../theme";

export interface IntFormFieldNumbersProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  seconds: boolean;
  state: IntActions;
}

const FormFieldNumbers: React.FC<IntFormFieldNumbersProps> = ({
  name,
  onChange,
  seconds,
  state
}) => {
  const range = _range(0, SETTINGS.MAX_DELAY_SECONDS, 0.5);
  const value = _toNumber(state[name as keyof IntActions]);

  return (
    <>
      <div>
        <label data-testid="form_field_numberField__label" htmlFor={name}>
          {_upperFirst(name)}:
        </label>
        <select
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
              {seconds ? m * 1000 : m}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormFieldNumbers;
