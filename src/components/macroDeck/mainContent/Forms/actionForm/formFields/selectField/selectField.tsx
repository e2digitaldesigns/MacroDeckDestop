import React from "react";
import _map from "lodash/map";
import _upperFirst from "lodash/upperFirst";
// import { SelectField } from "../../../../../../../../theme";

import * as Styled from "../../actionForm.styles";
import { subActionMap } from "../../../../../../../types";

export interface IntFormFieldSelectProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  subAction: string;
}

const FormFieldSelect: React.FC<IntFormFieldSelectProps> = ({
  name,
  onChange,
  subAction
}) => {
  return (
    <>
      <Styled.Label htmlFor="action"> {_upperFirst(name)}:</Styled.Label>

      <Styled.SelectField
        data-testid="form_field_selectField__input"
        name="subAction"
        onChange={e => onChange(e)}
        value={subAction}
      >
        {subAction && (
          <option data-testid="form_field_selectField__option-choose" value="">
            Choose
          </option>
        )}
        {_map(subActionMap?.[name], m => (
          <option
            data-testid="form_field_selectField__option"
            key={m.slug}
            value={m.slug}
          >
            {m.display}
          </option>
        ))}
      </Styled.SelectField>
    </>
  );
};

export default FormFieldSelect;
