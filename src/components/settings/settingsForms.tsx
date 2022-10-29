import * as React from "react";
import _cloneDeep from "lodash/cloneDeep";
import { IntSettings, ISettingsFeaturesObs } from "../../types";
import { useGlobalData, useSettings } from "../../hooks";
import * as Styled from "./settingsForms.styles";

const SettingsForms: React.FC = () => {
  const globalData = useGlobalData();
  const { getSettings, updateSettings } = useSettings();

  const [settingsMD, setSettingsMD] = React.useState({
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
    setSettingsMD({ ipAddress: settings.ipAddress, port: settings.port });
    setSettingsOBS({ ...settings.features.obs });
  }, [globalData.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSettingsMD({ ...settingsMD, [name]: value });
  };

  const handleChangeObs = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setSettingsOBS({ ...settingsOBS, [name]: value });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newState: IntSettings = {
      ...settingsMD,
      features: {
        obs: {
          ...settingsOBS
        }
      }
    };

    updateSettings(newState);
  };

  return (
    <form onSubmit={onSubmit}>
      <Styled.Section>
        <h4>MacroDeck Settings</h4>

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
          <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
        </Styled.FieldSet>
      </Styled.Section>

      <Styled.Section>
        <h4>OBS Settings</h4>

        <Styled.FieldSet>
          <label htmlFor="features.obs.ipAddress">IP Address: </label>
          <div>
            <Styled.TextField
              name="ipAddress"
              onChange={handleChangeObs}
              value={settingsOBS.ipAddress}
            />
          </div>
        </Styled.FieldSet>

        <Styled.FieldSet>
          <label htmlFor="features.obs.port">Port:</label>

          <div>
            <Styled.TextField
              name="port"
              onChange={handleChangeObs}
              value={settingsOBS.port}
            />
          </div>
        </Styled.FieldSet>

        <Styled.FieldSet>
          <label htmlFor="features.obs.password">Password (optional):</label>
          <div>
            <Styled.TextField
              name="password"
              onChange={handleChangeObs}
              type="password"
              value={settingsOBS.password}
            />
          </div>
        </Styled.FieldSet>

        <Styled.FieldSet>
          <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
        </Styled.FieldSet>
      </Styled.Section>
    </form>
  );
};

export default SettingsForms;
