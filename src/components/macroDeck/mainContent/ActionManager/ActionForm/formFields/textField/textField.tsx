import React from "react";
import _upperFirst from "lodash/upperFirst";
import { IntActions } from "../../../../../../../types/globalContextType";

export interface IntFormFieldTextProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: IntActions;
}

const FormFieldText: React.FC<IntFormFieldTextProps> = ({
  name,
  onChange,
  state
}) => (
  <>
    <div>
      <label data-testid="form_field_textField__label" htmlFor={name}>
        {_upperFirst(name)}:
      </label>
      <input
        data-testid="form_field_textField__input"
        name={name}
        onChange={e => onChange(e)}
        type="text"
        value={state?.[name as keyof IntActions]}
      />
    </div>
  </>
);

export default FormFieldText;
