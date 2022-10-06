import React from "react";
import _upperFirst from "lodash/upperFirst";
import { IntActions } from "../../../../../../../types/globalContextType";
import * as Styled from "../../actionForm.styles";

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
    <Styled.Label htmlFor="action">{_upperFirst(name)}:</Styled.Label>

    <textarea
      data-testid="form_field_textArea__input"
      name={name}
      value={state?.[name as keyof IntActions]}
      onChange={e => onChange(e)}
    ></textarea>
  </>
);

export default FormFieldTextArea;
