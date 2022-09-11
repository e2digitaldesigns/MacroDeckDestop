import React from "react";
import _upperFirst from "lodash/upperFirst";
import { IntActions } from "../../../../../../../../types/globalContextType";

export interface IntFormFieldTextAreaProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  state: IntActions;
}

const FormFieldTextArea: React.FC<IntFormFieldTextAreaProps> = ({
  name,
  onChange,
  state
}) => (
  <>
    <div>
      <label data-testid="form_field_textArea__label" htmlFor={name}>
        {_upperFirst(name)}:
      </label>

      <textarea
        data-testid="form_field_textArea__input"
        name={name}
        value={state?.[name as keyof IntActions]}
        onChange={e => onChange(e)}
      ></textarea>
    </div>
  </>
);

export default FormFieldTextArea;
