import * as React from "react";
import _map from "lodash/map";
import _toNumber from "lodash/toNumber";
import {
  IntActions,
  IntPages,
  IntProfile,
  objectProps
} from "../../../../../../types";
import { usePage, useProfile } from "../../../../../../hooks";
// import { SelectField } from "../../../../../../../theme";

import * as Styled from "../actionForm.styles";

export interface MdActionParserProps {
  state: IntActions;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

type DataSetType = IntProfile | IntPages;

const pageLabel = (index: number) => {
  return `Page ${index + 1}`;
};

const MdActionParser: React.FC<MdActionParserProps> = ({ state, onChange }) => {
  const { readPages } = usePage();
  const { readProfiles } = useProfile();
  const action = state?.subAction;

  const subActionMap: objectProps = {
    mdPage: "page",
    mdProfile: "profile"
  };

  const subAction = action && subActionMap?.[action];
  const dataSet: DataSetType[] =
    subAction === subActionMap.mdPage ? readPages() : readProfiles();

  if (subAction) {
    return (
      <>
        {/* <label htmlFor={subAction}>Md Action:</label> */}
        <div />
        <Styled.SelectField
          name={subAction}
          value={state?.[subAction as keyof IntActions]}
          onChange={e => onChange(e)}
        >
          {!state?.[subAction as keyof IntActions] && (
            <option value="">Choose {subAction}</option>
          )}

          {subAction === subActionMap.mdProfile &&
            _map(dataSet, (m: IntProfile) => (
              <option key={m._id} value={m._id}>
                {m.profileName}
              </option>
            ))}

          {subAction === subActionMap.mdPage &&
            _map(dataSet, (m: IntPages, index: number) => (
              <option key={m._id} value={m._id}>
                {pageLabel(_toNumber(index))}
              </option>
            ))}
        </Styled.SelectField>
      </>
    );
  }

  return <div />;
};

export default MdActionParser;
