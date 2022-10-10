import React from "react";
import { useAppData, useProfile } from "../../../../../hooks";

import _map from "lodash/map";
import _replace from "lodash/replace";
import _truncate from "lodash/truncate";

import SETTINGS from "../../../../../settings/system.json";
import * as Styled from "./profileEditor.style";
import * as FormStyles from "../../../../../styles/form.styles";
import { IntEditState } from "./../../../../../hooks/useProfileHook/useProfileHook";

interface IntProfileEditor {
  setIsEditMode: (boolean: boolean | null) => void;
}

const ProfileEditor: React.FC<IntProfileEditor> = ({ setIsEditMode }) => {
  const { deleteProfile, readProfile, updateProfile } = useProfile();
  const { appState } = useAppData();
  const activeProfile = readProfile();

  const [profileState, setProfileState] = React.useState<IntEditState>({
    profileName: "",
    buttonPads: 6
  });

  React.useEffect(() => {
    const profile = readProfile();

    profile?._id &&
      setProfileState({
        profileName: profile.profileName,
        buttonPads: profile.buttonPads
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.active.profileId]);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let { name, value } = event.target;
    if (name === "profileName") {
      value = _replace(value, new RegExp(/[^\da-zA-Z-_\s]/g), "");
      value = _truncate(value, {
        length: SETTINGS.APPLICATION.ButtonPadTextCharLength,
        omission: ""
      });
    }

    setProfileState({ ...profileState, [name]: value });
  };

  const handleUpdateProfile = (): void => {
    if (activeProfile) {
      updateProfile(activeProfile._id, profileState);
      setIsEditMode(false);
    }
  };

  const handleDeleteProfile = (): void => {
    if (activeProfile) {
      activeProfile?._id && deleteProfile(activeProfile._id);
      setIsEditMode(false);
    }
  };

  const handleClose = (): void => {
    setIsEditMode(false);
  };

  if (!activeProfile) return null;

  return (
    <Styled.ProfileEditorWrapper>
      <Styled.FieldSet>
        <div>
          <label>Profile Name</label>
        </div>
        <div>
          <FormStyles.TextField
            name="profileName"
            onChange={e => handleFormChange(e)}
            placeholder="Profile Name"
            type="text"
            value={profileState.profileName}
          />
        </div>
      </Styled.FieldSet>

      <Styled.FieldSet>
        <div>
          <label>Button Pads</label>
        </div>
        <div>
          <FormStyles.SelectField
            name="buttonPads"
            onChange={e => handleFormChange(e)}
            value={profileState.buttonPads}
          >
            {_map(SETTINGS.BUTTON_PAD_AMOUNTS, (padNumber: number) => (
              <option key={padNumber} value={padNumber}>
                {padNumber}
              </option>
            ))}
          </FormStyles.SelectField>
        </div>
      </Styled.FieldSet>

      <Styled.ButtonHolder>
        <Styled.CloseButton onClick={handleClose}>Close</Styled.CloseButton>
        <Styled.SubmitButton onClick={handleUpdateProfile}>
          Save
        </Styled.SubmitButton>
      </Styled.ButtonHolder>

      <Styled.ButtonHolderBottom>
        <Styled.DeleteButton onClick={handleDeleteProfile}>
          Delete
        </Styled.DeleteButton>
      </Styled.ButtonHolderBottom>
    </Styled.ProfileEditorWrapper>
  );
};

export default ProfileEditor;
