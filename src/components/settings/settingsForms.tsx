import * as React from "react";
import _cloneDeep from "lodash/cloneDeep";
import { IntSettings, ISettingsFeaturesObs, IMDSettings } from "../../types";
import { useGlobalData, useSettings } from "../../hooks";
import * as Styled from "./settingsForms.styles";
import ObsSettingsForms from "./settingsForms/obsSettings/obsSettings";

const SettingsForms: React.FC = () => {
  const globalData = useGlobalData();
  const { getSettings, updateSettings } = useSettings();

  const [settingsMD, setSettingsMD] = React.useState<IMDSettings>({
    ipAddress: "",
    port: ""
  });

  const [settingsOBS, setSettingsOBS] = React.useState<ISettingsFeaturesObs>({
    ipAddress: "",
    port: "",
    password: "",
    status: true
  });

  React.useEffect(() => {
    const settings: IntSettings = getSettings();
    setSettingsMD({ ipAddress: settings.md.ipAddress, port: settings.md.port });
    setSettingsOBS({ ...settings.features.obs });
  }, [
    globalData.state.settings.md.ipAddress,
    globalData.state.settings.md.port
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSettingsMD({ ...settingsMD, [name]: value });
  };

  const handleChangeObs = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSettingsOBS({ ...settingsOBS, [name]: value });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateSettings(settingsMD);
  };

  return (
    <Styled.FormWrapper>
      <Styled.FormScrollWrapper>
        <Styled.Section>
          <Styled.SectionHeader>MacroDeck Settings</Styled.SectionHeader>

          <Styled.FieldSet>
            <label htmlFor="ipAddress">IP Address:</label>
            <div>
              <Styled.TextField
                onChange={handleChange}
                readOnly
                value={settingsMD.ipAddress}
              />
            </div>
          </Styled.FieldSet>

          <Styled.FieldSet>
            <label htmlFor="port">Port: </label>
            <div>
              <Styled.TextField
                name="port"
                onChange={handleChange}
                value={settingsMD.port}
              />
            </div>
          </Styled.FieldSet>

          <Styled.FieldSet>
            <Styled.SubmitButton onClick={onSubmit}>Submit</Styled.SubmitButton>
          </Styled.FieldSet>
        </Styled.Section>

        <ObsSettingsForms />
      </Styled.FormScrollWrapper>
    </Styled.FormWrapper>
  );
};

export default SettingsForms;
