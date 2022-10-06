import React from "react";
import _upperFirst from "lodash/upperFirst";
import { IntActions } from "../../../../../../../types/globalContextType";

interface IntKeyMap {
  [key: string]: string;
}

const keyMapNumPad: IntKeyMap = {
  Numpad0: "numpad_0",
  Numpad1: "numpad_1",
  Numpad2: "numpad_2",
  Numpad3: "numpad_3",
  Numpad4: "numpad_4",
  Numpad5: "numpad_5",
  Numpad6: "numpad_6",
  Numpad7: "numpad_7",
  Numpad8: "numpad_8",
  Numpad9: "numpad_9"
};

export interface IntFormFieldKeyProps {
  name: string;
  onChange: (text: string) => void;
  state: IntActions;
}

const FormFieldKey: React.FC<IntFormFieldKeyProps> = ({
  name,
  onChange,
  state
}) => {
  const handleKeyParser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const code = e.nativeEvent.code,
      key = e.nativeEvent.key;

    const value = code.startsWith("Numpad") ? keyMapNumPad[code] : key;
    onChange(value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <div>
        <label data-testid="form_field_keyField__label" htmlFor={name}>
          {_upperFirst(name)}:
        </label>
        <input
          data-testid="form_field_keyField__input"
          name={name}
          onKeyPress={handleKeyParser}
          onChange={handleOnChange}
          type="text"
          value={state?.[name as keyof IntActions]}
        />
      </div>
    </>
  );
};

export default FormFieldKey;
