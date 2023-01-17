import React from "react";
import _upperFirst from "lodash/upperFirst";
import _map from "lodash/map";
import _range from "lodash/range";
import _toNumber from "lodash/toNumber";
import * as Styled from "../../actionForm.styles";

import { IntActions } from "../../../../../../../types/globalContextType";

export interface IntFormFieldRangeProps {
  displayName?: string;
  name: string;
  onChange: (e: any) => void;
  showValue?: boolean;
  state: IntActions;
}

const FormFieldRange: React.FC<IntFormFieldRangeProps> = ({
  displayName,
  name,
  onChange,
  showValue = false,
  state
}) => {
  const value = _toNumber(state[name as keyof IntActions]) || 1;

  return (
    <>
      <Styled.Label data-testid="form_field_rangeField__label" htmlFor="action">
        {_upperFirst(displayName || name)}: {showValue && value}
      </Styled.Label>

      <Styled.RangeField
        data-testid="form_field_rangeField__input"
        name={name}
        onChange={onChange}
        type="range"
        value={value}
      />
    </>
  );
};

export default FormFieldRange;
