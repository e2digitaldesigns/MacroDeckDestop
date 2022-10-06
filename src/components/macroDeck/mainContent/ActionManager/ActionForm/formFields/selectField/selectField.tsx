import React from "react";
import _map from "lodash/map";
import _upperFirst from "lodash/upperFirst";
// import { SelectField } from "../../../../../../../../theme";

interface subActionMapProps {
  [key: string]: any[];
}

const subActionMap: subActionMapProps = {
  md: [
    "mdHome",
    "mdPage",
    "mdProfile",
    "mdProfileSelector",
    "mdReset",
    "mdSettings"
  ],
  obs: [
    "obsLayerHide",
    "obsLayerShow",
    "obsLayerToggle",
    "obsRecordStart",
    "obsRecordStop",
    "obsRecordToggle",
    "obsRecordPause",
    "obsRecordResume",
    "obsSceneChange",
    "obsStreamStart",
    "obsStreamStop",
    "obsStreamToggle"
  ],
  spotify: [
    "spotifyNext",
    "spotifyPause",
    "spotifyPrevious",
    "spotifyStart",
    "spotifyStop"
  ]
};

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
      <div>
        <label data-testid="form_field_selectField__label" htmlFor={name}>
          {_upperFirst(name)}:
        </label>

        <select
          data-testid="form_field_selectField__input"
          name="subAction"
          onChange={e => onChange(e)}
          value={subAction}
        >
          {subAction && (
            <option
              data-testid="form_field_selectField__option-choose"
              value=""
            >
              Choose
            </option>
          )}
          {_map(subActionMap?.[name], m => (
            <option
              data-testid="form_field_selectField__option"
              key={m}
              value={m}
            >
              {m}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormFieldSelect;
