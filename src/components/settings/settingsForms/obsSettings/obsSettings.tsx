import * as React from "react";
import * as Styled from "../../settingsForms.styles";
import {
  IntSettings,
  ISettingsFeaturesObs,
  SettingsUpdaters
} from "../../../../types";
import { useGlobalData, useSettings } from "../../../../hooks";

const ObsSettingsForms: React.FC = () => {
  const globalData = useGlobalData();
  const { getSettings, updateFeature } = useSettings();

  const [settings, setSettings] = React.useState<ISettingsFeaturesObs>({
    ipAddress: "",
    port: "",
    password: "",
    status: true
  });

  React.useEffect(() => {
    const settings: IntSettings = getSettings();
    setSettings({ ...settings.features.obs });
  }, [globalData.state.settings.features.obs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateFeature(SettingsUpdaters.OBS, settings);
  };

  return (
    <Styled.Section2>
      <Styled.SectionHeader>OBS Settings</Styled.SectionHeader>

      <Styled.FieldSet>
        <label htmlFor="features.obs.ipAddress">IP Address: </label>
        <div>
          <Styled.TextField
            name="ipAddress"
            onChange={handleChange}
            value={settings.ipAddress}
          />
        </div>
      </Styled.FieldSet>

      <Styled.FieldSet>
        <label htmlFor="features.obs.port">Port:</label>

        <div>
          <Styled.TextField
            name="port"
            onChange={handleChange}
            value={settings.port}
          />
        </div>
      </Styled.FieldSet>

      <Styled.FieldSet>
        <label htmlFor="features.obs.password">Password (optional):</label>
        <div>
          <Styled.TextField
            name="password"
            onChange={handleChange}
            type="password"
            value={settings.password}
          />
        </div>
      </Styled.FieldSet>

      <Styled.FieldSet>
        <Styled.SubmitButton onClick={onSubmit}>Submit</Styled.SubmitButton>
      </Styled.FieldSet>
    </Styled.Section2>
  );
};

export default ObsSettingsForms;
