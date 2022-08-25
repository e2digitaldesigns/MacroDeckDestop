import React from "react";
import _cloneDeep from "lodash/cloneDeep";
import _truncate from "lodash/truncate";
import _replace from "lodash/replace";
import _map from "lodash/map";

import { useAppData, useProfile } from "../../../../../hooks";
import { ButtonPadNums, IntProfile } from "../../../../../types";
import SETTINGS from "../../../../../settings/system.json";

const initialState: IntProfile = {
  _id: "",
  profileName: "",
  buttonPads: ButtonPadNums.bpn06
};

const ProfileForm: React.FC = () => {
  const { appState } = useAppData();
  const { deleteProfile, readProfile, updateProfile } = useProfile();
  const [state, setState] = React.useState<IntProfile>(initialState);

  React.useEffect(() => {
    const profile = readProfile();
    if (profile && state._id !== appState.active.profileId) {
      setState(state => profile);
    }
  }, [appState.active.profileId, readProfile, state._id, setState]);

  React.useEffect(() => {
    return () => setState(state => initialState);
  }, []);

  const handleProfileNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newState: IntProfile = _cloneDeep(state);

    let value = _replace(e.target.value, new RegExp(/[^\da-zA-Z-_\s]/g), "");
    value = _truncate(value, {
      length: SETTINGS.APPLICATION.profileNameCharLength,
      omission: ""
    });

    newState.profileName = value;
    setState(newState);
  };

  const handleButtonPadChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newState: IntProfile = _cloneDeep(state);
    newState.buttonPads = parseInt(e.target.value);
    setState(newState);
  };

  const handleSubmit = (): void => {
    updateProfile(state._id, state);
  };

  const isDisabled = !state._id || !appState.active.profileId;

  return (
    <div>
      <input
        data-testid="profile_props__profile-name"
        disabled={isDisabled}
        onChange={handleProfileNameChange}
        type="text"
        value={state.profileName}
      />
      <select
        data-testid="profile_props__button-pads"
        disabled={isDisabled}
        onChange={handleButtonPadChange}
        value={state.buttonPads}
      >
        {_map(
          SETTINGS.BUTTON_PAD_AMOUNTS,
          (m: number): React.ReactElement => (
            <option key={m} value={m}>
              Button Pads: {m}
            </option>
          )
        )}
      </select>

      <button disabled={isDisabled} onClick={handleSubmit}>
        Submit
      </button>

      <button disabled={isDisabled} onClick={() => deleteProfile(state._id)}>
        Delete
      </button>
    </div>
  );
};

export default ProfileForm;
